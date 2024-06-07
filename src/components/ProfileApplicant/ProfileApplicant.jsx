import styles from './ProfileApplicant.module.scss';
import human from '../../assets/image/human.svg';
import {useState} from "react";
import profile from '../../assets/image/profile.svg';
import chep from '../../assets/image/chep.png';
import vk from '../../assets/image/vk.png';
import telegram from '../../assets/image/telegram.png';
import whatsapp from '../../assets/image/whatsapp.png';

const ProfileApplicant = () => {

    const [formData, setFormData] = useState(
        {
            name: 'Имя пользователя',
            bird: 'Дата рождения',
            city: 'Город',
            phone: '+79999999999',
            email: 'email',
        }
    );

    const onHandleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({...formData, [name]: value}))
    }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: "center"}}>
                <div className={styles['container']}>
                    <div>
                        <img src={profile} alt="profile"/>
                    </div>
                    <div className={styles['blockForm']}>
                        <input className={styles['inputName']} id={'name'} name={'name'} type="text"
                               value={formData.name} onChange={onHandleChange}/>

                        <div style={{display: 'flex', gap: '20px'}}>
                            <input id={'bird'} name={'bird'} type="text" value={formData.bird}
                                   onChange={onHandleChange}/>

                            <input id={'city'} name={'city'} type="text" value={formData.city}
                                   onChange={onHandleChange}/>
                        </div>

                        <div style={{display: 'flex', gap: '20px'}}>
                            <input id={'phone'} name={'phone'} type="text" value={formData.phone}
                                   onChange={onHandleChange}/>

                            <input id={'email'} name={'email'} type="text" value={formData.email}
                                   onChange={onHandleChange}/>
                        </div>

                        <div className={styles['blockNetwork']}>

                            <div className={styles['resume']}>
                                <img className={styles['chep']} src={chep} alt="shep"/>
                                <button>Резюме</button>
                            </div>

                            <img src={vk} alt="vk"/>
                            <img src={whatsapp} alt="whatsapp"/>
                            <img src={telegram} alt="telegram"/>

                        </div>

                    </div>

                </div>
            </div>

            <div className={styles['containerImg']}>
                <img src={human} alt="human"/>
            </div>

        </div>
    )
}

export default ProfileApplicant;
