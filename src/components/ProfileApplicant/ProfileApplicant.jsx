import styles from './ProfileApplicant.module.scss';
import human from '../../assets/image/human.svg';
import BaseInfo from './BaseInfo.jsx';
import { useState } from 'react';
import Resume from './Resume.jsx';

const ProfileApplicant = () => {
  const [isBaseInfo, setIsFormInfo] = useState(true);

  return (
    <div>
      {isBaseInfo ? <BaseInfo setIsFormInfo={setIsFormInfo} /> : <Resume />}

      <div className={styles['containerImg']}>
        <img src={human} alt="human" />
      </div>
    </div>
  );
};

export default ProfileApplicant;
