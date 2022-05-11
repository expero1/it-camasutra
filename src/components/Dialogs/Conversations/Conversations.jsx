import {Message} from './Message/Message.jsx'
import { useParams } from 'react-router-dom'
import { NewMessage } from './NewMessage/NewMessage.jsx';
import css from './Conversations.module.css'
const Conversations = (props) => {
  const params = useParams();
  let messageData = []
  const userId = props.userId;
  for (let messageId in props.dialogs.dialog) {
      let id = props.dialogs.dialog[messageId]['id']
      let text = props.dialogs.dialog[messageId]['m']
      let key = text
      if ('key' in props.dialogs.dialog[messageId]){
        key = props.dialogs.dialog[messageId].key
      }else{
        key =Math.random().toString(36).substr(2, 5)
        props.dialogs.dialog[messageId].key = key
        
      }
      let position = 'left';
      if (props.currentUser != id){
        position='right'
      }
      messageData.push(<Message key={key} text={text} position={position} />);
    
    //phrasesData.push(<Phrase text={props.dialogs} />)
  }
  return (
    <div>
    <div className={css.messages}>
      {messageData}
    </div>
    <div>
      <NewMessage dispatch={props.dispatch} message= {props.dialogs.currentMessage}  userId={userId} />
    </div>
    </div>
  )
}
export default Conversations