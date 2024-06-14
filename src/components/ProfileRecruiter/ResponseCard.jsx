/* eslint-disable react/prop-types */
import styles from './ProfileRecruiter.module.scss';
import vk from '../../assets/image/vk.png';
import whatsapp from '../../assets/image/whatsapp.png';
import telegram from '../../assets/image/telegram.png';
import accept from '../../assets/image/accept-icon.svg';
import decline from '../../assets/image/decline-icon.svg'

// import { ButtonWithChain } from '../Common/buttons';

const ResponseCard = ({user}) => {
  //   const onHandleChange = (e) => {
  //     const { name, value } = e.target;
  //     // setFormuser((user) => ({ ...user, [name]: value }));
  //   };
  const handleClick = () => {
    
  };
  const onClickResume = () => {};

  return (
    <div
      className={styles['responseCard']}
      >
        <div className={styles['containerCard']}>

            <div  style={{
             display: 'flex', justifyContent: 'space-around'
             }}>
                <div>
                    <img src={user.img} alt="profile" />
                </div>

                <div className={styles['blockForm']}>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <div className={styles['card-info__text']}><p>{user.firstName}</p></div>
                        <div className={styles['card-info__text']}>{user.desiredPosition}</div>
                    </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <div className={styles['card-info__text']}>{user.birthDate}</div>

                    <div className={styles['card-info__text']}>{user.city}</div>
                </div>

                <div style={{ display: 'flex', gap: '20px' }}>
                    <div className={styles['card-info__text']}>{user.phoneNumber}</div>

                    <div className={styles['card-info__text']}>{user.email}</div>
                </div>

                <div className={styles['blockNetwork']}>
                    <div onClick={onClickResume}>
                    <button>Резюме</button>
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

            <div className={styles['blockIcons']} >
                <div onClick={handleClick} style={{  cursor: 'pointer' }}>
                  <img src={accept} alt="accept" />
                </div>
                <div onClick={handleClick} style={{  cursor: 'pointer' }}>
                  <img src={decline} alt="decline"  />
                </div>
            </div>
        </div>
    </div>
  );
};

export default ResponseCard;
