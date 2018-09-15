import {FETCH_TODOS, NEW_TODO, TOGGLE_TODO,DELETE_TODO} from '../Actions/types';

const initialState = {
    todos : [],
}

export default function (state = initialState, action){
    switch(action.type){
        case FETCH_TODOS : 
            return {
                ...state
            };
        case NEW_TODO :
            return {
                ...state,
                todos : [...state.todos,action.payload]
            };
        case TOGGLE_TODO :
            const newState = state.todos.map(todo=>{
                if(todo.id === action.payload)
                    return {
                        ...todo,
                        completed : !todo.completed
                    }
                return todo;
            });
            return {
                ...state,
                todos : newState
            }
        case DELETE_TODO :
            console.log('relevent reducer called');
            const removedTodo = state.todos.filter(todo=>{
                return todo.id !== action.payload
            });
            return {
                ...state,
                todos : removedTodo
            }
        default :
            return state;
    }
}