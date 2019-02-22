import {ADD_TODO, REMOVE_TODO, GET_TODOS } from './actionCreators';
const initialState = {
    todo: []
};


export default function rootReducer(state = initialState, action){

    switch(action.type){
        case GET_TODOS: 
            return { ...state, todo: action.data }
        case ADD_TODO:
            let newState = { ...state }
            return {
                ...newState,
                todo: [ ...newState.todo, action.task ]
            };
        case REMOVE_TODO:
            let currentState = { ...state }
            let todo = currentState.todo.filter(todo => action.id !== todo._id)
            return {
                ...state, todo
            };
            default: return state;
    }   
}