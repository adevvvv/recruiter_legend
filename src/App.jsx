import './App.css';
import HomePage from './components/HomePage/HomePage.jsx';
import EnterForm from './components/Forms/EnterForm/EnterForm.jsx';
import { Route, Routes } from 'react-router-dom';
import Calendar from './components/Calendar/Calendar.jsx';
import ProfileApplicant from './components/ProfileApplicant/ProfileApplicant.jsx';
import BaseInfo from './components/ProfileApplicant/BaseInfo.jsx';
import Anketa from './components/Anketa/Anketa.jsx';
import Vacancy from './components/Vacancy/Vacancy.jsx';
import Resume from './components/ProfileApplicant/Resume.jsx';
import RegistrationForm from './components/Forms/RegistrationForm/RegistrationForm.jsx';
import ProfileRecruiter from './components/ProfileRecruiter/ProfileRecruiter.jsx';
import ResponseCard from './components/ProfileRecruiter/ResponseCard.jsx';
import Header from './components/Header/Header.jsx';
import { useState } from 'react';
import News from './components/News/News.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useContext } from 'react';
import Main from './components/Main/Main.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import { Context } from './main.jsx';
import { toJS } from 'mobx';

function App() {
  // false - не авторизован, applicant, recruiter
  const [isRole, setIsRole] = useState('applicant');
  const { store } = useContext(Context);
  // console.log(store.userData.role);

  const query = new QueryClient();
  console.log(toJS(store.userData));
  return (
    <>
      <QueryClientProvider client={query}>
        <Header isRole={isRole} setIsRole={setIsRole} />
        <Routes>
          {/* <Route path="/profile" element={<HomePage isRole={isRole}/>} /> */}
          <Route path="/profile" element={<PrivateRoute />} />
          <Route path="/" element={<Main />} />
          <Route path="/*" element={<Main />} />
          <Route path="/auth/login" element={<EnterForm />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/applicant" element={<ProfileApplicant />} />
          <Route path="/applicantinfo" element={<BaseInfo />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/anketa" element={<Anketa />} />
          <Route path="/recruiter" element={<ProfileRecruiter />} />
          <Route path="/responsecard" element={<ResponseCard />} />
          <Route path="/vacancy" element={<Vacancy isRole={isRole} />} />
          <Route path="/news" element={<News isRole={isRole} />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
