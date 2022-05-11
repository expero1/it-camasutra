const ADD_POST = 'ADD-POST'
const SAVE_CURRENT_POST = 'SAVE-CURRENT-POST'

 const profileData= {
      userId: 1,
      username: 'eugene',
      avatar: 'https://dummyimage.com/50x50/efefef/000000.jpg',
      currentPost: '',
      posts: [
        {
          header: 'There are many variations',
          body: 'Aliquam efficitur mauris nec fermentum dignissim. Nullam placerat convallis erat, id euismod dolor dapibus nec. Ut lobortis porta cursus. Nullam.',
          image: 'https://dummyimage.com/50x50/efefef/000000.jpg',
          likes: 10,
        },
        {
          header: 'Lorem Ipsum which looks reasonable',
          body: 'Donec pellentesque dui a erat dictum lacinia. Etiam ante ipsum, cursus in diam sit amet, finibus viverra urna. In scelerisque',
          image: 'https://dummyimage.com/50x50/efefef/000000.jpg',
          likes: 5,
        },
        {
          header: 'All the Lorem Ipsum generators',
          body: 'Aliquam dictum auctor nisi, sit amet malesuada enim tristique sed. Donec eget ipsum orci. Duis diam tellus, auctor quis est',
          image: 'https://dummyimage.com/50x50/efefef/000000.jpg',
          likes: 1,
        }
      ]
    }
export const profileReducer = (state=profileData, action)=>{
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