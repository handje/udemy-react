import { useContext } from "react";
import Todo from "../models/todo";
import classess from "./TodoItem.module.css";
import { TodosContext } from "../store/todos-context";

const TodoItem = ({ item }: { item: Todo }) => {
  const { removeTodo } = useContext(TodosContext);
  return (
    <li className={classess.item} onClick={() => removeTodo(item.id)}>
      {item.text}
    </li>
  );
};
export default TodoItem;
