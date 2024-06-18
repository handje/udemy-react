import { createContext, useState } from "react";

export const ProjectContext = createContext({
  projects: [],
  onAddProject: () => {},
});

const ProjectContextProvider = ({ children }) => {
  const [projects, setProjects] = useState({ projects: [] });

  const handleAddProject = (newContent) => {
    setProjects((prev) => {
      const updated = [...prev.projects];
      updated.push({
        title: newContent.title,
        description: newContent.descript,
        dueDate: newContent.date,
        todos: newContent.todos,
      });
      return {
        projects: updated,
      };
    });
  };

  const initial = {
    projects: [
      {
        title: "Learning React",
        description: `Learn React from the group up
      Start with the basics, finish with advanced knowledge`,
      },
    ],
    onAddProject: handleAddProject,
  };
  return (
    <ProjectContext.Provider value={initial}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
