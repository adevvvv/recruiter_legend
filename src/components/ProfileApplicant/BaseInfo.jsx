import styles from "./ProfileApplicant.module.scss";
import profile from "../../assets/image/profile.svg";
import chep from "../../assets/image/chep.png";
import vk from "../../assets/image/vk.png";
import whatsapp from "../../assets/image/whatsapp.png";
import telegram from "../../assets/image/telegram.png";
import {useState} from "react";
import {ButtonWithChain} from "../Button/buttons.jsx";


const BaseInfo = ({setIsFormInfo}) => {

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

    const onClickResume = () => {
        setIsFormInfo(false);
    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', flexDirection: 'column',
            alignItems: "center", justifySelf: 'center'
        }}>
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


                        <div onClick={onClickResume}>
                            <ButtonWithChain text={'Резюме'} color={'#FFF'} background={'#6C7FBD'}/>
                        </div>


                        <a href="https://vk.com/" target="_blank" rel="noopener noreferrer">
                            <img src={vk} alt="vk"/>
                        </a>

                        <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                            <img src={whatsapp} alt="whatsapp"/>
                        </a>

                        <a href="https://web.telegram.org/a/" target="_blank" rel="noopener noreferrer">
                            <img src={telegram} alt="telegram"/>
                        </a>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default BaseInfo;
