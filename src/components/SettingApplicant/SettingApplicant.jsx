import styles from './SettingApplicant.module.scss';

const SettingApplicant = ({setIsRole}) => {

    const menu = [
        {
            title: 'Чаты и отклики',
            navigate: '',
        },
        {
            title: 'Настройки',
            navigate: '',
        },
        {
            title: 'Помощь',
            navigate: '',
        },
        {
            title: 'Выход',
            navigate: 'exit',
        }
    ];

    const onNavigate = (navigate) => {
        if (navigate === 'exit') {
            setIsRole(false);
        }
    }

    return (
        <div className={styles['container']}>

            {
                menu.map((el, i) => {
                    return (
                        <div>
                            <button onClick={() => onNavigate(el.navigate)}>{el.title}</button>
                            <br/>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default SettingApplicant;
