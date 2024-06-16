import { useContext } from 'react';
import Header from '../../Header/Header';
import bottomImage from '../../../assets/image/bottomImage.png';
import styles from './RegistrationForm.module.scss';
import { useForm } from 'react-hook-form';
import { Context } from '../../../main';
import { Link, useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const { store } = useContext(Context);
  const navigate = useNavigate();
  //   const [answer, setAnswer] = useState(null); // Добавлено состояние для хранения ответа на запрос
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const password = watch('password');

  const onSubmit = async (data) => {
    if (data.password !== data.password_repeat) {
      return;
    }
    console.log(data);
    reset();
    const isRegOk = await store.registration({
      username: data.username,
      email: data.email,
      password: data.password,
    });
    if (isRegOk) {
      store.errorRegistration = '';
      navigate('/applicantinfo');
    }
  };

  return (
    // <div className={styles['overlay']}>
    <div className={styles['container']}>
      <div className={styles['register-container']}>
        <form className="reg-form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className={styles['register-container__title']}>
            Регистрация нового пользователя
          </h2>

          <input
            {...register('username', {
              required: true,
              minLength: 2,
              maxLength: 30,
              // pattern: /^[a-zA-Zа-яА-Я-]+(?:-[a-zA-Zа-яА-Я-]+)?$/,
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
          {/* {errors.username?.type === 'pattern' && (
            <span className={styles['enter-error']}>
              Имя должно состоять из букв. Дефис допускается{' '}
            </span>
          )} */}
          {errors.username?.type === 'required' && (
            <span className={styles['enter-error']}>Это поле обязательно</span>
          )}

          <input
            {...register('email', {
              required: true,
              minLength: 6,
              maxLength: 60,
              pattern: {
                // value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                value:
                  /^[a-zA-Z0-9!#$%&'*+/=?^_`{}-]+@[a-zA-Z]+(?:\.[a-zA-Z]+)+$/,
                message: 'invalid email address',
              },
            })}
            className={`${styles['form-input']} ${errors.email ? styles['input-error'] : ''}`}
            type="email"
            placeholder="email"
          />

          {errors.email?.type === 'required' && (
            <span className={styles['enter-error']}>Это поле обязательно</span>
          )}
          {errors.email?.type === 'pattern' && (
            <span className={styles['enter-error']}>
              Введите правильный адрес
            </span>
          )}
          {errors.email?.type === 'minLength' && (
            <span className={styles['enter-error']}>
              Адрес должен содержать не менее 6 символов
            </span>
          )}
          {errors.email?.type === 'maxLength' && (
            <span className={styles['enter-error']}>
              Адрес должен содержать не более 60 символов
            </span>
          )}

          <input
            {...register('password', {
              required: true,
              minLength: 8,
              maxLength: 30,
              // pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,30}$/,
              pattern:
                /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&'()*+,-./:;<=>?@[\]^_{|}~`]).{8,}$/,
              // pattern:/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!\"#$%&'()*+,\-./:;<=>?@[\\]^_`{|}~])[a-zA-Z\d!\"#$%&'()*+,\-./:;<=>?@[\\]^_`{|}~]{8,}$/,
            })}
            className={`${styles['form-input']} ${errors.email ? styles['input-error'] : ''}`}
            type="password"
            placeholder="Придумайте пароль"
            autoComplete="current-password"
            // onChange={handlePasswordChange}
          />
          {errors.password?.type === 'required' && (
            <span className={styles['enter-error']}>
              Необходимо ввести пароль
            </span>
          )}
          {errors.password?.type === 'pattern' && (
            <span className={styles['enter-error']}>
              Пароль должен содержать хотя бы одну букву, символ и цифру
            </span>
          )}
          {errors.password?.type === 'minLength' && (
            <span className={styles['enter-error']}>
              Пароль должен содержать не менее 8 символов
            </span>
          )}
          {errors.password?.type === 'maxLength' && (
            <span className={styles['enter-error']}>
              Пароль должен содержать не более 30 символов
            </span>
          )}

          <input
            {...register('password_repeat', {
              required: true,
              //  pattern:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[^\w\s]).{6,}$/,
              validate: (value) => value === password || 'Пароли не совпадают',
            })}
            className={`${styles['form-input']} ${errors.email ? styles['input-error'] : ''}`}
            type="password"
            placeholder="Повторите пароль"
          />

          {errors.password_repeat?.type === 'required' && (
            <span className={styles['enter-error']}>
              Необходимо ввести пароль
            </span>
          )}
          {errors.password_repeat?.type === 'validate' && (
            <span className={styles['enter-error']}>Пароли не совпадают</span>
          )}

          <label
            className={styles['register-container__label']}
            htmlFor="privacy"
          >
            <input
              className={styles['register-container__checkbox']}
              type="checkbox"
              name="privacy"
              required
            />
            <p className={styles['register-container__label-text']}>
              Нажимая на эту кнопку вы соглашаетесь с
              <Link to="/policy" className="reg-form__form-text-link">
                {' '}
                политикой конфиденциальности
              </Link>
            </p>
          </label>

          <button>Регистрация</button>
        </form>
      </div>
      <img alt={'bottomImage'} src={bottomImage} />
    </div>
    // </div>
  );
};

export default RegistrationForm;
