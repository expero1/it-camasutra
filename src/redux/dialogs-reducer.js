const SAVE_MESSAGE = 'SAVE-MESSAGE'
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsData= {
      dialogs: {
        '2': {dialog:[{ id:1, m:'hey' }, {id: 2, m:'yo' }, {id: 1, m:'howa' }, { id:2, m:'chee' }],currentMessage:''},
        '3': {dialog:[{ id:1, m:'hoho' }, { id:1, m:'huyo' }, { id:3, m:'moko' }], currentMessage:''},
        '4': {dialog:[{id: 4,m: 'jimja' }, { id:1,m: 'muru' }, { id:4,m: 'arte' }], currentMessage:''},
      },
      currentUserId:1,
    }
export const dialogsReducer = (state=dialogsData, action)=>{
  switch (action.type) {
      case SAVE_MESSAGE:
        state.dialogs[action.userId].currentMessage = action.text;
        return state
        
      case SEND_MESSAGE:
        let userId = action.userId;
        state.dialogs[userId].dialog.push({ 'id':userId, 'm': state.dialogs[userId].currentMessage,
        'key':Math.random().toString(36).substr(2, 5)})
        return state
        
      default:
      return state
      // code
    }
    
}

export const saveMessageActionCreator = (text, userId) => { return { type: SAVE_MESSAGE, text: text, userId:userId } }

export const sendMessageActionCreator = (userId) =>{ return ({type:SEND_MESSAGE, userId:userId})
}