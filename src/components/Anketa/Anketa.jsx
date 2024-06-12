import styles from './Anketa.module.scss';
import Plus from "../Common/Plus.jsx";
import {ButtonWithChain} from "../Common/buttons.jsx";
import {useState} from "react";

const Anketa = () => {

    const [selectedGender, setSelectedGender] = useState(null);

    return (
        <div className={styles['container']}>

            <h3>Заполните основную информацию</h3>

            <div style={{display: 'flex', gap: '150px', justifyContent: 'center'}}>
                <div className={styles['addPhoto']}>
                    <div>
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

                <div style={{display: 'flex', flexDirection: 'column', textAlign: 'left'}}>
                    <label htmlFor="surname">Фамилия</label>
                    <input id='surname' type="text"/>

                    <label htmlFor="name">Имя</label>
                    <input id={'name'} type="text"/>

                    <label htmlFor="patronymic">Отчество</label>
                    <input id={'patronymic'} type="text"/>
                </div>
            </div>

            <div style={{display: "flex", justifyContent: 'center', marginTop: '50px', gap: '150px'}}>
                <div style={{display: 'flex', flexDirection: 'column', textAlign: 'left'}}>
                    <label htmlFor="DateOfBirth">Дата рождения</label>
                    <input id={'DateOfBirth'} type="text"/>

                    <label htmlFor="MobilePhone">Мобильный телефон</label>
                    <input id={'MobilePhone'} type="tel"/>

                    <label htmlFor="Citizenship">Гражданство</label>
                    <input id={'Citizenship'} type="text"/>

                    <label htmlFor="Education">Образование</label>
                    <input id={'Education'} type="text"/>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', textAlign: 'left'}}>

                    <label>Пол</label>
                    <div style={{display: 'flex', gap: '20px'}}>
                        <button className={`${selectedGender === 'male' ? styles['selectedGender'] : null}`}
                                onClick={() => setSelectedGender('male')}>Мужской
                        </button>
                        <button className={`${selectedGender === 'female' ? styles['selectedGender'] : null}`}
                                onClick={() => setSelectedGender('female')}>Женский
                        </button>
                    </div>


                    <label htmlFor="email">Электронная почта</label>
                    <input id={'email'} type="email"/>

                    <label htmlFor="City">Город проживания</label>
                    <input id={'City'} type="text"/>

                    <label htmlFor="institution">Какое учебное заведение закончили</label>
                    <input id={'institution'} type="text"/>
                </div>
            </div>

            <h3>Ключевые навыки</h3>

            <div style={{display: "flex", justifyContent: 'center', marginTop: '50px', gap: '150px'}}>
                <div style={{display: 'flex', flexDirection: 'column', textAlign: 'left'}}>
                    <label htmlFor="Languages">Языки</label>
                    <input id={'Languages'} type="text"/>
                    <input id={'Languages-2'} type="text"/>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', textAlign: 'left'}}>
                    <label htmlFor="level">Уровень владения</label>
                    <input id={'level'} type="text"/>
                    <input id={'level'} type="text"/>
                </div>

            </div>


            <label>Навыки</label>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <input className={styles['inputSkills']} type="text"/>
            </div>


            <h3>Опыт работы</h3>

            <div style={{display:'flex'}}>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <label htmlFor="nameCompany">Название компании </label>
                    <input id={'nameCompany'} type="text"/>
                </div>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <label htmlFor="start">Устроился </label>
                    <input id={'start'} type="date"/>
                </div>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <label htmlFor="end">Уволился </label>
                    <input id={'end'} type="date"/>
                </div>
                <div>
                    <label htmlFor="simpleTime">Настоящее время</label>
                    <input id={'simpleTime'} type="checkbox"/>
                </div>

            </div>

            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'left'}}>
                <label htmlFor="Post">Должность </label>
                <input id={'Post'} type="text"/>

                <label htmlFor="Responsibilities">Обязанности </label>
                <input id={'Responsibilities'} type="text"/>
            </div>

            <Plus/>
            <label>Добавить опыт работы</label>

        </div>
    )
}

export default Anketa;
