import React, { Component } from 'react';
import './App.css';
import CommentInput from './commentApp/commentInput'
import CommentList from './commentApp/commentList'

class App extends Component {
  constructor(){
    super(...arguments)
    this.state = {
      commentList: []
    }
  }
  
  
  
  handleComment = (comment)=>{
    if(!comment){return}
    if(!comment.name){return alert('请输入用户名')}
    if(!comment.content){return alert('请输入评论内容')}
    let newCommentList = [...this.state.commentList]
    newCommentList.push(comment)
    this.setState({commentList: newCommentList})
    this._saveComment(newCommentList)
  }
  
  render() {
    let {commentList} = this.state
    return (
      <div className="wrap">
        <CommentInput onCommentSubmit={this.handleComment} />
        <CommentList 
          commentList={commentList} 
          onRemoveComment={this.handleRemoveComment} />
      </div>
    );
  }
}

export default App;
