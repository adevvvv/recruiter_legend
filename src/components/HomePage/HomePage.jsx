// import AppName from './AppName.jsx';
// import bottomImage from '../../assets/image/bottomImage.png';
import styles from './HomePage.module.scss';
import ProfileApplicant from '../ProfileApplicant/ProfileApplicant.jsx';
import ProfileRecruiter from "../ProfileRecruiter/ProfileRecruiter.jsx";
import { useContext } from 'react';
import { Context } from '../../main.jsx';

// import ProfileApplicant from '../ProfileApplicant/ProfileApplicant.jsx';

const HomePage = (
  // {isRole}
) => {
  const { store } = useContext(Context);

  return (
    <div className={styles['container']}>
      { store.userData.role === 'ROLE_APPLICANT' ? (
        <ProfileApplicant />
      ) : (
        <div>
            <ProfileRecruiter/>
        </div>
      )}
    </div>
  );
};

export default HomePage;
