
import styles from './CardVacancy.module.scss';
import heart from '../../../assets/image/heart.png';
import { useContext } from 'react';
import { Context } from '../../../main';

const CardVacancy = () => {

    const { store } = useContext(Context);

    const handleEdit = () => {
        // Ваш код для редактирования вакансии
      };
    
      const handleApply = () => {
        // Ваш код для отклика на вакансию
      };

    return (
        <div className={styles['container']}>
            <h1>Название вакансии</h1>
            <div style={{display:'flex', marginTop:'15px', gap:'30px'}}>
                <div className={styles['company']}>
                    {/*<img src="" alt=""/>*/}
                    <p>Рексофт <br/>
                        Санкт-Петербург</p>

                </div>
                <div className={styles['remoteWork']}>
                    <p >Возможно удаленное сотрудничество</p>
                </div>

            </div>

            <div style={{display:'flex', alignItems: 'center', marginTop:'30px', gap:'30px'}}>
                 {store.userData.role === 'ROLE_RECRUITER' && <button onClick={handleEdit}>Редактировать</button>}
                 {store.userData.role=== 'ROLE_APPLICANT' && <><button onClick={handleApply}>Откликнуться</button>
                 <img src={heart} alt="like"/></>}
                {/* <img src={heart} alt="like"/> */}
            </div>

        </div>
    )
}

export default CardVacancy;
