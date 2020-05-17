import axios from 'axios';
class Http {
  static get(url) {
    return axios.get(url);
  }
}

export default Http;