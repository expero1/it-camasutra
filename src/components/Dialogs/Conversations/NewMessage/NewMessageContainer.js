//import css from './NewMessage.module.css';
import React from 'react';
import {useParams} from 'react-router-dom'
import {sendMessageActionCreator, saveMessageActionCreator} from './../../../../redux/dialogs-reducer.js'
import {NewMessage} from './NewMessage.jsx'

export const NewMessageContainer = (props) => {
  const userId = useParams()['userId']
  let dispatch = props.store.dispatch
  //let dispatch = props.dispatch;
  let state = props.store.getState()
  let message = state.dialogsData.dialogs[userId].currentMessage;
  //let message = props.message;
  //let userId = props.userId;

  let newMessageBlock = React.createRef();
  const saveMessage = ()=>{
    const value = newMessageBlock.current.value;
    dispatch (saveMessageActionCreator(value, userId))
  }
  
  const sendMessage = ()=>{
    dispatch(sendMessageActionCreator(userId))
  }
  
  return (
    <NewMessage saveMessage = {saveMessage} sendMessage = {sendMessage} message = {message} newMessageBlock={newMessageBlock}
    />
    )
}