import { List, fromJS } from 'immutable';
import createSelector from '../../utils/reselect';

export const getUser = (state) => {
  const { userReducer } = state;
  return userReducer || List();
};

export const getUserName = createSelector(getUser, (data) => {
  return data.get('user');
});
