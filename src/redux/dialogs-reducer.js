import Dialogs from "../components/Dialogs/Dialogs"

const SAVE_MESSAGE = 'SAVE-MESSAGE'
const SEND_MESSAGE = 'SEND-MESSAGE'
const SAVE_CURRENT_DIALOG_USER_ID = 'SAVE-CURRENT-DIALOG-USER-ID'
const dialogsData= {
      dialogs: {
        '2': {dialog:[{ id:1, m:'hey' }, {id: 2, m:'yo' }, {id: 1, m:'howa' }, { id:2, m:'chee' }],currentMessage:''},
        '3': {dialog:[{ id:1, m:'hoho' }, { id:1, m:'huyo' }, { id:3, m:'moko' }], currentMessage:''},
        '4': {dialog:[{id: 4,m: 'jimja' }, { id:1,m: 'muru' }, { id:4,m: 'arte' }], currentMessage:''},
      },
      currentUserId:1,
      currentDialogUserId: null,
    }
export const dialogsReducer = (state=dialogsData, action)=>{
  let userId = state.currentUserId;
  let dialogUserId = state.currentDialogUserId;
  let newState;
  switch (action.type) {
      case SAVE_MESSAGE:
        newState = {...state};
        newState.dialogs = {...state.dialogs}
        for (let id in state.dialogs){
          if (dialogUserId === id) {
            let newDialog = {...state.dialogs[id]}
            newDialog.currentMessage = action.text;
            newState.dialogs[id] = newDialog
          }
        }
        //state.dialogs[userId].currentMessage = action.text;
        return newState
        
      case SEND_MESSAGE:
        newState  = {...state, dialogs:{...state.dialogs}}
        //let dialogUserId = state.currentDialogUserId;
        userId = state.currentUserId;
        let dialog = {...state.dialogs[dialogUserId]}
        dialog.dialog.push ({ 'id':userId, 'm': state.dialogs[dialogUserId].currentMessage,'key':Math.random().toString(36).substr(2, 5)})
        newState.dialogs[dialogUserId] = dialog;
        newState.dialogs[dialogUserId].currentMessage = ''
        return newState
      case  SAVE_CURRENT_DIALOG_USER_ID:
        userId = action.userId;
        state.currentDialogUserId = userId;
        return state;
      default:
      return state
      // code
    }
    
}

export const saveMessageActionCreator = (text) => { return { type: SAVE_MESSAGE, text: text } }

export const sendMessageActionCreator = () =>{ return ({type:SEND_MESSAGE})}

export const saveCurrentDialogUserIdActionCreator = (userId) => {return ({type:SAVE_CURRENT_DIALOG_USER_ID, userId:userId})}
