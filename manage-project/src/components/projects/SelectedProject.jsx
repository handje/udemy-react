import React from "react";

const SelectedProject = ({ selectedProject, onDeleteProject }) => {
  const formattedDate = new Date(selectedProject?.dueDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {selectedProject?.title}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={onDeleteProject}
          >
            Delete
          </button>
        </div>
        <div>
          <p className="mb-4 text-stone-400">{formattedDate}</p>
          <p className="text-stone-600 whitespace-pre-wrap">
            {selectedProject?.description}
          </p>
        </div>
      </header>

      <div>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <div>
          <input />
          <button>Add Task</button>
        </div>

        <div>
          <p className="text-stone-800 my-4">task name</p>
          <button>Clear</button>
        </div>
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          <li>ss</li>
        </ul>
      </div>
    </div>
  );
};

export default SelectedProject;
