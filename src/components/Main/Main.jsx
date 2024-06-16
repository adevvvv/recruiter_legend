// import AppName from './AppName.jsx';
import bottomImage from '../../assets/image/bottomImage.png';
import AppName from '../HomePage/AppName.jsx';
import styles from '../HomePage/HomePage.module.scss';
// import ProfileApplicant from '../ProfileApplicant/ProfileApplicant.jsx';
// import ProfileRecruiter from "../ProfileRecruiter/ProfileRecruiter.jsx";

// import ProfileApplicant from '../ProfileApplicant/ProfileApplicant.jsx';

const Main = () => {


  return (
    //   <div className={styles['container']}>
    //   <Header  />

    //     {/* <div style={{ alignSelf: 'center' }}> */}
    //       <AppName />
    //       <img alt={'bottomImage'} src={bottomImage} />
    //     {/* </div> */}

    // </div>
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
