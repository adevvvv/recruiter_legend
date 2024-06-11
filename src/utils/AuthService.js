import api from '../http';

export default class AuthService {
  static async login(username, password) {
    return api.post('/auth/sign-in', { username, password });
  }

  static async registration({ username, email, password }) {
    return api.post('/sign-up', { username, email, password });
  }
}
