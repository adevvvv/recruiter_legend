import styles from './ProfileApplicant.module.scss';
import profile from '../../assets/image/profile.svg';
import chep from '../../assets/image/chep.png';
import vk from '../../assets/image/vk.png';
import whatsapp from '../../assets/image/whatsapp.png';
import telegram from '../../assets/image/telegram.png';

import { ButtonWithChain } from '../Common/buttons';

const ResponseCard = () => {
//   const [data, setFormData] = useState({
//     name: 'Имя пользователя',
//     bird: 'Дата рождения',
//     city: 'Город',
//     phone: '+79999999999',
//     email: 'email',
//   });

const data = [
    { firstName: 'Наталья', desiredPosition: 'UX/UI дизайнер',  birthDate: '25-02-2000', city: 'Москва', phoneNumber: '+79999998899', email: 'аdsfd@mail.ru', img: '../assets/image/profile.svg' },
    { firstName: 'Андрей', desiredPosition: 'frontend',  birthDate: '25-05-2000', city: 'Казань', phoneNumber: '+79977998899', email: 'аdvsfd@mail.ru', img: '../assets/image/profile2.svg' },
    { firstName: 'Ольга', desiredPosition: 'DevOps',  birthDate: '05-02-1983', city: 'Санкт-Петербург', phoneNumber: '+79999998899', email: 'аdssss@mail.ru', img: '../assets/image/profile3.svg' },
    { firstName: 'Игорь', desiredPosition: 'Project manager',  birthDate: '27-02-2001', city: 'Москва', phoneNumber: '+79669998899', email: 'аdsfd@mail.ru', img: '../assets/image/profile.svg' },
    { firstName: 'Артем', desiredPosition: 'Backend',  birthDate: '25-09-2000', city: 'Москва', phoneNumber: '+79999668899', email: 'kkdsfd@mail.ru', img: '../assets/image/profile2.svg' },
    { firstName: 'Дмитрий', desiredPosition: 'Fullstack',  birthDate: '25-05-2000', city: 'Москва', phoneNumber: '+79999900899', email: 'nnnfd@mail.ru', img: '../assets/image/profile3.svg' },
  ];
//   const onHandleChange = (e) => {
//     const { name, value } = e.target;
//     // setFormData((data) => ({ ...data, [name]: value }));
//   };

  const onClickResume = () => {

  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        justifySelf: 'center',
      }}
    >
      <div className={styles['container']}>
        <div>
          <img src={data.img} alt="profile" />
        </div>
        <div className={styles['blockForm']}>
        
        <div className={styles['card-info__text']}>
            {data.firstName}
        
        </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <div className={styles['card-info__text']}>
                {data.birthDate}
              
            </div>

          <div className={styles['card-info__text']}>
           {data.city}
           </div>

        </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <div className={styles['card-info__text']}>
                {data.phoneNumber}
            
            </div>

            <div className={styles['card-info__text']}>
            {data.email}
             
            </div>
          </div>

          <div className={styles['blockNetwork']}>
            <div onClick={onClickResume}>
              <ButtonWithChain
                text={'Резюме'}
                color={'#FFF'}
                background={'#6C7FBD'}
              />
            </div>

            <a href="https://vk.com/" target="_blank" rel="noopener noreferrer">
              <img src={vk} alt="vk" />
            </a>

            <a
              href="https://web.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsapp} alt="whatsapp" />
            </a>

            <a
              href="https://web.telegram.org/a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={telegram} alt="telegram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponseCard;
