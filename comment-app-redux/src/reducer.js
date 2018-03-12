import {INIT_COMMENT, ADD_COMMENT, REMOVE_COMMENT} from './actionTypes.js'

export default (state,action)=>{
    if(!state){
        state = {comments: []}
    }
    switch(action.type){
        case INIT_COMMENT: {
            return { comments: action.comments }
        }
        case ADD_COMMENT: {
            return { comments: [...state.comments, action.comments] }
        }
        case REMOVE_COMMENT: {
            return { 
                comments: [
                ...state.comments.slice(0,action.index),
                ...state.comments.slice(action.index+1)
                ] 
            }
        }
        default: {
            return state
        }
    }
}

