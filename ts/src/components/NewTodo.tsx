import { useContext, useRef } from "react";
import classess from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodos = () => {
  const { addTodo } = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    addTodo(enteredText);
    todoTextInputRef.current!.value = "";
  };
  return (
    <form onSubmit={submitHandler} className={classess.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodos;
