import React from "react";
import Button from "../common/Button";

const Nav = ({ onSelectAdd, projects, onSelectedProject, selectedId }) => {
  return (
    <>
      <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
          YOUR PROJECTS
        </h2>
        <div>
          <Button onClick={onSelectAdd}>+Add Project</Button>
        </div>
        <ul className="mt-8">
          {projects?.map((project) => {
            let liStyle =
              "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
            if (project.id === selectedId) {
              liStyle += " bg-stone-800 text-stone-200";
            } else {
              liStyle += " text-stone-400";
            }
            return (
              <li key={project.id}>
                <button
                  className={liStyle}
                  onClick={() => {
                    onSelectedProject(project.id);
                  }}
                >
                  {project.title}
                </button>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default Nav;
