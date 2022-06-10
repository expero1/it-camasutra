import css from './Users.module.css';
import User from './User/User.jsx'
import {Provider} from 'react-redux'
import {store} from './../../../redux/redux-store'
const Users = (props) => {
  
  const usersElements = [];
  for (let user in props.users.users2){
  
  usersElements.push (<User key={props.users.users2[user].id} data={props.users.users2[user]} store = {store} />)
  
  }
  //props.users.map ((u)=>{
  //  return (
 //     <User username={u.username}
 //     avatar={u.avatar}/>
  //    )
//  }   
//)
  return (
    <div className={css.users}>
    <Provider store={store}>
      {usersElements}
    </Provider>
    
    </div>
    )
}

export default Users;
