// import { useState } from 'react';
// import LoginPopup from '../Popups/PopupLoginForm/PopupLoginForm';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { useContext, useState } from 'react';
import notifications from '../../assets/image/notifications.svg';
import profile from '../../assets/image/profile.svg';
import { Context } from '../../main';
import { observer } from 'mobx-react-lite';

// eslint-disable-next-line react-refresh/only-export-components
const Header = () => {
  // const [popupLoginFormActive, setPopupLoginFormActive] = useState(false);
  const { store } = useContext(Context);

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
        store.userData.role ? (
          <div className={styles['blockIcon']}>
            <img
              className={styles['notifications']}
              src={notifications}
              alt="notifications"
            />
             <Link to="/applicant">
              <img className={styles['profile']} src={profile} alt="profile" />
            </Link>
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

// eslint-disable-next-line react-refresh/only-export-components
export default observer(Header); 
