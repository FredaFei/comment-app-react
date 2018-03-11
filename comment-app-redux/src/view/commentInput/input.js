import React from 'react'
const Input = (props)=>{
    let {name,content} = props
    return (
        <div className="comment-input">
            <div className="name-input-box flex-left">
                <label className="title" id="username">用户名：</label>
                <input id="username"
                value={name} onChange={props.handleChangeName} onBlur={props.handleBlurName} />
            </div>
            <div className="comment-box flex-left">
                <label className="title" id="usercomment">评论内容：</label>
                <textarea id="usercomment" value={content} rows="10" cols="50" onChange={props.handleChangeComment} ref={textarea=>this.textarea=textarea} />
            </div>
            <div className="comment-submit"><button className="button" onClick={props.handleSubmitComment}>发布</button></div>
        </div>
    )
}

export default Input