import api from '../http';

export default class NewsService {
  static async getNews() {
    return api.get('/news');
  }
}
