import { useState } from 'react';
import './PopupLoginForm.scss';

// eslint-disable-next-line react/prop-types
const LoginPopup = ({ active, setActive }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login
  };

  const handleRegister = () => {
    // Handle registration
  };

  return (
    <div
      className={active ? 'popup active' : 'popup'}
      onClick={() => setActive(false)}
    >
      <div className="popup__container" onClick={(e) => e.stopPropagation()}>
        <div className="login-popup">
          <input
            type="text"
            placeholder="Телефон или email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Вход</button>
          <button onClick={handleRegister}>Регистрация</button>
          <a href="#">Забыли пароль?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
