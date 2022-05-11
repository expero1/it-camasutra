import {profileReducer} from './profile-reducer.js'
import {dialogsReducer} from './dialogs-reducer.js'
//const ADD_POST = 'ADD-POST'
//const SAVE_CURRENT_POST = 'SAVE-CURRENT-POST'
//const SAVE_MESSAGE = 'SAVE-MESSAGE'
//const SEND_MESSAGE = 'SEND-MESSAGE'

export const store = {
  _state: {
    dialogsData: {
      dialogs: {
        '2': {dialog:[{ id:1, m:'hey' }, {id: 2, m:'yo' }, {id: 1, m:'howa' }, { id:2, m:'chee' }],currentMessage:''},
        '3': {dialog:[{ id:1, m:'hoho' }, { id:1, m:'huyo' }, { id:3, m:'moko' }], currentMessage:''},
        '4': {dialog:[{id: 4,m: 'jimja' }, { id:1,m: 'muru' }, { id:4,m: 'arte' }], currentMessage:''},
      },
      currentUserId:1,
    },
    users: {
      currentUser:{
        id: 1,
        username: 'eugene',
        avatar: 'https://dummyimage.com/50x50/efefef/000000.jpg',
      
      },
      2: {
        id: 2,
        username: 'alex',
        avatar: 'https://dummyimage.com/50x50/efefef/000000.jpg',
      },
      3: {
        id: 3,
        username: 'lena',
        avatar: 'https://dummyimage.com/50x50/efefef/000000.jpg'
      },
      4: {
        id: 4,
        username: 'vasya',
        avatar: 'https://dummyimage.com/50x50/efefef/000000.jpg',
      }
    },
    profileData: {
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
    
  },
  getState() {
    return this._state;
  },

  RenderApp() { console.log('a') },
  subscribe(func) {
    this.RenderApp = func;
  },
  dispatch(action) {
    this._state.profileData = profileReducer(action,this._state.profileData)
    this._state.dialogsData = dialogsReducer (action,this._state.dialogsData)
    this.RenderApp(this._state)
  }
}
window.store = store;