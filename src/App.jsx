// import {useState} from 'react'
import './App.css';
import HomePage from './components/HomePage/HomePage.jsx';
import EnterForm from './components/Forms/EnterForm/EnterForm.jsx';
import { Route, Routes } from 'react-router-dom';
import Calendar from './components/Calendar/Calendar.jsx';
import ProfileApplicant from './components/ProfileApplicant/ProfileApplicant.jsx';
import BaseInfo from './components/ProfileApplicant/BaseInfo.jsx';
import Anketa from "./components/Anketa/Anketa.jsx";
import Resume from './components/ProfileApplicant/Resume.jsx';
import RegistrationForm from './components/Forms/RegistrationForm/RegistrationForm.jsx';
import ProfileRecruiter from './components/ProfileRecruiter/ProfileRecruiter.jsx';

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path= "/auth/login" element ={ <EnterForm/>} />
                <Route path="/calendar" element={<Calendar/>} />
                <Route path="/applicant" element={<ProfileApplicant/>} />
                <Route path="/applicantinfo" element={<BaseInfo/>} />
                <Route path="/register" element={<RegistrationForm/>} />
                <Route path="/resume" element={<Resume/>} />
                <Route path="/anketa" element={<Anketa/>} />
                <Route path="/recruiter" element={<ProfileRecruiter/>} />
            </Routes>
        </>
    )
}

export default App;
