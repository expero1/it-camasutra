import css from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx'
import {ProfileInfo} from './ProfileInfo/ProfileInfo.jsx'
import {NewPostContainer} from './NewPost/NewPostContainer.js'

const Profile = (props) => {
  
  return (
<div className={css.profile}>
    <img className={css.user_story}
      src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" 
    />
        <ProfileInfo/>
        <div className={css.posts}>
          <NewPostContainer currentValue={props.profileData.currentPost} dispatch={props.dispatch}/>
        </div>
        <MyPosts posts={props.profileData.posts}/>
      </div>
    );
}

export default Profile;