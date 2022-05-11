import css from './Users.module.css';
import User from './User/User.jsx'

const Users = (props) => {
  
  const usersElements = [];
  for (let id in props.users){
  if (id != 'currentUser'){
    usersElements.push (<User key={id} data={props.users[id]}/>)
  }
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
    
    {usersElements}
    </div>
    )
}

export default Users;
