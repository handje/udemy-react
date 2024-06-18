import { useRef } from "react";
import Input from "../common/Input";
import Modal from "../common/Modal";

const AddProject = ({ setProjectState }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const modal = useRef();
  const handleCancelAdd = () => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
      };
    });
  };
  const handleAddProject = () => {
    const inputTitle = title.current.value;
    const inputDescription = description.current.value;
    const inputDueDate = dueDate.current.value;

    if (
      inputTitle.trim() === "" ||
      inputDescription.trim() === "" ||
      inputDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    const newProject = {
      id: Math.random(),
      title: inputTitle,
      description: inputDescription,
      dueDate: inputDueDate,
    };

    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  };

  return (
    <div className="w-[35rem] mt-16">
      <Modal ref={modal} buttonLabel="close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Ooops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure to enter a title, description and due date.
        </p>
      </Modal>
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            className="text-stone-800 hover:text-stone-950"
            onClick={handleCancelAdd}
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleAddProject}
          >
            Save
          </button>
        </li>
      </menu>
      <div method="newProject">
        <Input ref={title} label="title" type="text" />
        <Input ref={description} label="DESCRIPTION" textarea />
        <Input ref={dueDate} label="DUE DATE" type="date" />
      </div>
    </div>
  );
};

export default AddProject;
