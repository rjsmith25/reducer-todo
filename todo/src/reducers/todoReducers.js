const initialState = {
  newTodo: "",
  tasks: [
    {
      item: "Organize Garage",
      id: 1528817077286,
      completed: false
    },
    {
      item: "Bake Cookies",
      id: 1528817084358,
      completed: false
    }
  ]
};

function ToggleTodo(state, action) {
  let newTask = state.tasks.map(task => {
    if (task.id === action.payload.id) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });

  return {
    ...state,
    tasks: newTask
  };
}

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        newTodo: ""
      };
    case "TOGGLE_TODO":
      return ToggleTodo(state, action);
    case "SET_TODO_TEXT":
      return {
        ...state,
        newTodo: action.payload
      };
    case "CLEAR_COMPLETED_TODO":
      let tasks = state.tasks.filter(task => {
        return task.completed !== true;
      });
      return {
        ...state,
        tasks: tasks
      };
    default:
      return state;
  }
}

export { initialState, todoReducer };
