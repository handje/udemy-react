import { useContext } from "react";
import TodoItem from "./TodoItem";
import classess from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

const Todos = () => {
  const { items } = useContext(TodosContext);
  return (
    <ul className={classess.todos}>
      {items.map((item) => (
        <TodoItem item={item} key={item.id} />
      ))}
    </ul>
  );
};
export default Todos;
