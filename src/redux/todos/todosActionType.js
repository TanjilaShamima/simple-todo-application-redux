import { ADD_TODO, COLOR_SELECT, COMPLETE_ALL, DELETE_TODO, TOGGLE_TODO } from "./todosActions"

export const addTodo = (todoData) => {
    return {
        type: ADD_TODO,
        payload: todoData
    }
}

export const deleteTodo = (todoId) => {
    return {
        type: DELETE_TODO,
        payload: todoId
    }
}

export const toggleTodo = (todoId) => {
    return {
        type: TOGGLE_TODO,
        payload: todoId
    }
}

export const colorSelect = (todoId, color) => {
    return {
        type: COLOR_SELECT,
        payload: {
            todoId,
            color
        }
    }
}

export const completeAll = () => {
    return {
        type: COMPLETE_ALL,
    }
}

export const clearCompleted = () => {
    return {
        type: COMPLETE_ALL,
    }
}