import {
  ADD_TODO,
  CLEAR_COMPLETED,
  COLOR_SELECT,
  COMPLETE_ALL,
  DELETE_TODO,
  TOGGLE_TODO,
} from "./todosActionType";

const { initialTodoState } = require("./todosInitialState");

const todosReducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.length + 1,
          ...action.payload,
        },
      ];
    case DELETE_TODO:
      return state?.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      });

    case COLOR_SELECT:
      return state?.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return {
            ...todo,
            color: action.payload.color,
          };
        } else {
          return todo;
        }
      });
    case COMPLETE_ALL:
      return state?.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });
    case CLEAR_COMPLETED:
      return state.filter((todo) => todo.completed === false);
    default:
      return state;
  }
};

export default todosReducer;
