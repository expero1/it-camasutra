import css from './NewMessage.module.css';

export const NewMessage = (props) => {
  return (
    <div className = {css.NewMessage}>
    <textarea ref={props.newMessageBlock} onChange={props.saveMessage} value={props.message}></textarea>
    <br/>
    <button onClick={props.sendMessage}>Send</button>
    </div>
    )
}