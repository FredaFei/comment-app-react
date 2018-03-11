import * as action from './actionTypes.js'

export default (state,action)=>{
    if(!state){
        state = {comments: []}
    }
    switch(action.type){
        case action.INIT_COMMENT: {
            return { comments: action.comments }
        }
        case action.ADD_COMMENT: {
            return { comments: [...state.comments, action.comments] }
        }
        case action.REMOVE_COMMENT: {
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

