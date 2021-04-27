import { asyncActionType } from './reduxActions';

export const FILTER_ACTIONS = {
  ADD_USER_BEGIN: 'ADD_USER_BEGIN',
  ADD_USER: asyncActionType('ADD_USER'),
};

export default {
  ...FILTER_ACTIONS,
};

export const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
