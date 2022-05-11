import css from './NewMessage.module.css';
import React from 'react';
import {useParams} from 'react-router-dom'
import {sendMessageActionCreator, saveMessageActionCreator} from './../../../../redux/dialogs-reducer.js'

export const NewMessage = (props) => {
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
    <div className = {css.NewMessage}>
    <textarea ref={newMessageBlock} onChange={saveMessage} value={props.message}></textarea>
    <br/>
    <button onClick={sendMessage}>Send</button>
    </div>
    )
}