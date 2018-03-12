import React,{Component} from 'react'

class Input extends Component{
    constructor(){
        super(...arguments)
        this.state = {
            name: '',
            comment: ''
        }
    }
    componentWillMount(){
        this._loadCommentName()
    }
    componentDidMount(){
        this.textarea.focus()
    }
    _loadCommentName(){
        let name = window.localStorage.getItem('name')
        if(name) {
            this.setState({name})
        }
    }
    _saveCommentName(value){
        window.localStorage.setItem('name',value)
    }
    _saveComment(comments){
        window.localStorage.setItem('comments',JSON.stringify(comments))
    }
    handleBlurName = (e)=>{
        this._saveCommentName(e.target.value)
    }
    handleChangeName =(e)=>{this.setState({name: e.target.value})}
    handleChangeComment= (e)=>{this.setState({content: e.target.value})}

    handleSubmitComment = ()=>{
        let {name,content} = this.state
        if(!name){return alert('请输入用户名')}
        if(!content){return alert('请输入评论内容')}
        const newComment = {name,content,createdTime: +new Date()}
        this.props.onAddComment(newComment)
        this.setState({content: ''})
        this.textarea.focus()
        this._saveComment([...this.props.comments,newComment])
    }
    render() {
        let {name,content} = this.state
        return (
            <div className="comment-input">
                <div className="name-input-box flex-left">
                    <label className="title" id="username">用户名：</label>
                    <input id="username"
                           value={name} onChange={this.handleChangeName} onBlur={this.handleBlurName}/>
                </div>
                <div className="comment-box flex-left">
                    <label className="title" id="usercomment">评论内容：</label>
                    <textarea id="usercomment" value={content} rows="10" cols="50"
                              onChange={this.handleChangeComment}
                              ref={textarea => this.textarea = textarea}/>
                </div>
                <div className="comment-submit">
                    <button className="button" onClick={this.handleSubmitComment}>发布</button>
                </div>
            </div>
        )
    }

}

export default Input