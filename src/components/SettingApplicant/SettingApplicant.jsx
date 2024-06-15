import { useContext } from 'react';
import styles from './SettingApplicant.module.scss';
import { Context } from '../../main';

const SettingApplicant = ({ setIsRole }) => {

  const { store } = useContext(Context);

  const menu = [
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

  const onNavigate = (navigate) => {
    if (navigate === 'exit') {
      setIsRole(false);
      store.logout();
    }
  };

  return (
    <div className={styles['container']}>
      {menu.map((el, i) => {
        return (
          <div key={i}>
            <button onClick={() => onNavigate(el.navigate)}>{el.title}</button>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default SettingApplicant;
