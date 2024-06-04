import Header from "../Header/Header.jsx";
import AppName from "./AppName.jsx";
import bottomImage from '../../assets/image/bottomImage.png';
import styles from './HomePage.module.scss';


const HomePage = () => {

    return (
        <div className={styles['container']}>
            <Header/>
            <div style={{alignSelf:"center"}}>
                <AppName/>
            </div>

            <img alt={'bottomImage'} src={bottomImage}/>
        </div>

    )
}

export default HomePage;
