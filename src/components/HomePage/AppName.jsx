
import styles from './HomePage.module.scss';


const AppName = () => {

    return (
        <div className={styles['blockTitle']}>
            <h1>название приложения</h1>
            <p>ваш идеальный помощник в <br/>
                поиске и найме it специалистов</p>
        </div>
    )
}

export default AppName;