import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentItem from './commentItem.js'
import './index.css'

class CommentList extends Component{
    static propTypes = {
        commentList: PropTypes.array,
        onRemoveComment: PropTypes.func
    }
    handleRemoveComment = (index)=>{
        let {onRemoveComment} = this.props
        if(onRemoveComment){
            this.props.onRemoveComment(index)
        }
    }
    render(){
        const {commentList} = this.props
        return (
            <div className="comment-list">
                {
                    commentList.map((item,index)=>{
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
export default CommentList