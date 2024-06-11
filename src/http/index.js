import axios from 'axios';

export const API_URL = 'http://localhost:8080';

const api = axios.create({
  // withCredentials: true,
  baseURL: API_URL,
  'Content-Type': 'application/json',
});

//интерцепторы
api.interceptors.request.use((config) => {
  const accesToken = localStorage.getItem('token');
  if (accesToken) {
    config.headers['Authorization'] = `${accesToken}`;
  }

  return config;
});

// api.interceptors.response.use((config)=>{
//     return config;
//   }, async (error)=>{
//     const originalRequest = error.config;
//     if (error.response.status == 401 && error.config && !error.config._isRetry) {
//       originalRequest._isRetry = true;
//       try {
//         // const refresh = Cookies.get('refresh');
//         // const response = await axios.post(API_URL+'/jwt/refresh/', {refresh}, {
//         //   'Content-Type': 'application/json'
//         // });
//         localStorage.setItem('token', response.data.access);
//         return api.request(originalRequest);
//       } catch(e) {
//         console.log('не авторизован');
//       }
//     }
//     throw error;
//   });

export default api;
