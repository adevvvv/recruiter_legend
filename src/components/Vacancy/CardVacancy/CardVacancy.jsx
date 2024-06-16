import styles from './CardVacancy.module.scss';
import heart from '../../../assets/image/heart.png';
import { useContext } from 'react';
import { Context } from '../../../main';
import recsoft from '../../../assets/image/reksoft-1 1.svg';
import cross from '../../../assets/image/cross.png';

// eslint-disable-next-line react/prop-types
const CardVacancy = ({title, tasks}) => {
    const { store } = useContext(Context);

    const handleEdit = () => {
        // Ваш код для редактирования вакансии
      };
    
      const handleApply = () => {
        // Ваш код для отклика на вакансию
      };
    return (
        <div className={styles['container']}>
            {
                store.userData.role === 'ROLE_RECRUITER' ?
                    <img className={styles['cross']} src={cross} alt="cross"/>
                        :
                    null
            }

            <h1>{title}</h1>
            <div style={{display: 'flex', marginTop: '15px', gap: '30px'}}>
                <div className={styles['company']}>
                    <img src={recsoft} alt="iconCompany"/>
                    <p>Рексофт <br/>
                        Санкт-Петербург</p>

                </div>
                <div className={styles['tasks']}>
                    {
                        tasks
                            // eslint-disable-next-line react/prop-types
                            .slice(1, -1) // удаляем первую и последнюю скобку
                            .split(/, (?=[А-Я])/g) // разбиваем строку по запятым, за которыми следует заглавная буква
                            .map(task => task.trim()) // убираем лишние пробелы
                            // .slice(0, -1)
                            .map((el, i) => (
                                <div key={i} className={styles['remoteWork']}>{el}</div>
                            ))
                    }
                </div>



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
