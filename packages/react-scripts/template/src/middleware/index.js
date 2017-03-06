import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { hashHistory } from 'react-router';

const router = routerMiddleware(hashHistory);
const middlerwares = [thunk, router];

export default middlerwares;
