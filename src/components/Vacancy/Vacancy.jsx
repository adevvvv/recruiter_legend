import styles from './Vacancy.module.scss';
import CardVacancy from './CardVacancy/CardVacancy.jsx';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../main.jsx';
import { useQuery } from 'react-query';
import Spinner from '../Spinner/Spinner.jsx';

const Vacancy = () => {
  const { store } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [valueSearch, setValueSearch] = useState(null);
  const [vacancies, setVacancies] = useState([
    {
      title: 'Инженер по автоматизированному тестированию на Python',
      type: 'Тестирование',
      tasks:
        '[Проведение автоматизации тестирования web-приложений и API, Разработка новых, поддержка и доработка существующих автотестов, Участие в полном цикле тестирования нового функционала, и др.]',
    },
    {
      title: '.NET-разработчик',
      type: 'Разработка',
      tasks:
        '[Развитие, доработка и оптимизация высоконагруженных банковских систем, Разработка интеграционного взаимодействия микросервисов, Работа в кросс-функциональной команде по Scrum, и др.]',
    },
    {
      title: 'Бизнес-аналитик на проект для международного банка',
      type: 'Аналитика',
      tasks:
        '[Регуляторные доработки по платежам, а также анализ новых инструкций, выпускаемых различными регуляторами, Участие в миграционных активностях, Участие в проекте по локализации российского подразделения банка, и др.]',
    },
    {
      title: 'Key Account Manager',
      type: 'Менеджмент и развитие бизнеса',
      tasks:
        '[Ведение портфеля клиентов, Ответственность за взаимоотношения и удовлетворенность клиента, Развитие бизнеса с клиентами, продажи внутри и вне портфеля клиентов, и др.]',
    },
    {
      title: 'Lead Python-разработчик',
      type: 'Разработка',
      tasks:
        '[Участие в проектировании архитектуры систем, Серверная разработка приложений на Python3, Проектирование и реализация REST API, интеграция с внешними системами, и др.]',
    },
    {
      title: 'Системный аналитик (транспорт и логистика)',
      type: 'Аналитика',
      tasks:
        '[Выявление, описание и согласование требований к автоматизированным системам, включая проведение обследований с выездами на производственные объекты заказчиков и изучение имеющейся технической документации, Постановка задач на разработку ПО, связанных с выявленными и описанными требованиями, Подготовка материалов для дальнейшего включения в проектную, рабочую, отчетную документацию, и др.]',
    },
    {
      title: 'Java/Kotlin-разработчик',
      type: 'Разработка',
      tasks:
        '[Доработка сложносвязанных микросервисов (бизнес-логика, зависимости), Работа с BigData-технологиями, Активные коммуникации с командой по проекту, и др.]',
    },
    {
      title: 'Frontend-разработчик (vue.js)',
      type: 'Разработка',
      tasks:
        '[Разработка и поддержка функциональности приложений на стеке: Nuxt3, Vue3 Composition API, Создание и поддержка компонентов на основе дизайн-системы (Storybook), Участие в проработке технологического развития проекта: модульность, архитектура, рефакторинг, внедрение новых инструментов разработки, и др.]',
    },
    {
      title: 'Senior DevOps-инженер',
      type: 'Разработка',
      tasks:
        '[Настройка и поддержка CI/CD-процессов для страховой платформы, обеспечивая эффективное развертывание и тестирование проектов, Управление инфраструктурой с использованием инструментов Docker, Kubernetes и Cri-O, обеспечение масштабируемости и надежности системы, Разработка и оптимизация плейбуков Ansible для автоматизации деплоя проектов на серверы и в контейнеры, обеспечение надежной и быстрой поставки функциональности, и др.]',
    },
    {
      title: 'C/C++ разработчик',
      type: 'Разработка',
      tasks:
        '[Разработка программного обеспечения, сложных программных продуктов и ИТ-систем, Поиск и предложение инновационных решений сложных технических проблем с использованием творческого мышления, подходов системного анализа и здравого смысла, Разработка и применение новых теорий и концепций, и др.]',
    },
    {
      title: 'Системный аналитик',
      type: 'Аналитика',
      tasks:
        '[Сбор, формализация и управление требованиями на разработку ПО, Взаимодействие с разработчиками, постановка задач, Визуализация в форме диаграмм, Разработка рабочей документации, и др.]',
    },
    {
      title: 'C++ разработчик',
      type: 'Разработка',
      tasks:
        '[Разработка и написание кода на С++, включая реализацию сложных алгоритмов и логики, Участие в разработке архитектурных и инфраструктурных решений, Взаимодействие с командами разработки, аналитики и тестирования, Написание unit- и регрессионных тестов, а также участие в code-review, и др.]',
    },
    {
      title: 'Инженер по тестированию ПО',
      type: 'Тестирование',
      tasks:
        '[Тестирование программного обеспечения, Подготовка тест-планов и тест-кейсов, Участие в планировании проекта, обсуждении новой функциональности, Работа в команде, взаимодействие с разработчиками и аналитиками, и др.]',
    },
    {
      title: 'Ведущий системный аналитик',
      type: 'Аналитика',
      tasks:
        '[Работа с требованиями по автоматизации бизнес-процессов, Разработка прототипов, моделей и алгоритмов проектируемых решений, Взаимодействие с заказчиками и разработчиками, Анализ текущего состояния бизнес-процессов и подготовка предложений по оптимизации существующих бизнес-процессов, и др.]',
    },
    {
      title: 'Архитектор решений (Pre-sale для компаний в финансовом секторе)',
      type: 'Менеджмент и развитие бизнеса',
      tasks:
        '[Разработка решения в рамках pre-sale для банков, Запуск новых проектов, и др.]',
    },
    {
      title: 'Full-stack разработчик (.NET, JS)',
      type: 'Разработка',
      tasks:
        '[Адаптация решения клиента для конкретных страховых компаний, Разработка пользовательских интерфейсов, Разработка внутренних бизнес-процессов системы (серверный JS на Microsoft.ClearScript), Стабилизация разработанного функционала, и др.]',
    },
    {
      title: 'Data Science-специалист',
      type: 'Data-практика',
      tasks:
        '[Разработка систем с использованием машинного обучения, Формирование требований к данным для разработки моделей, Проведение анализа предметной области с целью повышения качества моделей и формирования предложений по достижению целей проектов и продуктов больших данных, Разработка архитектуры систем, использующих машинное обучение, и др.]',
    },
    {
      title: 'Java-разработчик',
      type: 'Разработка',
      tasks:
        '[Разработка и поддержка высокопроизводительных Java-приложений, Интеграция с внешними системами и разработка API, Проведение код-ревью, Тестирование и отладка приложений, и др.]',
    },
    {
      title: 'Менеджер проектов',
      type: 'Менеджмент и развитие бизнеса',
      tasks:
        '[Активное участие во всех фазах проекта, Управление проектными командами: приоритизация задач, контроль срока их выполнения и соответствия ожидаемому результату, Участие в пресейлах/апсейлах и переговорах с новыми клиентами, и др.]',
    },
    {
      title: 'Архитектор решений',
      type: 'Архитектура',
      tasks:
        '[Участие в реализации масштабных решений в составе проектной команды, Участие в разработке дизайна архитектуры для проектов, Аудит существующих архитектурных решений, идентификация ограничений и рисков, Консультирование команд разработки по вопросам архитектуры, масштабирования, предоставление рекомендаций по оптимизации, и др.]',
    },
  ]);

  const { data, status } = useQuery(['getVacancies'], () =>
    store.getVacancies(),
  );

  useEffect(() => {
    if (data) {
      setVacancies(data);
    }
  }, [data]);

  if (status === 'loading') {
    return <Spinner />;
  }

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
    'За сутки',
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
      ],
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
      ],
    },
    {
      title: 'Тип занятости',
      date: [
        'Полная занятость',
        'Частичная занятость',
        'Стажировка',
        'Проектная работа',
      ],
    },
    {
      title: 'График работы',
      date: [
        'Полный день',
        'Сменный график',
        'Гибкий график',
        'Удаленная работа',
      ],
    },
  ];

  // const [valueSearch, setValueSearch] = useState(null);

  const handleChangeSearch = (e) => {
    const { value } = e.target;
    setValueSearch(value);
  };

  const handleClickSearch = () => {
    const filterVacancies = vacancies.filter((el) =>
      el.title.toLowerCase().includes(valueSearch.toLowerCase()),
    );
    setVacancies(filterVacancies);
  };

  const onClickReset = () => {
    (async () => {
      setLoading(true);
      const response = await store.getVacancies();
      if (response) {
        setVacancies(response);
      }
      setLoading(false);
    })();
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className={styles['container']}>
        <div className={styles['search']}>
          <input
            style={{ paddingLeft: '15px', color: 'white' }}
            onChange={handleChangeSearch}
            type={'search'}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M12.6004 1.79688C6.97304 1.79688 2.40039 6.36953 2.40039 11.9969C2.40039 17.6242 6.97304 22.1969 12.6004 22.1969C14.827 22.1969 16.8848 21.4797 18.5629 20.2656L26.4566 28.1406L28.1441 26.4531L20.3441 18.6344C21.877 16.8484 22.8004 14.5305 22.8004 11.9969C22.8004 6.36953 18.2277 1.79688 12.6004 1.79688ZM12.6004 2.99688C17.5785 2.99688 21.6004 7.01875 21.6004 11.9969C21.6004 16.975 17.5785 20.9969 12.6004 20.9969C7.62227 20.9969 3.60039 16.975 3.60039 11.9969C3.60039 7.01875 7.62227 2.99688 12.6004 2.99688Z"
              fill="white"
            />
          </svg>
          <button onClick={handleClickSearch}>Найти</button>
          <button onClick={onClickReset}>Сброс</button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '41px' }}>
            <select name="sort" id="sort">
              {sort.map((el, i) => (
                <option key={i} value={el}>
                  {el}
                </option>
              ))}
            </select>

            <select name="filter" id="filter">
              {filter.map((el, i) => (
                <option key={i} value={el}>
                  {el}
                </option>
              ))}
            </select>
          </div>

          {store.userData.role === 'ROLE_RECRUITER' ? (
            <div className={styles['addVacancies']}>Добавить вакансию</div>
          ) : null}
        </div>

        <div style={{ display: 'flex', marginTop: '30px', gap: '62px' }}>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
          >
            {checkbox.map((el, i) => {
              return (
                <div key={i} className={styles['filter']}>
                  <p>{el.title}</p>
                  {el.date.map((variant, i) => {
                    return (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          justifyContent: 'left',
                          gap: '5px',
                          minWidth: '220px',
                          textAlign: 'left',
                        }}
                      >
                        <input id={variant} name={el.title} type="radio" />
                        <label htmlFor={variant}>{variant}</label>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>

          <div
            style={{ display: 'flex', gap: '50px', flexDirection: 'column' }}
          >
            {vacancies.map((el, i) => (
              <div key={i}>
                <CardVacancy title={el.title} type={el.type} tasks={el.tasks} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacancy;
