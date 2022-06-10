import {Link} from 'react-router-dom'
import css from './User.module.css'
import { saveCurrentDialogUserIdActionCreator } from '../../../../redux/dialogs-reducer'; 
import { useParams } from 'react-router-dom';

const User = (props)=> {
  let dispatch = props.store.dispatch;
  let params = useParams()
  const saveUserId = () => {
    let userId = props.data.id;
    
    dispatch (saveCurrentDialogUserIdActionCreator({userId:params.userId}))
}


return (
  <div className={css.dialogsUser}>
  
  <Link to={'/dialogs/'+props.data.id}>
  <img src={props.data.avatar} alt=''/>{props.data.username}
  </Link>
  </div>
  );
  
}

export default User;