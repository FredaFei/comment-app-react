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
  componentWillMount(){
      this._loadComment()
  }
  _saveComment(comments){
      window.localStorage.setItem('commentList',JSON.stringify(comments))
  }
  _loadComment(){
      let commentList = window.localStorage.getItem('commentList')
      if(commentList){
          commentList = JSON.parse(commentList)
          this.setState({commentList})
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
  handleRemoveComment = (index)=>{
    let newCommentList = this.state.commentList
    newCommentList.splice(index,1)
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
