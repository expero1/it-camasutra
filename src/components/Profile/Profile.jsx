import css from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx'
import {ProfileInfo} from './ProfileInfo/ProfileInfo.jsx'
import {NewPostContainer} from './NewPost/NewPostContainer.js'
//import {StoreContext} from './../../StoreContext.js'
import {Provider} from 'react-redux'
import {store} from './../../redux/redux-store'
const Profile = (props) => {
  
  return (
<div className={css.profile}>
    <img className={css.user_story} alt=''
      src="https://dummyimage.com/1500x150/efefef/000000.jpg" 
    />
        <ProfileInfo/>
        <div className={css.posts}>
        <Provider store = {store}>
            <NewPostContainer store = {store}/>
        </Provider>
        </div>
        <MyPosts posts={props.profileData.posts}/>
      </div>
    );
}

export default Profile;