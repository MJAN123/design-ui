import { List, fromJS } from 'immutable';
import createSelector from '../../utils/reselect';

export const getApplication = (state) => {
  const { application } = state;
  return application || List();
};

export const getIsDrawer = createSelector(getApplication, (data) => {
  return data.get('isDrawer');
});
export const getIsOpenSetting = createSelector(getApplication, (data) => {
  return data.get('openSetting');
});
