import AppName from './AppName.jsx';
import bottomImage from '../../assets/image/bottomImage.png';
import styles from './HomePage.module.scss';
import ProfileApplicant from '../ProfileApplicant/ProfileApplicant.jsx';
import ProfileRecruiter from "../ProfileRecruiter/ProfileRecruiter.jsx";

// import ProfileApplicant from '../ProfileApplicant/ProfileApplicant.jsx';

const HomePage = ({isRole}) => {


  return (
    //   <div className={styles['container']}>
    //   <Header  />

    //     {/* <div style={{ alignSelf: 'center' }}> */}
    //       <AppName />
    //       <img alt={'bottomImage'} src={bottomImage} />
    //     {/* </div> */}

    // </div>
    <div className={styles['container']}>
      {!isRole ? (
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
      ) : isRole === 'applicant' ? (
        <ProfileApplicant />
      ) : (
        <div>
            <ProfileRecruiter/>
            {/*    Профиль рекрутера*/}</div>
      )}
    </div>
  );
};

export default HomePage;
