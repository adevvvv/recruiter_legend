// import { useState } from "react";
import Header from "../../Header/Header";
import bottomImage from '../../../assets/image/bottomImage.png';
import styles from './EnterForm.module.scss';
import { useForm } from 'react-hook-form';

const EnterForm = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange' });

    const handleLogin = () => {
      // Handle login
    };
  
    const handleRegister = () => {
      // Handle registration
    };

    const onSubmit =  (data) => {
        const { email, password } = data;
        if (!email) {
            return;
          }
      
          if (!password) {
            return;
          }
      
          console.log('userData', { email, password });
    }    

    return (
        // <div className={styles['overlay']}>
            <div className={styles['container']}>
                <Header />
                <div className={styles['login__container']}>
                    <form className="enter-form" onSubmit={handleSubmit(onSubmit)}>
                        <input
                         {...register('email', {
                            required: 'Это поле не может быть пустым',
                            pattern: {
                            //   value: /^[a-zA-Z0-9!#$%&'*+/=?^_`{}-]+@[a-zA-Z]+(?:\.[a-zA-Z]+)+$/,
                            // value: /[a-zA-Z]/,
                            value: /^((\+?[0-9]{1,3})?([0-9]{10,15}))|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                            message: 'Некорректный адрес электронной почты',
                            },
                          })}
          
                        type="text" 
                        className={`${styles['form-input']} ${errors.email ? styles['input-error'] : ''}`}
                        placeholder="Телефон или email" 
                        // value={email} 
                        // onChange={(e) => setEmail(e.target.value)} 
                        />

                        {errors.email && <p className={styles['enter-error']}>{errors.email.message}</p>}

                        <input
                        {...register('password', {
                            required: 'Это поле не может быть пустым',
                            pattern: {
                              value:/^(?=.*[a-zA-Z])(?=.*\d).{8,30}$/,
                              // value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]).{8,}$/, // регулярка со спец символами /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&'()*+,-./:;<=>?@[\]^_{|}~`]).{8,}$/
                              message: 'Пароль должен содержать хотя бы одну букву и цифру, и состоять от 8 до 30 символов',
                            },
                          })}
          
                          className={`${styles['form-input']} ${errors.email ? styles['input-error'] : ''}`}
                          type="password"
                          placeholder="Пароль" 
                        //   value={password} 
                        //   onChange={(e) => setPassword(e.target.value)} 
                          />
                          
                        {errors.password && <p className={styles['enter-error']}>{errors.password.message}</p>}

                        <button onClick={handleLogin}>Вход</button>
                        <button onClick={handleRegister}>Регистрация</button>
                        <a href="#">Забыли пароль?</a>
                    </form>    
                </div>
                <img alt={'bottomImage'} src={bottomImage}/>
                
            </div>
        // </div>
    )
}

export default EnterForm;