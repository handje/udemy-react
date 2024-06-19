import React, { useState } from "react";

const NewTask = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };
  return (
    <div className="flex items-center gap-4">
      <input
        value={newTask}
        onChange={handleInputChange}
        className="p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
      />
      <button
        onClick={() => {
          if (newTask.trim() === "") {
            return;
          }
          onAddTask(newTask);
          setNewTask("");
        }}
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
