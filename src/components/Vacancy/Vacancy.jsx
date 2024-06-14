import Header from "../Header/Header.jsx";

import styles from './Vacancy.module.scss';
import CardVacancy from "./CardVacancy/CardVacancy.jsx";

const Vacancy = () => {

    const sort = [
        'По соответствию',
        'По дате',
        'По убыванию зарплаты',
        'По возрастанию зарплаты',
    ];

    const filter = [
        'За все время',
        'За месяц',
        'За неделю',
        'За последние три дня',
        'За сутки'
    ];

    const checkbox = [
        {

            title: 'Уровень дохода',
            date: [
                'Не имеет значения',
                'от 60 000 ₽',
                'от 120 000 ₽',
                'от 180 000 ₽',
                'от 240 000 ₽',
                'от 300 000 ₽',
                'Своя зарплата',
            ]
        },
        {

            title: 'Опыт работы',
            date: [
                'Не имеет значения',
                'От 1 года',
                'До 3 лет',
                'Нет опыта',
                'От 3 до 6 лет',
                'Более 6 лет',
            ]
        },
        {
            title: 'Тип занятости',
            date: [
                'Полная занятость',
                'Частичная занятость',
                'Стажировка',
                'Проектная работа',
            ]
        },
        {
            title: 'График работы',
            date: [
                'Полный день',
                'Сменный график',
                'Гибкий график',
                'Удаленная работа'
            ]
        }
    ]

    return (
        <div>
            <Header/>
            <div className={styles['container']}>

                <div className={styles['search']}>
                    <input type={'search'}/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path
                            d="M12.6004 1.79688C6.97304 1.79688 2.40039 6.36953 2.40039 11.9969C2.40039 17.6242 6.97304 22.1969 12.6004 22.1969C14.827 22.1969 16.8848 21.4797 18.5629 20.2656L26.4566 28.1406L28.1441 26.4531L20.3441 18.6344C21.877 16.8484 22.8004 14.5305 22.8004 11.9969C22.8004 6.36953 18.2277 1.79688 12.6004 1.79688ZM12.6004 2.99688C17.5785 2.99688 21.6004 7.01875 21.6004 11.9969C21.6004 16.975 17.5785 20.9969 12.6004 20.9969C7.62227 20.9969 3.60039 16.975 3.60039 11.9969C3.60039 7.01875 7.62227 2.99688 12.6004 2.99688Z"
                            fill="white"/>
                    </svg>
                    <button>Найти</button>
                </div>

                <div style={{display: 'flex', gap: '41px'}}>
                    <select name="sort" id="sort">
                        {
                            sort.map((el, i) =>
                                <option value={el}>{el}</option>)
                        }
                    </select>

                    <select name="filter" id="filter">
                        {
                            filter.map((el, i) =>
                                <option value={el}>{el}</option>)
                        }
                    </select>
                </div>

                <div style={{display: 'flex', marginTop:'30px', gap:'62px', }}>

                    <div style={{display:'flex', flexDirection:'column', gap:'30px'}}>
                        {
                            checkbox.map((el, i) => {
                                return (
                                    <div className={styles['filter']}>
                                        <p>{el.title}</p>
                                        {
                                            el.date.map((variant, i) => {
                                                return (
                                                    <div style={{display:'flex', justifyContent:'left', gap:'5px'}}>
                                                        <input name={el.title} type="radio"/>
                                                        <label htmlFor={variant}>{variant}</label>
                                                    </div>

                                                )
                                            })
                                        }
                                    </div>
                                    )

                        })
                        }
                    </div>

                    <div>
                    <CardVacancy/>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Vacancy;
