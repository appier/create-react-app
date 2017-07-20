import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import history from 'store/history';

const router = routerMiddleware(history);

export default [thunk, router];
