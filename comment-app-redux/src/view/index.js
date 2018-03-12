import React from 'react';
import CommentInput from './commentInput/index'
import CommentList from './commentList/index'
import './index.css';

export default ()=>{
    return (
      <div className="wrap">
        <CommentInput />
        <CommentList />
      </div>
    );
}
