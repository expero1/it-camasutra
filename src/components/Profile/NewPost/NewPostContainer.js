import React from 'react'
import {addPostActionCreator, saveCurrentPostActionCreator} from './../../../redux/profile-reducer.js'
import {NewPost} from './NewPost.jsx'

export const NewPostContainer = (props)=>{
  let newPostRef = React.createRef();
  
  const addPost =()=>{
    //let value = newPostElement.current.value;
    //addPostActionCreator()
    props.dispatch (addPostActionCreator())
  
  }
  const saveCurrentPost = ()=>{
    let value = newPostRef.current.value;
    props.dispatch(saveCurrentPostActionCreator(value))
    
  }
  return (
    <NewPost addPost={addPost} saveCurrentPost={saveCurrentPost} currentValue = {props.current} newPostRef = {newPostRef}/>
    )
}