import css from './NewMessage.module.css';
import { useParams } from 'react-router-dom';
export const NewMessage = (props) => {
  const params = useParams();
  const userId = params.userId;
  
  const saveMessage = (message)=>{
    
    let value = props.newMessageBlock.current.value;
    props.saveMessage(value, userId)
    
  }
  return (
    <div className = {css.NewMessage}>
    <textarea ref={props.newMessageBlock} onChange={saveMessage} value={props.message} data={userId}></textarea>
    <br/>
    <button onClick={props.sendMessage}>Send</button>
    </div>
    )
}