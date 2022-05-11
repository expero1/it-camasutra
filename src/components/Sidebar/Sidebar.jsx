import css from './Sidebar.module.css';
import {Link} from 'react-router-dom';
import {FriendsBlock} from './FriendsBlock/FriendsBlock.jsx'
const Sidebar = (props) => {
 
  return (
    <div className={css.sidebar}>
    <div className={css.nav_item}>
      <Link to='/profile'>Profile</Link>
    </div>
    <div className={css.nav_item}>
      <Link to='/dialogs'>Dialogs</Link>
    </div>
    <div className={css.nav_item}>
      <Link to='/news'>News</Link>
    </div>
      
    <FriendsBlock friends={props.friends} />
    </div>
    );
}

export default Sidebar;