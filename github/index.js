import Http from '../http';
class Github {
  static getGithubUser(username = 'vinaymavi') {
    const url = `https://api.github.com/users/${username}`;
    return Http.get(url);
  }
  static getRepoCount(username = 'vinaymavi') {
    const url = `https://api.github.com/users/${username}/repos`;
    return Http.get(url);
  }

  static getRepoList(username = 'vinaymavi') {
    const url = `https://api.github.com/users/${username}/repos`;
    return Http.get(url);
  }

  static getRepoDetails(username = 'vinaymavi', reponame = 'next.js-redux-thunk') {
    const url = `https://api.github.com/repos/${username}/${reponame}`;
    return Http.get(url);
  }
}


export default Github;