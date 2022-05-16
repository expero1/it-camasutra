import css from './NewPost.module.css'

export const NewPost = (props)=>{
  return (
    <div className={css.new_post}>
        <h4>New post</h4>
        <textarea ref={props.newPostRef} value = {props.currentValue} onChange={props.saveCurrentPost}/>
        <div className={css.button}>
        <button id='addPost' onClick = {props.addPost}>submit</button>
        </div>
        </div>
    )
}