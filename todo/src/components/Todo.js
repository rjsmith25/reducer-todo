import React from "react";
import "./Todo.css";

function Todo({ todo, handleTodoClick }) {
  return (
    <li
      id={todo.id}
      onClick={handleTodoClick}
      className={todo.completed ? "strike-through" : undefined}
    >
      {todo.item}
    </li>
  );
}

export default Todo;
