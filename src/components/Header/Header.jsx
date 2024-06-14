// import { useState } from 'react';
// import LoginPopup from '../Popups/PopupLoginForm/PopupLoginForm';
import {Link} from 'react-router-dom';
import styles from './Header.module.scss';
import {useEffect, useRef, useState} from "react";
import notifications from '../../assets/image/notifications.svg';
import profile from '../../assets/image/profile.svg';
import SettingApplicant from "../SettingApplicant/SettingApplicant.jsx";


const Header = ({isRole, setIsRole}) => {
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

            <div>
                <div className={styles['blockNavigation']}>
                    <div style={{marginRight: '90px'}}>LOGO</div>
                    <Link to="/">главная</Link>
                    {/* <a href="#">главная</a> */}
                    <a href="#">вакансии</a>
                    <a href="#">новости</a>
                </div>
            </div>

            {
                isRole === 'applicant' ?
                    <div className={styles['blockIcon']} >
                        <img className={styles['notifications']} src={notifications} alt="notifications"/>
                        <img onClick={()=>setIsSetting(true)} className={styles['profile']} src={profile} alt="profile"/>

                        <div ref={blockRef} className={styles['menu']}>
                            {
                                isSetting ?
                                    <SettingApplicant setIsRole={setIsRole}/>
                                    :
                                    null
                            }
                        </div>


                    </div>

                    :
                    /* <a href="#" onClick={ () => setPopupLoginFormActive(true) }>вход</a> */
                    <Link to="/auth/login">вход</Link>
                /* <LoginPopup active={popupLoginFormActive} setActive={setPopupLoginFormActive} /> */
            }


        </div>
    )
}

export default Header;
