import React from "react";

function TodoForm({ newTodo, handleInputChange, handleSubmit, completed }) {
  return (
    <form onSubmit={handleSubmit} className="todos-form">
      <input
        value={newTodo}
        onChange={handleInputChange}
        type="text"
        placeholder="add to todo list"
      />
      <button>Add Todo</button>
      <button onClick={completed}>Clear Completed</button>
    </form>
  );
}

export default TodoForm;
