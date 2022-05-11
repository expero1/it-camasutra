const ADD_POST = 'ADD-POST'
const SAVE_CURRENT_POST = 'SAVE-CURRENT-POST'
export const profileReducer = (action, state)=>{
   switch (action.type) {
      case ADD_POST:
        state.posts.push(
      {
        header: '',
        body: state.currentPost,
        image: 'https://dummyimage.com/50x50/efefef/000000.jpg',
        likes: '0',
      })
    state.currentPost = '';
    return state
      
    case SAVE_CURRENT_POST:
      state.currentPost = action.text;
      return state;
        
        
      default:
      return state;
}

}

export const addPostActionCreator = () => {
  return { type: ADD_POST }
}
export const saveCurrentPostActionCreator = (text) => { return { type: SAVE_CURRENT_POST, text: text } }