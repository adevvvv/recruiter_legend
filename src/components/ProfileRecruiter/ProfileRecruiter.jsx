

import CalendarRecruiter from '../Calendar/CalendarRecruiter.jsx';
import Header from '../Header/Header.jsx';
import styles from './ProfileRecruiter.module.scss';
import RecruiterInfo from './RecruiterInfo.jsx';
// import { useState } from 'react';

// import ProfileApplicant from '../ProfileApplicant/ProfileApplicant.jsx';

const ProfileRecruiter = () => {
  // false - не авторизован, applicant, recruiter
  // const [isRole, setIsRole] = useState('applicant');

  return (
    <div className={styles['container']}>
      <Header  />
       
        <div style={{ alignSelf: 'center', width: '1148px' }}>
           <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <RecruiterInfo />
                    <div style={{ width: '57%' }}>
                        <CalendarRecruiter  />
                    </div>
                
            </div> 
        </div>

        <div className={styles['cards']}>
gfdgfdg
        </div>
       
    </div>
  );
  
  // return (
  //   <div className={styles['container']}>
  //     <Header isRole={isRole} />
  //     {!isRole ? (
  //       <div style={{ alignSelf: 'center' }}>
  //         <AppName />
  //         <img alt={'bottomImage'} src={bottomImage} />
  //       </div>
  //     ) : isRole === 'applicant' ? (
  //       <ProfileApplicant />
  //     ) : (
  //       <div>{/*    Профиль рекрутера*/}</div>
  //     )}
  //   </div>
  // );
};

export default ProfileRecruiter;


