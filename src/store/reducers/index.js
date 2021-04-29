import { combineReducers } from 'redux';
import { userReducer } from './user.reducers';
import { applicationReducer } from './application.reducers';

export const reducers = combineReducers({
  userReducer: userReducer,
  application: applicationReducer,
});
