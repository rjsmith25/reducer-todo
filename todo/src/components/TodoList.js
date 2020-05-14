import React from "react";
import Todo from "./Todo.js";

function TodoList({ tasks, handleTodoClick }) {
  return (
    <ul className="todos">
      {tasks.map(todo => {
        return (
          <Todo key={todo.id} todo={todo} handleTodoClick={handleTodoClick} />
        );
      })}
    </ul>
  );
}

export default TodoList;
