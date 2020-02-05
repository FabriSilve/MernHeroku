import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import { reducers, rootSaga } from './redux';

import GlobalStyle from './globalStyles';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);


ReactDOM.render(
  <Provider store={store}>
      <GlobalStyle />
      <AppRouter />
  </Provider>
, document.getElementById('root'));
