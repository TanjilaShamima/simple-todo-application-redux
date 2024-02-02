const { combineReducers } = require("redux");
const { default: filterReducer } = require("./filter/filterReducer");
const { default: todosReducer } = require("./todos/todosReducer");

const rootReducer = combineReducers({
    todos: todosReducer,
    filter: filterReducer
})

export default rootReducer;