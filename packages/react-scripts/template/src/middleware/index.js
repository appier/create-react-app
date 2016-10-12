import thunk from 'redux-thunk';

const middlerwares = [thunk];

if (process.env.NODE_ENV === 'development') {
  const createLogger = require('redux-logger');
  const logger = createLogger({ collapsed: true });

  middlerwares.push(logger);
}

export default middlerwares;
