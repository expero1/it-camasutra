import css from './ProfileInfo.module.css'
export const ProfileInfo = ()=>{
  return (
    <div>
    <div className={css.user_profile}>
      <div className={css.user_image}>
      <img 
        src="https://dummyimage.com/150x150/efefef/000000.jpg" alt='' 
      />
      </div>
      <div className={css.user_info}>
        <div className={css.user_name}>
        Eugene Emets
        </div>
        <div className={css.user_resume}>
          <p>Date of Birth:01.01.2002</p>
          <p>City: Dnipro</p>
        </div>
        </div>
        </div>{/*user-info*/}
    </div>
    )
}