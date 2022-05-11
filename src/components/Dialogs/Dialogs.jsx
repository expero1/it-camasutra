import css from './Dialogs.module.css'
import Users from './Users/Users.jsx'
import Conversations from './Conversations/Conversations.jsx';
import {Routes, Route, useParams} from 'react-router-dom';
import {NewMesage} from './Conversations/NewMessage/NewMessage.jsx'
const Dialogs = (props) => {
  const params = useParams();
  let conversations = undefined;
  let currentUserId = props.dialogsUsers.currentUser.id;
  if ('userId' in params && params['userId'] in props.dialogs){
    conversations = <Conversations dialogs={props.dialogs[params['userId']]} dispatch={props.dispatch}/>
  }
  
  return (
    <div className = {css.dialogs}>
    <div className = {css.users}>
    <Users users={props.dialogsUsers}/>
    </div>
    <div className={css.conversations}>
    {conversations}
    </div>
    <div></div>
    <div>
    
    </div>
    </div>
    );
}
const ErrMsg = ()=>{
  const params = useParams();
  return (
    <div>
    Undefined route
    </div>
    )
}
export default Dialogs;