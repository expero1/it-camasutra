
const SUBSCRIBE = "SUBSCRIBE"
const UNSUBSCRIBE = "UNSUBSCRIBE"
const GET_USERS = "GET-USERS"
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const userData= {
      currentPage:1,
      
      currentUser:{
        id: 1,
        username: 'eugene',
        fullName:"Eugene Emets",
        avatar: 'https://dummyimage.com/50x50/efefef/000000.jpg',
      
      },
      users:[],
      users2:[
        {
          id: 2,
          username: 'alex',
          country:"Ukraine",
          fullName:"Max Lev",
          city:'Dnipro',
          avatar: 'https://dummyimage.com/50x50/efefef/000000.jpg',
        },
        {
          id: 3,
          username: 'lena',
          fullName:"Elena Petrova",
          country:"Ukraine",
          city:'Kiev',
          avatar: 'https://dummyimage.com/50x50/efefef/000000.jpg'
        },
        {
          id: 4,
          username: 'vasya',
          fullName:"Vasiliy Ivanov",
          country:"Poland",
          city:'Krakov',
          avatar: 'https://dummyimage.com/50x50/efefef/000000.jpg',
              }
      ]
      
    }
  export const userReducer = (state=userData, action)=>{
    let newState;
    switch (action.type){

    
      case SUBSCRIBE:
        return state;

      case UNSUBSCRIBE:
        return state;
      
      case GET_USERS:
        newState = {...state}
        newState.users = action.items
        newState.totalPages = action.totalPages
        newState.currentPage = action.currentPage
        return newState;
      
      case SET_CURRENT_PAGE:
        newState = {...state}
        newState.currentPage = action.page
        return newState
      default:
        return state


        
    
  }
}

  export const subsribeUserAC = (userId)=>{return {type:SUBSCRIBE,userId:userId}}
  export const unsubsribeUserAC = (userId)=>{return {type:UNSUBSCRIBE,userId:userId}}
  export const getUsersAC = (items, totalPages, currentPage) => {return{type:GET_USERS, items:items, totalPages:totalPages, currentPage:currentPage}}
  export const setCurrentPageAC = (page) =>{return {type:SET_CURRENT_PAGE,page:page}}