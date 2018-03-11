import React from 'react';
import CommentInput from './commentApp/commentInput'
import CommentList from './commentApp/commentList'
import './index.css';

export default ()=>{
    return (
      <div className="wrap">
        <CommentInput />
        <CommentList />
      </div>
    );
}
