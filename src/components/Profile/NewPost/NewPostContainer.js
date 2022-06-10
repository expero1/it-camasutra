import React from 'react'
//import StoreContext from '../../../../StoreContext.js'
import {addPostActionCreator, saveCurrentPostActionCreator} from './../../../redux/profile-reducer.js'
import {NewPost} from './NewPost.jsx'
import { connect } from 'react-redux'

export const NewPostContainer_ = (props)=>{
  const store = props.store;
  const dispatch = store.dispatch;
  const state = store.getState()
  const currentValue = state.profileData.currentPost;
  let newPostRef = React.createRef();
  
  const addPost =()=>{
    //let value = newPostElement.current.value;
    //addPostActionCreator()
    dispatch (addPostActionCreator())
  
  }
  const saveCurrentPost = ()=>{
    let value = newPostRef.current.value;
    dispatch(saveCurrentPostActionCreator(value))
    
  }
  return (
      
    <NewPost addPost={addPost} saveCurrentPost={saveCurrentPost} currentValue = {currentValue} newPostRef = {newPostRef}/>
    )
}
let mapStateToProps  = (state) => {
  return {
    currentValue:state.profileData.currentPost,

  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: ()=>{dispatch (addPostActionCreator())},
    saveCurrentPost:(value)=>{dispatch(saveCurrentPostActionCreator(value))}
    }
  }

export const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)

