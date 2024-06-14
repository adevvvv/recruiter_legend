
import styles from './CardVacancy.module.scss';
import heart from '../../../assets/image/heart.png';

const CardVacancy = () => {

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
                <button>Откликнуться</button>
                <img src={heart} alt="like"/>
            </div>

        </div>
    )
}

export default CardVacancy;
