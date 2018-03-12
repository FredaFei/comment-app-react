import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { initComment,removeComment } from '../../action.js'
import CommentItem from './commentItem.js'
import './index.css'

class CommentList extends Component{
    static propTypes = {
        comments: PropTypes.array,
        onRemoveComment: PropTypes.func
    }
    componentWillMount(){
        this._loadComment()
    }
    _loadComment(){
        let comments = window.localStorage.getItem('comments')
        comments = comments ? JSON.parse(comments):[]
        this.props.initComment(comments)
    }
    _saveComment(comments){
        window.localStorage.setItem('comments',JSON.stringify(comments))
    }
    handleRemoveComment = (index)=>{
        const {comments} = this.props
        const newComments = [
            ...comments.slice(0,index),
            ...comments.slice(index+1)
        ]
        this._saveComment(newComments)
        this.props.onRemoveComment(index)

    }
    render(){
        const {comments} = this.props
        return (
            <div className="comment-list">
                {
                    comments.map((item,index)=>{
                        return <CommentItem 
                            comment={item} 
                            key={item.createdTime}
                            index={index} 
                            onRemoveComment={this.handleRemoveComment}
                        />
                    })
                }
            </div>
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
        initComment: (comments)=>{
            dispatch(initComment(comments))
        },
        onRemoveComment: (index)=>{
            dispatch(removeComment(index))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CommentList)