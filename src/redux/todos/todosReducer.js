import { ADD_TODO, CLEAR_COMPLETED, COLOR_SELECT, COMPLETE_ALL, DELETE_TODO, TOGGLE_TODO } from "./todosActions";

const { initialTodoState } = require("./todosInitialState");

const  todosReducer = (state = initialTodoState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {}
        case DELETE_TODO:
            return {};
        case TOGGLE_TODO:
            return {};
        case COLOR_SELECT:
            return {};
        case COMPLETE_ALL:
            return {};
        case CLEAR_COMPLETED:
            return {};
        default:
            return state;
    }
}

export default todosReducer;