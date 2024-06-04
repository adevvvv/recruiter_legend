// import {useState} from 'react'
import './App.css'
import HomePage from "./components/HomePage/HomePage.jsx";
import EnterForm from "./components/Forms/EnterForm/EnterForm.jsx";
import { Route, Routes } from 'react-router-dom';

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path= "/auth/login" element ={ <EnterForm/>} />
            </Routes>  
        </>
    )
}

export default App
