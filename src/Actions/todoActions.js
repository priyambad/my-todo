import {FETCH_TODOS, NEW_TODO, TOGGLE_TODO, DELETE_TODO} from './types';

export const fetchTodo = () =>{
    return {
        type : FETCH_TODOS,
    };
}
export const newTodo = (newTodoItem) =>{
    return {
        type : NEW_TODO,
        payload : newTodoItem
    };
}
export const toggleTodoStatus = (id) =>{
    return {
        type : TOGGLE_TODO,
        payload : id
    }
}
export const deleteTodo = (id) =>{
    return {
        type : DELETE_TODO,
        payload : id
    }
}