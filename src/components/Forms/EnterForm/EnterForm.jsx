import { useState } from "react";
import Header from "../../Header/Header";
import bottomImage from '../../../assets/image/bottomImage.png';
import styles from './EnterForm.module.scss';

const EnterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Handle login
    };
  
    const handleRegister = () => {
      // Handle registration
    };
    return (
        // <div className={styles['overlay']}>
            <div className={styles['container']}>
                <Header />
                <div className={styles['login__container']}>
                    <input type="text" placeholder="Телефон или email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleLogin}>Вход</button>
                    <button onClick={handleRegister}>Регистрация</button>
                    <a href="#">Забыли пароль?</a>
                </div>
                <img alt={'bottomImage'} src={bottomImage}/>
            </div>
        // </div>
    )
}

export default EnterForm;