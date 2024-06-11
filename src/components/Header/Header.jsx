// import { useState } from 'react';
// import LoginPopup from '../Popups/PopupLoginForm/PopupLoginForm';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { useState } from 'react';
import notifications from '../../assets/image/notifications.svg';
import profile from '../../assets/image/profile.svg';

const Header = ({ isRole }) => {
  // const [popupLoginFormActive, setPopupLoginFormActive] = useState(false);

  return (
    <div className={styles['header']}>
      <div>
        <div className={styles['blockNavigation']}>
          <div style={{ marginRight: '90px' }}>LOGO</div>
          <Link to="/">главная</Link>
          {/* <a href="#">главная</a> */}
          <a href="#">вакансии</a>
          <a href="#">новости</a>
        </div>
      </div>

      {
        isRole ? (
          <div className={styles['blockIcon']}>
            <img
              className={styles['notifications']}
              src={notifications}
              alt="notifications"
            />
            <img className={styles['profile']} src={profile} alt="profile" />
          </div>
        ) : (
          /* <a href="#" onClick={ () => setPopupLoginFormActive(true) }>вход</a> */
          <Link to="/auth/login">вход</Link>
        )
        /* <LoginPopup active={popupLoginFormActive} setActive={setPopupLoginFormActive} /> */
      }
    </div>
  );
};

export default Header;
