import api from '../http';

export default class Vacancies {
  static async getVacancies() {
    return api.get('/vacancies');
  }
}
