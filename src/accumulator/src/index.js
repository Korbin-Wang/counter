import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import { counterDown } from './modules/counter/reducer';

import App from './views/App/App.jsx';

let middlewares;
if (process.env.NODE_ENV === 'prod') {
  middlewares = [];
} else {
  const logger = createLogger();
  middlewares = [logger];
}

const store = createStore(
  counterDown,
  applyMiddleware(...middlewares)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
