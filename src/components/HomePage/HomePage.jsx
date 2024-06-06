import Header from "../Header/Header.jsx";
import AppName from "./AppName.jsx";
import bottomImage from '../../assets/image/bottomImage.png';
import styles from './HomePage.module.scss';
import {useState} from "react";
import ProfileApplicant from "../ProfileApplicant/ProfileApplicant.jsx";


const HomePage = () => {

    // false - не авторизован, applicant, recruiter
    const [isRole, setIsRole] = useState('applicant');

    return (
        <div className={styles['container']}>
            <Header isRole={isRole}/>
            {
                !isRole ?
                    <div style={{alignSelf: "center"}}>
                        <AppName/>
                        <img alt={'bottomImage'} src={bottomImage}/>
                    </div>
                    :
                    isRole === 'applicant' ?
                        <ProfileApplicant/>
                        :
                        <div>
                            {/*    Профиль рекрутера*/}
                        </div>
            }



        </div>

    )
}

export default HomePage;
