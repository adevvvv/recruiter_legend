import styles from './Anketa.module.scss';
import Plus from '../Common/Plus.jsx';
import { useRef, useState } from 'react';
import BlockInput from './Input/BlockInput.jsx';
import Header from '../Header/Header.jsx';
import BlockSelect from './select/BlockSelect.jsx';
import WorkExperience from './workExperience/workExperience.jsx';

const Anketa = () => {
  const [dataResume, setDataResume] = useState({
    id: 0,
    lastName: '',
    firstName: '',
    middleName: '',
    birthDate: '',
    gender: '',
    phoneNumber: '',
    email: '',
    citizenship: '',
    city: '',

    education: [],
    institution: [],

    desiredPosition: '',
    desiredSalary: '',
    workSchedule: '',
    employmentType: '',

    language: [],
    level: [],

    nameCompany: [],
    startDate: [],
    endDate: [],
    currentlyWorking: [],
    post: [],
    responsibilities: [],
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    // console.log('name', name);
    // console.log('val', value);
    // console.log('type', type);
    // console.log('checked', checked);

    if (type === 'checkbox') {
      const newValue = [...dataResume[name], checked];
      setDataResume((dataResume) => ({ ...dataResume, [name]: newValue }));
    } else if (Array.isArray(dataResume[name])) {
      const newValue = [...dataResume[name], value];
      setDataResume((dataResume) => ({ ...dataResume, [name]: newValue }));
    } else {
      setDataResume((dataResume) => ({ ...dataResume, [name]: value }));
    }
  };

  const placeholder =
    'Пример: Java  Spring Framework  Kubernetes  ORACLE ' +
    '   Java Core  AWS    REST  Java EE  Kotlin    Spring  Microservices ' +
    ' spring boot  Hibernate';

  const [placeholderSkills, setPlaceHolderSkills] = useState(placeholder);

  const baseInfo = [
    {
      name: 'lastName',
      title: 'Фамилия',
      type: 'text',
      width: '401px',
    },
    {
      name: 'firstName',
      title: 'Имя',
      type: 'text',
      width: '401px',
    },
    {
      name: 'middleName',
      title: 'Отчество',
      type: 'text',
      width: '401px',
    },
    {
      name: 'birthDate',
      title: 'Дата рождения',
      type: 'date',
      width: '296px',
    },
    {
      name: 'phoneNumber',
      title: 'Мобильный телефон',
      type: 'tel',
      width: '296px',
    },
    {
      name: 'email',
      title: 'Электронная почта',
      type: 'email',
      width: '401px',
    },
    {
      name: 'city',
      title: 'Город проживания',
      type: 'text',
      width: '401px',
    },

    {
      name: 'desiredPosition',
      title: 'Должность',
      type: 'text',
      width: '296px',
    },
    {
      name: 'employmentType',
      title: 'Занятость',
      type: 'text',
      width: '296px',
    },
    {
      name: 'desiredSalary',
      title: 'Желаемая зарплата',
      type: 'text',
      width: '401px',
    },
    {
      name: 'workSchedule',
      title: 'График работы',
      type: 'text',
      width: '401px',
    },

    {
      name: 'language',
      id: 0,
      title: 'Языки',
      type: 'text',
      width: '296px',
      date: ['Выберите язык..', 'Английский', 'Немецкий', 'Французский'],
    },
    {
      id: 1,
      name: 'language',
      title: '',
      type: 'text',
      width: '296px',
      date: ['Выберите язык..', 'Английский', 'Немецкий', 'Французский'],
    },
    {
      name: 'level',
      title: 'Уровень владения',
      type: 'text',
      width: '401px',
      marginTop: '200px',
      date: [
        'Выберите уровень владения',
        '(А1) – начальный',
        '(А2) – ниже среднего',
        '(В1) – средний',
        '(В2) – выше среднего',
        '(C1) – продвинутый',
        '(C2) – профессиональный уровень владения',
      ],
    },
    {
      name: 'level',
      title: '',
      type: 'text',
      width: '401px',
      date: [
        'Выберите уровень владения',
        '(А1) – начальный',
        '(А2) – ниже среднего',
        '(В1) – средний',
        '(В2) – выше среднего',
        '(C1) – продвинутый',
        '(C2) – профессиональный уровень владения',
      ],
    },
  ];

  const [selectInfo, setSelectInfo] = useState([
    {
      name: 'citizenship',
      title: 'Гражданство',
      date: [
        'Выберите гражданство...',
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
        'Болгария',
        'Боливия',
        'Босния и Герцеговина',
        'Бразилия',
        'Бруней Даруссалам',
        'Буркина Фасо',
        'Великобритания',
        'Венгрия',
        'Венесуэла',
        'Вьетнам',
        'Габон',
        'Гвинея',
        'Германия',
        'Государство Палестина',
        'Греция',
        'Грузия',
        'Дания',
        'Демократическая Республика Конго',
        'Джибути',
        'Доминиканская Республика',
        'Другое',
        'Египет',
        'Замбия',
        'Израиль',
        'Индия',
        'Индонезия',
        'Иордания',
        'Ирак',
        'Иран',
        'Ирландия',
        'Исландия',
        'Испания',
        'Италия',
        'Йемен',
        'Казахстан',
        'Камбоджа',
        'Канада',
        'Катар',
        'Кипр',
        'Китай',
        'Колумбия',
        'Кооперативная Республика Гайана',
        'Королевство Саудовская Аравия',
        'Кувейт',
        'Кыргызстан',
        'Лаос',
        'Латвия',
        'Ливан',
        'Ливия',
        'Литва',
        'Лихтенштейн',
        'Люксембург',
        'Македония',
        'Малайзия',
        'Мали',
        'Мальдивская Республика',
        'Мальта',
        'Марокко',
        'Мексика',
        'Молдова',
        'Монако',
        'Монголия',
        'Мьянма',
        'Намибия',
        'Непал',
        'Нигерия',
        'Нидерланды',
        'Новая Зеландия',
        'Норвегия',
        'ОАЭ',
        'Объединенная Республика Танзания',
        'Оман',
        'Острова Кайман',
        'Пакистан',
        'Панама',
        'Парагвай',
        'Перу',
        'Польша',
        'Португалия',
        'Республика Бенин',
        'Республика Гаити',
        'Республика Гамбия',
        'Республика Гана',
        'Республика Гватемала',
        'Республика Зимбабве',
        'Республика Камерун',
        'Республика Кения',
        'Республика Конго',
        'Республика Коста-Рика',
        'Республика Кот-д’Ивуар',
        'Республика Куба',
        'Республика Либерия',
        'Республика Маврикий',
        'Республика Мадагаскар',
        'Республика Малави',
        'Республика Нигер',
        'Республика Никарагуа',
        'Республика Северный Судан',
        'Республика Сейшельские острова',
        'Республика Сенегал',
        'Республика Сьерра-Леоне',
        'Республика Чад',
        'Республика Эль-Сальвадор',
        'Реюньон',
        'Россия',
        'Румыния',
        'Сан-Томе и Принсипи',
        'Сент-Винсент и Гренадины',
        'Сербия',
        'Сингапур',
        'Сирия',
        'Словакия',
        'Словения',
        'США',
        'Таджикистан',
        'Таиланд',
        'Тайвань',
        'Тоголезская Республика',
        'Тунис',
        'Туркменистан',
        'Турция',
        'Уганда',
        'Узбекистан',
        'Украина',
        'Уругвай',
        'Филиппины',
        'Финляндия',
        'Франция',
        'Хорватия',
        'Центральноафриканская Республика',
        'Черногория',
        'Чехия',
        'Чили',
        'Швейцария',
        'Швеция',
        'Шотландия',
        'Шри-Ланка',
        'Эквадор',
        'Эритрея',
        'Эстония',
        'Эфиопия',
        'ЮАР',
        'Южная Корея',
        'Южная Осетия',
        'Ямайка',
        'Япония',
      ],
      width: '296px',
    },
    {
      name: 'education',
      title: 'Образование',
      date: [
        'Выберите образование...',
        'Среднее',
        'Средне специальное',
        'Неоконченное высшее',
        'Высшее',
        'Бакалавр',
        'Магистр',
        'Кандидат наук',
        'Доктор наук',
      ],
      width: '296px',
    },
  ]);

  const [vyz, setVyz] = useState([
    {
      name: 'institution',
      title: 'Какое учебное заведение закончили',
      type: 'text',
      width: '401px',
    },
  ]);

  const onClickSkills = () => {
    setPlaceHolderSkills('');
  };

  const onBlurSkills = () => {
    setPlaceHolderSkills(placeholder);
  };

  const addEducation = () => {
    setSelectInfo((selectInfo) => [
      ...selectInfo,
      {
        name: `education`,
        title: 'Образование',
        date: [
          'Выберите образование...',
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
        width: '296px',
      },
    ]);

    setVyz((vyz) => [
      ...vyz,
      {
        name: `institution`,
        id: `${vyz.length}`,
        title: 'Какое учебное заведение закончили',
        type: 'text',
        width: '401px',
      },
    ]);
  };

  const [work, setWork] = useState([
    <WorkExperience handleChange={handleChange} />,
  ]);

  const addWorkExperience = () => {
    setWork((work) => [
      ...work,
      <WorkExperience handleChange={handleChange} />,
    ]);
  };

  const [data, setData] = useState({
    workExperienceList: [],
    educationList: [],
    languages: [],
  });

  const handleSubmit = async () => {
    // отправка данных на сервер

    console.log(dataResume);

    getData();

    console.log(data);
  };

  const getData = () => {
    setData({
      id: 0,
      lastName: dataResume.lastName,
      firstName: dataResume.firstName,
      middleName: dataResume.middleName,
      birthDate: dataResume.birthDate,
      gender: dataResume.gender,
      phoneNumber: dataResume.phoneNumber,
      email: dataResume.email,
      citizenship: dataResume.citizenship,
      city: dataResume.city,
      desiredPosition: dataResume.desiredPosition,
      desiredSalary: dataResume.desiredSalary,
      workSchedule: dataResume.workSchedule,
      employmentType: dataResume.employmentType,
      skills: dataResume.skills,

      message: 'string',
      resumeAttachment: 'string',
      consentToProcessPersonalData: true,
    });

    const edu = dataResume.education.map((deg, i) => {
      return {
        id: i,
        institution: dataResume.institution[i],
        degree: deg,
      };
    });

    setData((data) => ({
      ...data,
      educationList: edu,
    }));

    const updatedLanguages = dataResume.language.map((lang, i) => {
      return {
        id: i,
        language: lang,
        proficiencyLevel: dataResume.level[i],
      };
    });

    setData((data) => ({ ...data, languages: updatedLanguages }));

    const work = dataResume.nameCompany.map((work, i) => {
      return {
        id: i,
        nameCompany: work,
        startDate: dataResume.startDate[i],
        endDate: dataResume.endDate[i],
        currentlyWorking: dataResume.currentlyWorking[i],
        position: dataResume.post[i],
        responsibilities: dataResume.responsibilities[i],
      };
    });
    setData((data) => ({ ...data, workExperienceList: work }));
  };

  // const fileRef = useRef(null);
  // const [profileImage, setProfileImage] = useState(null);
  // const handleImageChange = (event) => {
  //     const file = event.target.files[0];
  //     if (file) {
  //         setProfileImage(file.name);
  //         // Здесь можно добавить логику для обработки файла
  //     }
  //     console.log('h');
  // const file = event.target.files[0];
  // const reader = new FileReader();
  //
  // reader.onloadend = () => {
  //     setProfileImage(reader.result);
  // };
  //
  // if (file) {
  //     reader.readAsDataURL(file);
  // }
  // };

  const [profileImage, setProfileImage] = useState(null);
  const fileRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfileImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileRef.current.click();
  };

  return (
    <div>
      <Header />
      <form action="" onSubmit={handleSubmit}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className={styles['container']}>
            <h3 style={{ marginBottom: '20px' }}>
              Заполните основную информацию
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '40% 60%',
                justifyContent: 'right',
                justifyItems: 'flex-end',
              }}
            >
              <div className={styles['leftColumn']}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div onClick={handleClick} className={styles['addPhoto']}>
                    {profileImage ? (
                      <img
                        className={styles['profileImg']}
                        src={profileImage}
                      />
                    ) : (
                      <div>
                        <p>
                          Добавить <br /> фото
                        </p>
                        <input
                          type="file"
                          ref={fileRef}
                          style={{ display: 'none' }}
                          onChange={handleImageChange}
                        />
                        <Plus />
                      </div>
                    )}
                  </div>
                </div>

                <div
                // className={styles['rightInput']}
                >
                  {baseInfo.slice(3, 5).map((el, i) => (
                    <BlockInput
                      handleChange={handleChange}
                      type={el.type}
                      id={el.name}
                      width={el.width}
                      title={el.title}
                      key={i}
                    />
                  ))}

                  {selectInfo.map((el, i) => (
                    <BlockSelect
                      handleChange={handleChange}
                      title={el.title}
                      id={el.name}
                      width={el.width}
                      date={el.date}
                      key={i}
                    />
                  ))}

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      margin: '20px 0',
                    }}
                    onClick={addEducation}
                  >
                    <Plus />
                    <label>Добавить образование</label>
                  </div>
                </div>

                <div style={{ marginBottom: '26px' }}>
                  {baseInfo.slice(7, 9).map((el, i) => (
                    <BlockInput
                      handleChange={handleChange}
                      type={el.type}
                      id={el.name}
                      width={el.width}
                      title={el.title}
                      key={i}
                    />
                  ))}
                </div>

                <h3>Ключевые навыки</h3>
                <div
                // style={{display: 'flex', flexDirection: 'column', textAlign: 'left'}}
                >
                  {baseInfo.slice(11, 13).map((el, i) => (
                    <BlockSelect
                      handleChange={handleChange}
                      title={el.title}
                      id={el.name}
                      date={el.date}
                      width={el.width}
                      marginTop={0}
                      key={i}
                    />
                  ))}
                </div>
              </div>

              <div className={styles['rightColumn']}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'left',
                    marginBottom: '12px',
                  }}
                >
                  {baseInfo.slice(0, 3).map((el, i) => (
                    <BlockInput
                      handleChange={handleChange}
                      type={el.type}
                      id={el.name}
                      width={el.width}
                      title={el.title}
                      key={i}
                    />
                  ))}
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'left',
                  }}
                >
                  <label>Пол</label>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      width: '401px',
                    }}
                  >
                    <button
                      type={'button'}
                      className={`${dataResume.gender === 'male' ? styles['selectedGender'] : null}`}
                      onClick={() =>
                        setDataResume({ ...dataResume, gender: 'male' })
                      }
                    >
                      Мужской
                    </button>
                    <button
                      type={'button'}
                      className={`${dataResume.gender === 'female' ? styles['selectedGender'] : null}`}
                      onClick={() =>
                        setDataResume({ ...dataResume, gender: 'female' })
                      }
                    >
                      Женский
                    </button>
                  </div>

                  {baseInfo.slice(5, 7).map((el, i) => (
                    <BlockInput
                      handleChange={handleChange}
                      type={el.type}
                      id={el.name}
                      width={el.width}
                      title={el.title}
                      key={i}
                    />
                  ))}

                  <div style={{ marginBottom: '98px' }}>
                    {vyz.map((el, i) => (
                      <BlockInput
                        handleChange={handleChange}
                        type={el.type}
                        id={el.name}
                        width={el.width}
                        title={el.title}
                        key={i}
                      />
                    ))}
                  </div>
                </div>

                <div
                // style={{marginBottom: '66px'}}
                >
                  {baseInfo.slice(9, 11).map((el, i) => (
                    <BlockInput
                      handleChange={handleChange}
                      type={el.type}
                      id={el.name}
                      width={el.width}
                      title={el.title}
                      key={i}
                    />
                  ))}
                </div>

                <div
                // style={{display: 'flex', flexDirection: 'column', textAlign: 'left', marginTop: '60px'}}
                >
                  <div style={{ marginTop: '60px' }}>
                    {baseInfo.slice(13, 17).map((el, i) => (
                      <BlockSelect
                        handleChange={handleChange}
                        title={el.title}
                        id={el.name}
                        width={el.width}
                        date={el.date}
                        key={i}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/*<div className={styles['block']} >*/}
            {/*</div>*/}

            {/*<div style={{display: "flex", justifyContent: 'space-around', marginTop: '50px'}}></div>*/}

            {/*<div style={{display: "flex", justifyContent: 'center', marginTop: '50px', gap: '150px'}}></div>*/}

            {/*////////////////////*/}

            <label style={{ margin: '15px 0 4px 0' }}>Навыки</label>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <input
                name={'skills'}
                onChange={handleChange}
                onBlur={onBlurSkills}
                onClick={onClickSkills}
                className={styles['inputSkills']}
                type="text"
                placeholder={placeholderSkills}
              />
            </div>

            <h3 style={{ margin: '20px 0' }}>Опыт работы</h3>

            {work.map((el) => el)}

            {/*<WorkExperience/>*/}

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
                justifyItems: 'center',
                alignItems: 'center',
                marginTop: '20px',
              }}
              onClick={addWorkExperience}
            >
              <Plus />
              <label>Добавить опыт работы</label>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '103px',
              }}
            >
              <button
                onClick={handleSubmit}
                className={styles['btnSubmit']}
                type={'button'}
              >
                Сохранить
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Anketa;
