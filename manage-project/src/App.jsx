import { useState } from "react";

import ProjectContextProvider from "./store/project-context";
import Nav from "./components/layout/Nav";
import NoProjectSelected from "./components/fallback/NoProjectSelected";
import AddProject from "./components/projects/AddProject";
import SelectedProject from "./components/projects/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  const handleSelectAdd = () => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  };

  const handleSelectProject = (projectId) => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: projectId,
      };
    });
  };

  const handleDeleteProject = () => {
    setProjectState((prev) => {
      return {
        ...prev,
        projects: projectState.projects.filter(
          (project) => project.id !== prev.selectedProjectId
        ),
        selectedProjectId: undefined,
      };
    });
  };

  let content;
  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onSelectAdd={handleSelectAdd} />;
  } else if (projectState.selectedProjectId === null) {
    content = <AddProject setProjectState={setProjectState} />;
  } else {
    content = (
      <SelectedProject
        selectedProject={selectedProject}
        onDeleteProject={handleDeleteProject}
      />
    );
  }

  return (
    <ProjectContextProvider>
      <main className="h-screen my-8 flex gap-8">
        <Nav
          onSelectAdd={handleSelectAdd}
          projects={projectState.projects}
          onSelectedProject={handleSelectProject}
          selectedId={projectState.selectedProjectId}
        />
        {content}
      </main>
    </ProjectContextProvider>
  );
}

export default App;
