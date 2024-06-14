
import styles from './ProfileRecruiter.module.scss';
import avatar from '../../assets/image/profile3.svg';
import chat from '../../assets/image/chat-icon.svg';

const RecruiterInfo = () => {
  return (
    <div className={styles['card']}>
      <img src={avatar} alt="User Avatar" className="user-avatar" />
      <div className={styles['card-info']}>
        <div className={styles['card-info__text']}>
            <p className="username">username</p>
        </div>
        <div className={styles['card-info__text']}>
            <p className="position">HR</p>
        </div>
  
        <div className="social-media">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={chat} alt="Instagram Icon" className="instagram-icon" />
        </a>
      </div>
      </div>
   
    </div>
  );
};

export default RecruiterInfo;