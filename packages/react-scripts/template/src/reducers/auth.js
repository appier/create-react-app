import { createDuck } from 'redux-duck';
import { fromJS } from 'immutable';

/**
 * Duck
 */
const duck = createDuck('auth', 'app-name');

/**
 * Action types
 */
const LOAD = duck.defineType('LOAD');

const LOGIN = duck.defineType('LOGIN');
const LOGIN_SUCCESS = duck.defineType('LOGIN_SUCCESS');
const LOGIN_FAIL = duck.defineType('LOGIN_FAIL');

const LOGOUT = duck.defineType('LOGOUT');
const LOGOUT_SUCCESS = duck.defineType('LOGOUT_SUCCESS');
const LOGOUT_FAIL = duck.defineType('LOGOUT_FAIL');

/**
 * Action creators
 */
export const load = duck.createAction(LOAD);
export const login = () => dispatch => {
  dispatch(duck.createAction(LOGIN)());

  setTimeout(() => {
    if (Math.random() > 0.5) {
      dispatch(duck.createAction(LOGIN_SUCCESS)());
    } else {
      dispatch(duck.createAction(LOGIN_FAIL)());
    }
  }, 1000);
};
export const logout = () => dispatch => {
  dispatch(duck.createAction(LOGOUT)());

  setTimeout(() => {
    if (Math.random() > 0.5) {
      dispatch(duck.createAction(LOGOUT_SUCCESS)());
    } else {
      dispatch(duck.createAction(LOGOUT_FAIL)());
    }
  }, 1000);
};

/**
 * Reducer
 */
const initialState = fromJS({
  loaded: false,
  loading: false,
});

const reducer = duck.createReducer({
  [LOAD]: (state, action) => {
    return state
      .set('loaded', false)
      .set('loading', true)
  },

  [LOGIN]: (state, action) => {
    return state
      .set('loaded', false)
      .set('loading', true)
  },

  [LOGIN_SUCCESS]: (state, action) => {
    return state
      .set('loaded', true)
      .set('loading', false);
  },

  [LOGIN_FAIL]: (state, action) => {
    return state
      .set('loaded', true)
      .set('loading', false);
  },

  [LOGOUT]: (state, action) => {
    return state
      .set('loaded', false)
      .set('loading', true)
  },

  [LOGOUT_SUCCESS]: (state, action) => {
    return state
      .set('loaded', true)
      .set('loading', false);
  },

  [LOGOUT_FAIL]: (state, action) => {
    return state
      .set('loaded', true)
      .set('loading', false);
  },
}, initialState);

export default reducer;
