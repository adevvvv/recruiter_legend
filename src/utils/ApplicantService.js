import api from '../http';

export default class ApplicantService {
  static async sendAnketa(dataResume) {
    return api.post('/resume', { dataResume });
  }
}
