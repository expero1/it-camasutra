//import css from './NewMessage.module.css';
import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
//import Dialogs from '../../Dialogs.jsx';
import {
  sendMessageActionCreator,
  saveMessageActionCreator,
  saveCurrentDialogUserIdActionCreator,
} from "./../../../../redux/dialogs-reducer.js";

import { NewMessage } from "./NewMessage.jsx";

export const NewMessageContainer_ = (props) => {
  const userId = useParams()["userId"];
  let dispatch = props.store.dispatch;
  //let dispatch = props.dispatch;
  let state = props.store.getState();
  let message = state.dialogsData.dialogs[userId].currentMessage;
  //let message = props.message;
  //let userId = props.userId;

  let newMessageBlock = React.createRef();
  const saveMessage = () => {
    const value = newMessageBlock.current.value;
    dispatch(saveCurrentDialogUserIdActionCreator(userId));
    dispatch(saveMessageActionCreator(value));
  };

  const sendMessage = () => {
    dispatch(sendMessageActionCreator(userId));
  };

  return (
    <NewMessage
      saveMessage={saveMessage}
      sendMessage={sendMessage}
      message={message}
      newMessageBlock={newMessageBlock}
    />
  );
};

let mapStateToProps = (state) => {
  const userId = state.dialogsData.currentDialogUserId;
  let message = ''
  let newMessageBlock = React.createRef();
  if (userId){
    message = state.dialogsData.dialogs[userId].currentMessage
  }
  return {
    message: message,
    newMessageBlock: newMessageBlock,
  };
};

let mapDispatchToProps = (dispatch) => {
  
  return {
    //saveUserId : (userId)=>{
    //const userId = useParams()["userId"];
    //return userId;
    
  //},
    saveMessage: (value, userId) => {
      
      dispatch(saveCurrentDialogUserIdActionCreator(userId));
      dispatch(saveMessageActionCreator(value));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
  };
};

export const NewMessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMessage);
