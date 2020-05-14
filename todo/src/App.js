import React, { useReducer } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { initialState, todoReducer } from "./reducers/todoReducers";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  function addTodo(e) {
    e.preventDefault();
    if (state.newTodo) {
      dispatch({
        type: "ADD_TODO",
        payload: { id: +Date.now(), item: state.newTodo, completed: false }
      });
    }
  }

  function toggleTodo(id) {
    dispatch({
      type: "TOGGLE_TODO",
      payload: { id }
    });
  }

  function handleInputChange(e) {
    dispatch({
      type: "SET_TODO_TEXT",
      payload: e.target.value
    });
  }

  function handleSubmit(e) {
    addTodo(e);
  }

  function handleTodoClick(e) {
    toggleTodo(+e.target.id);
  }

  function completed() {
    dispatch({
      type: "CLEAR_COMPLETED_TODO"
    });
  }

  return (
    <div className="container">
      <div className="todoApp">
        <h1 className="title">Todo App</h1>
        <TodoList tasks={state.tasks} handleTodoClick={handleTodoClick} />
        <TodoForm
          newTodo={state.newTodo}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          completed={completed}
        />
      </div>
    </div>
  );
}

export default App;
