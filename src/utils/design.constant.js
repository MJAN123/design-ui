import { asyncActionType } from './reduxActions';

export const FILTER_ACTIONS = {
  ADD_USER_BEGIN: 'ADD_USER_BEGIN',
  ADD_USER: asyncActionType('ADD_USER'),
};

export default {
  ...FILTER_ACTIONS,
};
