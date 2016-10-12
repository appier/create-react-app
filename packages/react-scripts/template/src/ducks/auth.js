import { createDuck } from 'redux-duck';
import { fromJS } from 'immutable';

/**
 * Duck
 */
const auth = createDuck('auth', 'app-name');

/**
 * Action types
 */
const LOAD = auth.defineType('LOAD');

const LOGIN = auth.defineType('LOGIN');
const LOGIN_SUCCESS = auth.defineType('LOGIN_SUCCESS');
const LOGIN_FAIL = auth.defineType('LOGIN_FAIL');

const LOGOUT = auth.defineType('LOGOUT');
const LOGOUT_SUCCESS = auth.defineType('LOGOUT_SUCCESS');
const LOGOUT_FAIL = auth.defineType('LOGOUT_FAIL');

/**
 * Action creators
 */
export const load = auth.createAction(LOAD);
export const login = () => dispatch => {
  dispatch(auth.createAction(LOGIN)());

  setTimeout(() => {
    if (Math.random() > 0.5) {
      dispatch(auth.createAction(LOGIN_SUCCESS)());
    } else {
      dispatch(auth.createAction(LOGIN_FAIL)());
    }
  }, 1000);
};
export const logout = () => dispatch => {
  dispatch(auth.createAction(LOGOUT)());

  setTimeout(() => {
    if (Math.random() > 0.5) {
      dispatch(auth.createAction(LOGOUT_SUCCESS)());
    } else {
      dispatch(auth.createAction(LOGOUT_FAIL)());
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

const reducer = auth.createReducer({
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
