import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './sagas';
import { reducers } from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const createSaga = createSagaMiddleware();
const middleware = [thunk, createSaga];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);
createSaga.run(rootSaga);

export default store;
