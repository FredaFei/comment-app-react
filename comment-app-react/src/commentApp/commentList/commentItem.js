import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

class CommentItem extends Component{
    static propTypes = {
        comment: PropTypes.object.isRequired,
        onRemoveComment: PropTypes.func,
        index: PropTypes.number
    }
    constructor(){
        super(...arguments)
        this.state = {
            timeString: ''
        }
    }
    componentWillMount(){
        this._updateTimeString()
        this._timer = setInterval(this._updateTimeString.bind(this),5000)
    }
    componentWillUnmount(){
        clearInterval(this._timer)
    }
    _updateTimeString(){
        const {comment} = this.props
        const duration = (+new Date() - comment.createdTime)/1000
        let timeString = '' 
        if(duration>60){
            timeString = `${Math.round(duration/60)}分钟前`
        }else{
            timeString = `${Math.round(Math.max(duration,1))}秒前`
        }
        this.setState({timeString})
    }
    _getProcessedContent(content){
        return content
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        .replace(/`([\S\s]+?)`/g,'<code>$1</code>')
    }
    handleRemove =()=>{
        const {index,onRemoveComment} = this.props
        if(!onRemoveComment){return}
        this.props.onRemoveComment(index)
    }
    render(){
        const {comment} = this.props
        const {timeString} = this.state
        return (
            <div className="comment-item flex">
                <span className="name">{comment.name}: </span>
                <div className="comment" dangerouslySetInnerHTML={{
                    __html: this._getProcessedContent(comment.content)
                }} />
                <span className="remove" onClick={this.handleRemove}>删除</span>
                <span className="createdtime">{timeString}</span>
            </div>
        )
    }
}
export default CommentItem