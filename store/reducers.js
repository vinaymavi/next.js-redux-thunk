import { combineReducers } from 'redux'
import * as types from './types'

// COUNTER REDUCER
const counterReducer = (state = 0, { type }) => {
  switch (type) {
    case types.INCREMENT:
      return state + 1
    case types.DECREMENT:
      return state - 1
    case types.RESET:
      return 0
    default:
      return state
  }
}

// INITIAL TIMER STATE
const initialTimerState = {
  lastUpdate: 0,
  light: false,
}

// TIMER REDUCER
const timerReducer = (state = initialTimerState, { type, payload }) => {
  switch (type) {
    case types.TICK:
      return {
        lastUpdate: payload.ts,
        light: !!payload.light,
      }
    default:
      return state
  }
}

const GITHUB_INITIAL_STATE = {
  user: {},
  err: {},
  repocount: 0,
  repolist: [],
  repodetail: {}
}
// Github reducer 
const githubReducer = (state = GITHUB_INITIAL_STATE, { type, payload }) => {
  // TODO: typ check required
  return Object.assign({},{...state},{...payload});
}
// COMBINED REDUCERS
const reducers = {
  counter: counterReducer,
  timer: timerReducer,
  github: githubReducer
}

export default combineReducers(reducers)
