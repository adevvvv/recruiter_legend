import bottomImage from '../../assets/image/bottomImage.png';
import AppName from '../HomePage/AppName.jsx';
import styles from '../HomePage/HomePage.module.scss';

const Main = () => {
  return (
    <div className={styles['container']}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '80px',
        }}
      >
        <AppName />
        <img
          style={{ marginTop: '60px' }}
          alt={'bottomImage'}
          src={bottomImage}
        />
      </div>
    </div>
  );
};

export default Main;
