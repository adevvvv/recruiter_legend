import { useState, useContext } from 'react';
import Header from '../../Header/Header';
import bottomImage from '../../../assets/image/bottomImage.png';
import styles from './EnterForm.module.scss';
import { useForm } from 'react-hook-form';
import { Context } from '../../../main';
import { observer } from 'mobx-react-lite';
import { Link, useNavigate } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
const EnterForm = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const { store } = useContext(Context);
  const navigate = useNavigate();

  const [answer, setAnswer] = useState(null); // Добавлено состояние для хранения ответа на запрос
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  // const handleLogin = () => {
  //   // Handle login
  // };

  const handleRegister = () => {
    navigate('/register');
  };

  const onSubmit = async (data) => {
    // const { email, password } = data;
    const { username, password } = data;
    if (!username) {
      return;
    }

    if (!password) {
      return;
    }

    console.log('userData', { username, password });
    const answer = await store.login(username, password);
    setAnswer(answer);

    if (answer === 'anketa is exist') {
      navigate('/anketa');
      return;
    }

    if (answer === 'anketa is not exist') {
      navigate('/');
      return;
    }


  };

  return (
    // <div className={styles['overlay']}>
    <div className={styles['container']}>
      <Header />
      <div className={styles['login__container']}>
        <form className="enter-form" onSubmit={handleSubmit(onSubmit)}>

        <input
            {...register('username', {
              required: true,
              minLength: 2,
              maxLength: 30,
              pattern: /^[a-zA-Zа-яА-Я-]+(?:-[a-zA-Zа-яА-Я-]+)?$/,
            })}
            className={`${styles['form-input']} ${errors.username ? styles['input-error'] : ''}`}
            type="text"
            id="name"
            placeholder="Введите ваше имя"
          />
          {errors.username?.type === 'minLength' && (
            <span className={styles['enter-error']}>
              Имя должно содержать не менее 8 символов{' '}
            </span>
          )}
          {errors.username?.type === 'maxLength' && (
            <span className={styles['enter-error']}>
              Имя должно содержать не более 30 символов{' '}
            </span>
          )}
          {errors.username?.type === 'pattern' && (
            <span className={styles['enter-error']}>
              Имя должно состоять из букв. Дефис допускается{' '}
            </span>
          )}
          {errors.username?.type === 'required' && (
            <span className={styles['enter-error']}>Это поле обязательно</span>
          )}

          {/* <input
            {...register('email', {
              required: 'Это поле не может быть пустым',
              pattern: {
                //   value: /^[a-zA-Z0-9!#$%&'*+/=?^_`{}-]+@[a-zA-Z]+(?:\.[a-zA-Z]+)+$/,
                // value: /[a-zA-Z]/,
                value:
                  /^((\+?[0-9]{1,3})?([0-9]{10,15}))|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                message: 'Некорректный адрес электронной почты',
              },
            })}
            type="text"
            className={`${styles['form-input']} ${errors.email ? styles['input-error'] : ''}`}
            placeholder="Телефон или email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />

          {errors.email && (
            <p className={styles['enter-error']}>{errors.email.message}</p>
          )} */}

          <input
            {...register('password', {
              required: 'Это поле не может быть пустым',
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*\d).{8,30}$/,
                // value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]).{8,}$/, // регулярка со спец символами /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&'()*+,-./:;<=>?@[\]^_{|}~`]).{8,}$/
                message:
                  'Пароль должен содержать хотя бы одну букву и цифру, и состоять от 8 до 30 символов',
              },
            })}
            className={`${styles['form-input']} ${errors.email ? styles['input-error'] : ''}`}
            type="password"
            placeholder="Пароль"
            //   value={password}
            //   onChange={(e) => setPassword(e.target.value)}
          />

          {errors.password && (
            <p className={styles['enter-error']}>{errors.password.message}</p>
          )}

          <button  type="submit">Вход</button>
          <button onClick={handleRegister}>Регистрация</button>
          <a href="#">Забыли пароль?</a>
        </form>
      </div>
      <img alt={'bottomImage'} src={bottomImage} />
    </div>
    // </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default observer(EnterForm);
