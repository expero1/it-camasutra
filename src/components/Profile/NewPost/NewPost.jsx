import React from 'react'
import css from './NewPost.module.css'
import {addPostActionCreator, saveCurrentPostActionCreator} from './../../../redux/profile-reducer.js'

export const NewPost = (props)=>{
  let newPostElement = React.createRef();
  
  const addPost =()=>{
    //let value = newPostElement.current.value;
    //addPostActionCreator()
    props.dispatch (addPostActionCreator())
  
  }
  const saveCurrentPost = ()=>{
    let value = newPostElement.current.value;
    props.dispatch(saveCurrentPostActionCreator(value))
    
  }
  return (
    <div className={css.new_post}>
        <h4>New post</h4>
        <textarea ref={newPostElement} value = {props.currentPost} onChange={saveCurrentPost}/>
        <div className={css.button}>
        <button id='addPost' onClick = {addPost}>submit</button>
        </div>
        </div>
    )
}