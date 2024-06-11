import { makeAutoObservable } from 'mobx';
// import { createBrowserHistory } from 'history';
import AuthService from '../utils/AuthService';
import axios from 'axios';
import { API_URL } from '../http';

// const history = createBrowserHistory();

export default class Store {
  userData = {
    username: '',
    id: '',
    email: '',
    role: '',
  };

  isAuth = false;
  isAnketaExist = false;
  errorRegistration = '';

  constructor() {
    makeAutoObservable(this);
    console.log(this.isAuth);
    // this.history = history || createBrowserHistory();
  }

  setAuth(bool) {
    this.isAuth = bool;
  }

  setUser({ username, id, email, role }) {
    this.userData = { ...this.userData, username, id, email, role };
  }

  static getAccessToken = () => {
    return localStorage.getItem('token');
  };

  setTokens({ access }) {
    this.userData.access = access;
    localStorage.setItem('token', access);
  }

  async login(email, password) {
    try {
      const response = await AuthService.login(email, password);
      this.setAuth(true);
      //   this.setTokens({refresh:response.data.refresh, access:response.data.access});
      this.setTokens({ access: response.data.token });
      this.setUser({ role: response.data.role });
      //   await this.checkPersoncardExist();
      console.log(response);
      //   this.whoami();
      if (!this.isAnketaExist) {
        return 'anketa is not exist';
      } else {
        return 'anketa is exist';
      }
    } catch (error) {
      console.log(
        error.response?.data?.message ||
          error.response?.data?.detail ||
          error.response?.detail,
      );
      return error.response.status;
    }
  }

  async registration({name, email, password}) {
    try {
      console.log(name,email),password;
      const response = await axios.post(API_URL+'/sign-up', {name, email, password}, {
        'Content-Type': 'application/json'
      }); 
      localStorage.setItem('token', response.data.token);
      console.log(response);
      this.setAuth(true);
      this.setUser({name:response.data.name, email:response.data.email, role:response.data.role});      
      return true;
    } catch (e) {
      this.errorRegistration = JSON.parse(e.response?.request?.responseText).email[0] || JSON.parse(e.response?.request?.responseText).password[0] || JSON.parse(e.response?.request?.responseText).name[0];
      console.log(this.errorRegistration);
      
      // console.log(e.response?.data?.message|| e.response?.data?.detail||e.response?.request?.responseText|| e);
    }
  }


  async logout() {
    localStorage.removeItem('token');
    localStorage.clear();
    this.setAuth(false);
    this.setUser({});
    this.setTokens({});
  }
}
