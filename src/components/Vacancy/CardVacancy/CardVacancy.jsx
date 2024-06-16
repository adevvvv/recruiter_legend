
import styles from './CardVacancy.module.scss';
import heart from '../../../assets/image/heart.png';
import { useContext } from 'react';
import { Context } from '../../../main';
import recsoft from '../../../assets/image/reksoft-1 1.svg';


const CardVacancy = ({title, type}) => {
    const { store } = useContext(Context);

    const handleEdit = () => {
        // Ваш код для редактирования вакансии
      };
    
      const handleApply = () => {
        // Ваш код для отклика на вакансию
      };
    return (
        <div className={styles['container']}>
            <h1>{title}</h1>
            <div style={{display:'flex', marginTop:'15px', gap:'30px'}}>
                <div className={styles['company']}>
                    <img src={recsoft} alt="iconCompany"/>
                    <p>Рексофт <br/>
                        Санкт-Петербург</p>

                </div>
                <div className={styles['remoteWork']}>{type}</div>

            </div>

            <div style={{display:'flex', alignItems: 'center', marginTop:'30px', gap:'30px'}}>
                 {store.userData.role === 'ROLE_RECRUITER' && <button onClick={handleEdit} style={{margin:'0'}}>Редактировать</button>}
                 {store.userData.role=== 'ROLE_APPLICANT' && <><button onClick={handleApply} style={{margin:'0'}}>Откликнуться</button>
                 <img src={heart} alt="like"/></>}
                {/* <img src={heart} alt="like"/> */}
            </div>

        </div>
    )
}

export default CardVacancy;
