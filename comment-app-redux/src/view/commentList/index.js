import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { initComments,removeComment } from '../../reducer.js'
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
        if(comments){
            comments = JSON.parse(comments)
            this.setState({comments})
        }
    }
    _saveComment(comments){
        window.localStorage.setItem('comments',JSON.stringify(comments))
    }
    handleRemoveComment = (index)=>{
        let newComments = this.state.comments
        newComments.splice(index,1)
        this.setState({comments: newComments})
        this._saveComment(newComments)
        
        let {onRemoveComment} = this.props
        if(onRemoveComment){
            this.props.onRemoveComment(index)
        }
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
        initComments: (comments)=>{
            dispatch(initComments(comments))
        },
        removeComment: (index)=>{
            dispatch(removeComment(index))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CommentList)