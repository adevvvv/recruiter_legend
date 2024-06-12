import styles from './Anketa.module.scss';
import Plus from "../Common/Plus.jsx";
import {ButtonWithChain} from "../Common/buttons.jsx";
import {useState} from "react";
import BlockInput from "./Input/BlockInput.jsx";
import Header from "../Header/Header.jsx";
import BlockSelect from "./select/BlockSelect.jsx";

const Anketa = () => {

    const [selectedGender, setSelectedGender] = useState(null);

    const placeholderSkills = 'Пример: Java  Spring Framework  Kubernetes  ORACLE    Java Core  AWS    REST  Java EE  Kotlin    Spring  Microservices  spring boot  Hibernate'

    const baseInfo = [
        {
            id: 'surname',
            title: 'Фамилия',
            type: 'text',
            width: '401px',
        },
        {
            id: 'name',
            title: 'Имя',
            type: 'text',
            width: '401px',
        },
        {
            id: 'patronymic',
            title: 'Отчество',
            type: 'text',
            width: '401px',
        },
        {

            id: 'dateOfBirth',
            title: 'Дата рождения',
            type: 'date',
            width: '296px',
        },
        {
            id: 'mobilePhone',
            title: 'Мобильный телефон',
            type: 'tel',
            width: '296px',
        },
        {
            id: 'email',
            title: 'Электронная почта',
            type: 'email',
            width: '401px',
        },
        {
            id: 'city',
            title: 'Город проживания',
            type: 'text',
            width: '401px',
        },

        {
            id: 'specialization',
            title: 'Специализация',
            type: 'text',
            width: '296px',
        },
        {
            id: 'busyness',
            title: 'Занятость',
            type: 'text',
            width: '296px',
        },
        {
            id: 'salary',
            title: 'Желаемая зарплата',
            type: 'text',
            width: '401px',
        },
        {
            id: 'workSchedule',
            title: 'График работы',
            type: 'text',
            width: '401px',
        },
        {
            id: 'language1',
            title: 'Языки',
            type: 'text',
            width: '296px',
            date:['Выберите язык..','Английский', 'Немецкий', 'Французский']
        },
        {
            id: 'language2',
            title: '',
            type: 'text',
            width: '296px',
            date:['Выберите язык..','Английский', 'Немецкий', 'Французский']
        },
        {
            id: 'level1',
            title: 'Уровень владения',
            type: 'text',
            width: '401px',
            marginTop: '200px'
        },
        {
            id: 'level2',
            title: '',
            type: 'text',
            width: '401px',
        },
    ];

    const [selectInfo, setSelectInfo] = useState([
        {
            id: 'citizenship',
            title: 'Гражданство',
            date: ['Выберите гражданство...',
                'Абхазия',
                'Австралия',
                'Австрия',
                'Азербайджан',
                'Албания',
                'Алжир',
                'Ангола',
                'Андорра',
                'Аргентина',
                'Армения',
                'Афганистан',
                'Багамские Острова',
                'Бангладеш',
                'Барбадос',
                'Бахрейн',
                'Беларусь',
                'Белиз',
                'Бельгия',
                'Другое',
                'Россия',
            ],
            width: '296px'
        },
        {
            id: 'education',
            title: 'Образование',
            date: ['Выберите образование...',
                'Образование',
                'Среднее',
                'Средне специальное',
                'Неоконченное высшее',
                'Высшее',
                'Бакалавр',
                'Магистр',
                'Кандидат наук',
                'Доктор наук',
            ],
            width: '296px'
        },
    ]);

    const [vyz, setVyz] = useState([
        {
            id: 'institution',
            title: 'Какое учебное заведение закончили',
            type: 'text',
            width: '401px',
        },
    ]);

    const addEducation = () => {
        setSelectInfo(selectInfo => ([...selectInfo, {
            id: `education${selectInfo.length}`,
            title: 'Образование',
            date: ['Выберите образование...',
                'Образование',
                'Среднее',
                'Средне специальное',
                'Неоконченное высшее',
                'Высшее',
                'Бакалавр',
                'Магистр',
                'Кандидат наук',
                'Доктор наук',
            ],
            width: '296px'
        },]));

        setVyz(vyz => ([...vyz, {
            id: `institution${vyz.length}`,
            title: 'Какое учебное заведение закончили',
            type: 'text',
            width: '401px',
        },]))
    }

    return (
        <div>
            <Header/>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <div className={styles['container']}>

                    <h3 style={{marginBottom: '20px'}}>Заполните основную информацию</h3>

                    <div style={{display: 'grid', gridTemplateColumns: '45% 50%'}}>

                        <div className={styles['leftColumn']}>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <div className={styles['addPhoto']}>

                                    <p>Добавить <br/> фото</p>
                                    <input
                                        type="file"
                                        // ref={fileInputRef}
                                        style={{display: 'none'}}
                                        // onChange={handleFileChange}
                                    />
                                    <Plus/>
                                </div>
                            </div>


                            <div
                                // className={styles['rightInput']}
                            >
                                {
                                    baseInfo.slice(3, 5).map((el, i) =>
                                        <BlockInput type={el.type}
                                                    id={el.id} width={el.width}
                                                    title={el.title}/>)
                                }

                                {
                                    selectInfo.map((el, i) =>
                                        <BlockSelect title={el.title} id={el.id} width={el.width}
                                                     date={el.date} name={el.date} />
                                    )
                                }
                                <div style={{display:'flex', flexDirection:'column', justifyContent:'center',
                                alignItems:'center', margin:'20px 0'}}
                                onClick={addEducation}>
                                    <Plus/>
                                    <label>Добавить образование</label>
                                </div>


                            </div>

                            <div style={{marginBottom: '26px'}}>
                                {
                                    baseInfo.slice(7, 9).map((el, i) =>
                                        <BlockInput type={el.type}
                                                    id={el.id} width={el.width}
                                                    title={el.title}/>)
                                }

                            </div>

                            <h3>Ключевые навыки</h3>
                            <div
                                // style={{display: 'flex', flexDirection: 'column', textAlign: 'left'}}
                            >
                                {
                                    baseInfo.slice(11, 13).map((el, i) =>

                                            <BlockSelect title={el.title} id={el.id}
                                                         date={el.date} width={el.width} marginTop={0}/>

                                        )
                                }

                            </div>
                        </div>

                        <div className={styles['rightColumn']}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                textAlign: 'left',
                                marginBottom: '35px'
                            }}>
                                {
                                    baseInfo.slice(0, 3).map((el, i) =>
                                        <BlockInput type={el.type}
                                                    id={el.id} width={el.width}
                                                    title={el.title}/>)
                                }


                            </div>
                            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'left',}}>

                                <label>Пол</label>
                                <div style={{display: 'flex', justifyContent: 'space-between', width: '401px'}}>
                                    <button className={`${selectedGender === 'male' ? styles['selectedGender'] : null}`}
                                            onClick={() => setSelectedGender('male')}>Мужской
                                    </button>
                                    <button
                                        className={`${selectedGender === 'female' ? styles['selectedGender'] : null}`}
                                        onClick={() => setSelectedGender('female')}>Женский
                                    </button>
                                </div>

                                {
                                    baseInfo.slice(5, 7).map((el, i) =>
                                        <BlockInput type={el.type}
                                                    id={el.id} width={el.width}
                                                    title={el.title}/>)
                                }


                                <div style={{marginBottom:'80px'}}>
                                    {
                                        vyz.map((el, i) => (
                                            <BlockInput type={el.type}
                                                        id={el.id} width={el.width}
                                                        title={el.title}/>
                                        ))
                                    }
                                </div>

                            </div>

                            <div
                                // style={{marginBottom: '66px'}}
                            >

                                {
                                    baseInfo.slice(9, 11).map((el, i) =>
                                        <BlockInput type={el.type}
                                                    id={el.id} width={el.width}
                                                    title={el.title}/>)
                                }


                            </div>

                            <div
                                // style={{display: 'flex', flexDirection: 'column', textAlign: 'left', marginTop: '60px'}}
                            >

                                {
                                    baseInfo.slice(13, 17).map((el, i) =>
                                        <BlockInput type={el.type}
                                                    id={el.id} width={el.width}
                                                    title={el.title}/>)
                                }

                            </div>
                        </div>

                    </div>

                    {/*<div className={styles['block']} >*/}
                    {/*</div>*/}

                    {/*<div style={{display: "flex", justifyContent: 'space-around', marginTop: '50px'}}></div>*/}


                    {/*<div style={{display: "flex", justifyContent: 'center', marginTop: '50px', gap: '150px'}}></div>*/}


                    {/*////////////////////*/}


                    <label>Навыки</label>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <input className={styles['inputSkills']} type="text" placeholder={placeholderSkills}/>
                    </div>


                    <h3 style={{margin: '20px 0'}}>Опыт работы</h3>

                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <label htmlFor="nameCompany">Название компании </label>
                            <input style={{width: '296px'}} id={'nameCompany'} type="text"/>
                        </div>
                        <div style={{display: 'flex', gap: '10px'}}>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <label htmlFor="start">Устроился </label>
                                <input id={'start'} type="date"/>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <label htmlFor="end">Уволился </label>
                                <input id={'end'} type="date"/>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <input id={'simpleTime'} type="checkbox"/>
                                <label htmlFor="simpleTime">Настоящее время</label>
                            </div>
                        </div>


                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', textAlign: 'left'}}>

                        <label htmlFor="Post">Должность </label>
                        <input style={{width: '773px', height: '31px'}} id={'Post'} type="text"/>

                        <label htmlFor="Responsibilities">Обязанности </label>
                        <input style={{width: '773px', height: '67px'}} id={'Responsibilities'} type="text"/>

                    </div>

                    <div style={{
                        display: 'flex', flexDirection: 'column', justifyContent: 'center',
                        textAlign: 'center', justifyItems: 'center', alignItems: 'center', marginTop: '20px'
                    }}>
                        <Plus/>
                        <label>Добавить опыт работы</label>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Anketa;
