
import { makeAutoObservable } from 'mobx';
// import { createBrowserHistory } from 'history';
import AuthService from '../utils/AuthService';

// const history = createBrowserHistory();

export default class Store {
  


    userData = {
      name: '',
      id: '',
      email: ''
    };
  
    isAuth = false;
    isAnketaExist = false;

    constructor() {
        makeAutoObservable(this);
        console.log(this.isAuth);
        // this.history = history || createBrowserHistory();
    }
    
    
    setAuth(bool) {
        this.isAuth = bool;
    }

    static getAccessToken = () => {
        return localStorage.getItem('token');
    };

    setTokens({access}) {
        this.userData.access = access;
        localStorage.setItem('token', access);
    }
    

    async login(email, password) {
        try {
          const response = await AuthService.login(email, password);
          this.setAuth(true);
        //   this.setTokens({refresh:response.data.refresh, access:response.data.access}); 
          this.setTokens({access:response.data.token});
        //   await this.checkPersoncardExist();
          console.log(response);     
        //   this.whoami();
          if (!this.isAnketaExist) {
            return 'anketa is not exist';
          } else { 
            return 'anketa is exist';
          }
        } catch (error) {      
          console.log(error.response?.data?.message|| error.response?.data?.detail||error.response?.detail);
          return error.response.status;
        }
      }
    
    
}  