import css from './NewPost.module.css'
import React from 'react';
export const NewPost = (props)=>{
  let newPostRef = React.createRef();
  const saveCurrentPost = ()=>{
    let value = newPostRef.current.value;
    props.saveCurrentPost(value)
  }
  return (
    <div className={css.new_post}>
        <h4>New post</h4>
        <textarea ref={newPostRef} value = {props.currentValue} onChange={saveCurrentPost}/>
        <div className={css.button}>
        <button id='addPost' onClick = {props.addPost}>submit</button>
        </div>
        </div>
    )
}