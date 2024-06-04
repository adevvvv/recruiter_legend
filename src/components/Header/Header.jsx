// import { useState } from 'react';
// import LoginPopup from '../Popups/PopupLoginForm/PopupLoginForm';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';


const Header = () => {
    // const [popupLoginFormActive, setPopupLoginFormActive] = useState(false);

    return (
        <div className={styles['header']}>

            <div className={styles['blockNavigation']}>
                <div style={{marginRight:'90px'}}>LOGO</div>
                <Link to="/">главная</Link>
                {/* <a href="#">главная</a> */}
                <a href="#">вакансии</a>
                <a href="#"  >новости</a>
            </div>

            {/* <a href="#" onClick={ () => setPopupLoginFormActive(true) }>вход</a> */}
            <Link to="/auth/login">вход</Link>
            {/* <LoginPopup active={popupLoginFormActive} setActive={setPopupLoginFormActive} /> */}
        </div>
    )
}

export default Header;
