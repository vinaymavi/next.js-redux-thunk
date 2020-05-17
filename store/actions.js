import * as types from './types'
import Github from '../github';
// INITIALIZES CLOCK ON SERVER
export const serverRenderClock = isServer => dispatch =>
  dispatch({
    type: types.TICK,
    payload: { light: !isServer, ts: Date.now() },
  })

// INITIALIZES CLOCK ON CLIENT
export const startClock = () => dispatch =>
  setInterval(() => {
    dispatch({ type: types.TICK, payload: { light: true, ts: Date.now() } })
  }, 1000)

// INCREMENT COUNTER BY 1
export const incrementCount = () => ({ type: types.INCREMENT })

// DECREMENT COUNTER BY 1
export const decrementCount = () => ({ type: types.DECREMENT })

// RESET COUNTER
export const resetCount = () => ({ type: types.RESET })


export const githubUser = (username) => dispatch => {
  // API call
  Github.getGithubUser(username).then(resp => {
    dispatch({ type: types.GITHUB_USER, payload: { user: resp.data } });
  }).catch(err => {
    dispatch({ type: types.HTTP_ERROR, payload: { err } })
  });
};

export const repoCount = (username) => dispatch => {
  // API call
  Github.getRepoCount(username).then(resp => {
    dispatch({ type: types.REPO_COUNT, payload: { repocount: resp.data.length } });
  }).catch(err => {
    dispatch({ type: types.HTTP_ERROR, payload: { err } })
  });
}

export const repoList = (username) => dispatch => {
  // API call
  Github.getRepoList(username).then(resp => {
    dispatch({ type: types.REPO_LIST, payload: { repolist: resp.data } });
  }).catch(err => {
    dispatch({ type: types.HTTP_ERROR, payload: { err } })
  });
}

export const repoDetail = (username, reponame) => dispatch => {
  // API call
  Github.getRepoDetails(username, reponame).then(resp => {
    dispatch({ type: types.REPO_DETAIL, payload: { repodetail: resp.data } });
  }).catch(err => {
    dispatch({ type: types.HTTP_ERROR, payload: { err } })
  });
}