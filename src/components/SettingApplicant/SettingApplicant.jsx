import { useContext } from 'react';
import styles from './SettingApplicant.module.scss';
import { Context } from '../../main';
import { useNavigate } from 'react-router-dom';

const SettingApplicant = () =>
  // { setIsRole }
  {
    const { store } = useContext(Context);
    const navigate = useNavigate();

    const menu = [
      {
        title: 'Личный кабинет',
        navigate: 'profile',
      },
      {
        title: 'Чаты и отклики',
        navigate: '',
      },
      {
        title: 'Настройки',
        navigate: '',
      },
      {
        title: 'Помощь',
        navigate: '',
      },
      {
        title: 'Выход',
        navigate: 'exit',
      },
    ];

    const onNavigate = (nav) => {
      if (nav === 'exit') {
        store.logout();
        navigate('/');
      }
      if (nav === 'profile') {
        navigate('/profile');
      }
    };

    return (
      <div className={styles['container']}>
        {menu.map((el, i) => {
          return (
            <div key={i}>
              <button onClick={() => onNavigate(el.navigate)}>
                {el.title}
              </button>
              <br />
            </div>
          );
        })}
      </div>
    );
  };

export default SettingApplicant;
