// import {useState} from 'react'
import './App.css'
import HomePage from "./components/HomePage/HomePage.jsx";
import EnterForm from "./components/Forms/EnterForm/EnterForm.jsx";
import { Route, Routes } from 'react-router-dom';
import Calendar from "./components/Calendar/Calendar.jsx";
import ProfileApplicant from './components/ProfileApplicant/ProfileApplicant.jsx';
import BaseInfo from './components/ProfileApplicant/BaseInfo.jsx';
import Anketa from "./components/Anketa/Anketa.jsx";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path= "/auth/login" element ={ <EnterForm/>} />
                <Route path="/calendar" element={<Calendar/>} />
                <Route path="/applicant" element={<ProfileApplicant/>} />
                <Route path="/applicantinfo" element={<BaseInfo/>} />
                <Route path="/anketa" element={<Anketa/>} />
            </Routes>
        </>
    )
}

export default App
