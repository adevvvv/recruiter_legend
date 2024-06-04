import styles from './Header.module.scss';


const Header = () => {

    return (
        <div className={styles['header']}>

            <div className={styles['blockNavigation']}>
                <div style={{marginRight:'90px'}}>LOGO</div>

                <a href="#">главная</a>
                <a href="#">вакансии</a>
                <a href="#">новости</a>
            </div>

            <a href="#">вход</a>
        </div>
    )
}

export default Header;
