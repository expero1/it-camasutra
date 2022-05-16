//import css from './NewMessage.module.css';
import React from 'react';
import {useParams} from 'react-router-dom'
import {sendMessageActionCreator, saveMessageActionCreator} from './../../../../redux/dialogs-reducer.js'
import {NewMessage} from './NewMessage.jsx'

export const NewMessageContainer = (props) => {
const userId = useParams()['userId']
  let newMessageBlock = React.createRef();
  const saveMessage = ()=>{
    const value = newMessageBlock.current.value;
    props.dispatch (saveMessageActionCreator(value, userId))
  }
  
  const sendMessage = ()=>{
    props.dispatch(sendMessageActionCreator(userId))
  }
  
  return (
    <NewMessage saveMessage = {saveMessage} sendMessage = {sendMessage} message = {props.message} newMessageBlock={newMessageBlock}
    />
    )
}