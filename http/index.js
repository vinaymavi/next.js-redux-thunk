import axios from 'axios';
class Http {
  static get(url) {
    const auth =  {
      username: 'vinaymavi',
      password: '75606997c64b731ebb724b35cfd424449b37ffbe'
    }
    return axios.get(url,{auth});
  }
}

export default Http;