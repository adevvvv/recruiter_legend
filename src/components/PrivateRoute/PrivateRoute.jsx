import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../main';
import HomePage from '../HomePage/HomePage';

const PrivateRoute = () => {
  const { store } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (store.userData.role === "") {
      console.log(store.userData.role);
      navigate("/");
    }
  }, [store.userData.role, navigate]);

  return <HomePage />;
};

export default PrivateRoute;