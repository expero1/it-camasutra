import css from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx'
import {ProfileInfo} from './ProfileInfo/ProfileInfo.jsx'
import {NewPostContainer} from './NewPost/NewPostContainer.js'
import {StoreContext} from './../../StoreContext.js'
const Profile = (props) => {
  
  return (
<div className={css.profile}>
    <img className={css.user_story}
      src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" 
    />
        <ProfileInfo/>
        <div className={css.posts}>
        <StoreContext.Consumer>{
          (store)=>{
            return (<NewPostContainer store = {store}/>)
          }
        }
          
        </StoreContext.Consumer>
        </div>
        <MyPosts posts={props.profileData.posts}/>
      </div>
    );
}

export default Profile;