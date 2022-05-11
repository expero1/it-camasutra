import css from './Post.module.css';
const Post = (props) => {
  return (
    <div className={css.post}>
        <h4 className={css.post_header}>
          {props.header}
        </h4>
        <img 
          src={props.image}/>
          {props.body}
          <p>Likes: {props.likes}</p>
        <hr/>
        </div>
    );
}

export default Post;