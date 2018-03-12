import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './index.css'

import Input from './input'
import { addComment } from '../../action.js'

class CommentInput extends Component{
    static proptypes = {
        comments: PropTypes.array,
        onAddComment: PropTypes.func
    }

    handleSubmitComment = (comments)=>{
        this.props.onAddComment(comments)
    }
    render(){
        return (
            <Input onAddComment={this.handleSubmitComment} comments={this.props.comments}/>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        comments: state.comments
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        onAddComment: (comments)=>{
            dispatch(addComment(comments))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CommentInput)