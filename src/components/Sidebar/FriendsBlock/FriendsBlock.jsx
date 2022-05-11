import css from './FriendsBlock.module.css'
export const FriendsBlock = (props) => {
  
  return (
    <div className={css.friendBlockWrapper}>
    <div className={css.friendBlock}>
    <img src='https://dummyimage.com/25x25/efefef/000000.jpg' />
    July
    </div>
    <div className={css.friendBlock}>
    <img src='https://dummyimage.com/25x25/efefef/000000.jpg' />
    July
    </div>
    <div className={css.friendBlock}>
    <img src='https://dummyimage.com/25x25/efefef/000000.jpg' />
    July
    </div>
    <div className={css.friendBlock}>
    <img src='https://dummyimage.com/25x25/efefef/000000.jpg' />
    July
    </div>
    </div>
    )
}