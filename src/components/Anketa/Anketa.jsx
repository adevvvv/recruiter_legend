import styles from './Anketa.module.scss';
import Plus from "../Common/Plus.jsx";
import {ButtonWithChain} from "../Common/buttons.jsx";
import {useState} from "react";
import BlockInput from "./Input/BlockInput.jsx";
import Header from "../Header/Header.jsx";

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
        }, {
            id: 'patronymic',
            title: 'Отчество',
            type: 'text',
            width: '401px',
        },
        {

            id: 'dateOfBirth',
            title: 'Дата рождения',
            type: 'text',
            width: '296px',
        },
        {
            id: 'mobilePhone',
            title: 'Мобильный телефон',
            type: 'tel',
            width: '296px',
        },
        {
            id: 'citizenship',
            title: 'Гражданство',
            type: 'text',
            width: '296px',
        },
        {
            id: 'education',
            title: 'Образование',
            type: 'text',
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
            id: 'institution',
            title: 'Какое учебное заведение закончили',
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
        },
        {
            id: 'language2',
            title: '',
            type: 'text',
            width: '296px',
        },
        {
            id: 'level1',
            title: 'Уровень владения',
            type: 'text',
            width: '401px',
        },
        {
            id: 'level2',
            title: '',
            type: 'text',
            width: '401px',
        },
    ];

    return (
        <div >
            <Header/>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
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
                                baseInfo.slice(3, 7).map((el, i) =>
                                    <BlockInput type={el.type}
                                                id={el.id} width={el.width}
                                                title={el.title}/>)
                            }
                        </div>

                        <div style={{marginBottom: '26px'}}>
                            {
                                baseInfo.slice(10, 12).map((el, i) =>
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
                                baseInfo.slice(14, 16).map((el, i) =>
                                    <BlockInput type={el.type}
                                                id={el.id} width={el.width}
                                                title={el.title}/>)
                            }
                        </div>
                    </div>

                    <div className={styles['rightColumn']}>
                        <div style={{display: 'flex', flexDirection: 'column', textAlign: 'left', marginBottom: '35px'}}>
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
                                <button className={`${selectedGender === 'female' ? styles['selectedGender'] : null}`}
                                        onClick={() => setSelectedGender('female')}>Женский
                                </button>
                            </div>

                            {
                                baseInfo.slice(7, 10).map((el, i) =>
                                    <BlockInput type={el.type}
                                                id={el.id} width={el.width}
                                                title={el.title}/>)
                            }

                        </div>

                        <div
                            // style={{marginBottom: '66px'}}
                        >

                            {
                                baseInfo.slice(12, 14).map((el, i) =>
                                    <BlockInput type={el.type}
                                                id={el.id} width={el.width}
                                                title={el.title}/>)
                            }

                        </div>

                        <div
                            // style={{display: 'flex', flexDirection: 'column', textAlign: 'left', marginTop: '60px'}}
                        >

                            {
                                baseInfo.slice(16, 18).map((el, i) =>
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

                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <label htmlFor="nameCompany">Название компании </label>
                        <input style={{width: '296px'}} id={'nameCompany'} type="text"/>
                    </div>
                    <div style={{display:'flex', gap: '10px'}}>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <label htmlFor="start">Устроился </label>
                            <input id={'start'} type="date"/>
                        </div>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <label htmlFor="end">Уволился </label>
                            <input id={'end'} type="date"/>
                        </div>
                        <div style={{display:'flex', alignItems:'center'}}>
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

                <div style={{display:'flex', flexDirection:'column', justifyContent:'center',
                    textAlign:'center', justifyItems:'center', alignItems:'center', marginTop:'20px'}}>
                    <Plus/>
                    <label>Добавить опыт работы</label>
                </div>
            </div>
            </div>
        </div>

    )
}

export default Anketa;
