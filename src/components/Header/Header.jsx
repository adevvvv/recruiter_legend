// import { useState } from 'react';
// import LoginPopup from '../Popups/PopupLoginForm/PopupLoginForm';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { useEffect, useRef, useState } from 'react';
import notifications from '../../assets/image/notifications.svg';
import profile from '../../assets/image/profile.svg';
import SettingApplicant from '../SettingApplicant/SettingApplicant.jsx';
import { observer } from 'mobx-react-lite';
import redHeart from '../../assets/image/redHeart.png';
import logo from '../../assets/image/logo.png';

const Header = ({ isRole, setIsRole }) => {
  // const [popupLoginFormActive, setPopupLoginFormActive] = useState(false);

  const [isSetting, setIsSetting] = useState(false);
  const blockRef = useRef(null);

  const handleClickOutside = (event) => {
    if (blockRef.current && !blockRef.current.contains(event.target)) {
      setIsSetting(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

    return (
        <div className={styles['header']}>

            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <div style={{marginRight: '90px'}}>
                    <img src={logo} alt="logo"/>
                </div>
                <div className={styles['blockNavigation']}>

                    <Link to="/">главная</Link>
                    {/* <a href="#">главная</a> */}
                    <a href="/vacancy">вакансии</a>
                    <a href="/news">новости</a>
                </div>
            </div>

      {
        isRole === 'applicant' ? (
          <div className={styles['blockIcon']}>
              <img
                  src={redHeart}
                  alt="redHeart"
              />
            <img
              className={styles['notifications']}
              src={notifications}
              alt="notifications"
            />
            <img
              onClick={() => setIsSetting(true)}
              className={styles['profile']}
              src={profile}
              alt="profile"
            />

            <div ref={blockRef} className={styles['menu']}>
              {isSetting ? <SettingApplicant setIsRole={setIsRole} /> : null}
            </div>
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
