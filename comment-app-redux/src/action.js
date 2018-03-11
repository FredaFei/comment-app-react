import * as action from './actionTypes.js'

export const initComment = (comments)=>{
    return {
        type: action.INIT_COMMENT,
        comments
    }
}

export const addComment = (comments)=>{
    return {
        type: action.ADD_COMMENT,
        comments
    }
}

export const removeComment = (index)=>{
    return {
        type: action.REMOVE_COMMENT,
        index
    }
}