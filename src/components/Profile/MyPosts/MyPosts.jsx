import css from './MyPosts.module.css'
import Post from './Post/Post.jsx'

const MyPosts = (props) => {
  //const posts = postData.map (id=>{return(1)})
 const postsElements = props.posts.map ((id)=>{
   return <Post key={id.header} header={id.header}
   body={id.body}
   image={id.image} likes={id.likes}/>
  });
  return (
    <div>
    {postsElements}
    </div>
    );
}

export default MyPosts;