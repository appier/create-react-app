import { createDuck } from 'redux-duck';

/**
 * Duck
 */
const auth = createDuck('auth', 'app-name');

/**
 * Action types
 */
const LOAD = auth.defineType('LOAD');
const LOAD_SUCCESS = auth.defineType('LOAD_SUCCESS');
const LOAD_FAIL = auth.defineType('LOAD_FAIL');

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
export const login = auth.createAction(LOGIN);
export const logout = auth.createAction(LOGOUT);

/**
 * Reducer
 */
const initialState = {
  loaded: false,
  loading: false,
};

const reducer = auth.createReducer({
  [LOAD]: (state, action) => {
    return {
      ...state,
      loaded: false,
      loading: true,
    };
  },

  [LOAD_SUCCESS]: (state, action) => {
    return {
      ...state,
      loaded: true,
      loading: false,
    };
  },

  [LOAD_FAIL]: (state, action) => {
    return {
      ...state,
      loaded: true,
      loading: false,
    };
  },

  [LOGIN]: (state, action) => {
    return {
      ...state,
      loaded: false,
      loading: true,
    };
  },

  [LOGIN_SUCCESS]: (state, action) => {
    return {
      ...state,
      loaded: true,
      loading: false,
    };
  },

  [LOGIN_FAIL]: (state, action) => {
    return {
      ...state,
      loaded: true,
      loading: false,
    };
  },

  [LOGOUT]: (state, action) => {
    return {
      ...state,
      loaded: false,
      loading: true,
    };
  },

  [LOGOUT_SUCCESS]: (state, action) => {
    return {
      ...state,
      loaded: true,
      loading: false,
    };
  },

  [LOGOUT_FAIL]: (state, action) => {
    return {
      ...state,
      loaded: true,
      loading: false,
    };
  },
}, initialState);

export default reducer;
