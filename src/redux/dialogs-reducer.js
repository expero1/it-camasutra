const SAVE_MESSAGE = 'SAVE-MESSAGE'
const SEND_MESSAGE = 'SEND-MESSAGE'
export const dialogsReducer = (action, state)=>{
  switch (action.type) {
      case SAVE_MESSAGE:
        state.dialogs[action.userId].currentMessage = action.text;
        return state
        break;
      case SEND_MESSAGE:
        let userId = action.userId;
        state.dialogs[userId].dialog.push({ 'id':userId, 'm': state.dialogs[userId].currentMessage,
        'key':Math.random().toString(36).substr(2, 5)})
        return state
        break;
      default:
      return state
      // code
    }
    
}

export const saveMessageActionCreator = (text, userId) => { return { type: SAVE_MESSAGE, text: text, userId:userId } }

export const sendMessageActionCreator = (userId) =>{ return ({type:SEND_MESSAGE, userId:userId})
}