import {Link} from 'react-router-dom'
import css from './User.module.css'
const User = (props)=> {
return (
  <div className={css.dialogsUser}>
  
  <Link to={'/dialogs/'+props.data.id}>
  <img src={props.data.avatar} />{props.data.username}
  </Link>
  </div>
  );
  
}

export default User;