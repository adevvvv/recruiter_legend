import styles from './CardVacancy.module.scss';
import heart from '../../../assets/image/heart.png';
import recsoft from '../../../assets/image/reksoft-1 1.svg';

const CardVacancy = ({title, type, tasks}) => {

    return (
        <div className={styles['container']}>
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

            <div style={{display: 'flex', alignItems: 'center', marginTop: '30px', gap: '30px'}}>
                <button style={{margin: '0'}}>Откликнуться</button>
                <img src={heart} alt="like"/>
            </div>

        </div>
    )
}

export default CardVacancy;
