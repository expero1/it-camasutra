

const userData= {
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
    }
  export const userReducer = (state=userData, action)=>{
    return state;
  }