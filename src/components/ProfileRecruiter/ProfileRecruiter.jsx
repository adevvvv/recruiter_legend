import CalendarRecruiter from '../Calendar/CalendarRecruiter.jsx';
import Header from '../Header/Header.jsx';
import styles from './ProfileRecruiter.module.scss';
import RecruiterInfo from './RecruiterInfo.jsx';
import profile2 from '../../assets/image/profile2.svg';
import profile3 from '../../assets/image/profile3.svg';
import ResponseCard from './ResponseCard.jsx';
import profile1 from '../../assets/image/profile1.svg';
// import { useState } from 'react';

// import ProfileApplicant from '../ProfileApplicant/ProfileApplicant.jsx';

const ProfileRecruiter = () => {
  // false - не авторизован, applicant, recruiter
  // const [isRole, setIsRole] = useState('applicant');
  const data = [
    {
      firstName: 'Наталья',
      desiredPosition: 'UX/UI дизайнер',
      birthDate: '25-02-2000',
      city: 'Москва',
      phoneNumber: '+79999998899',
      email: 'аdsfd@mail.ru',
      img: profile1,
    },
    {
      firstName: 'Андрей',
      desiredPosition: 'frontend',
      birthDate: '25-05-2000',
      city: 'Казань',
      phoneNumber: '+79977998899',
      email: 'аdvsfd@mail.ru',
      img: profile2,
    },
    {
      firstName: 'Ольга',
      desiredPosition: 'DevOps',
      birthDate: '05-02-1983',
      city: 'Санкт-Петербург',
      phoneNumber: '+79999998899',
      email: 'аdssss@mail.ru',
      img: profile3,
    },
    {
      firstName: 'Игорь',
      desiredPosition: 'Project manager',
      birthDate: '27-02-2001',
      city: 'Москва',
      phoneNumber: '+79669998899',
      email: 'аdsfd@mail.ru',
      img: profile1,
    },
    {
      firstName: 'Артем',
      desiredPosition: 'Backend',
      birthDate: '25-09-2000',
      city: 'Москва',
      phoneNumber: '+79999668899',
      email: 'kkdsfd@mail.ru',
      img: profile2,
    },
    {
      firstName: 'Дмитрий',
      desiredPosition: 'Fullstack',
      birthDate: '25-05-2000',
      city: 'Москва',
      phoneNumber: '+79999900899',
      email: 'nnnfd@mail.ru',
      img: profile3,
    },
  ];


  return (
    <div className={styles['container']}>

      <div style={{ alignSelf: 'center', width: '1148px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <RecruiterInfo />
          <div style={{ width: '57%' }}>
            <CalendarRecruiter />
          </div>
        </div>
      </div>

      <div className={styles['cards']}>
        {data.map((user, index) => (
       <ResponseCard key={index} user={user} />
    ))}
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
