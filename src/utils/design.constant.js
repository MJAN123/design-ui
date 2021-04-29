import { asyncActionType } from './reduxActions';

export const FILTER_ACTIONS = {
  ADD_USER_BEGIN: 'ADD_USER_BEGIN',
  ADD_USER: asyncActionType('ADD_USER'),
  USER_LOGIN_BEGIN: 'USER_LOGIN_BEGIN',
  USER_LOGIN: asyncActionType('USER_LOGIN'),
  USER_SIGNUP_BEGIN: 'USER_SIGNUP_BEGIN',
  USER_SIGNUP: asyncActionType('USER_SIGNUP'),
  USER_FORM_DATA_BEGIN: 'USER_FORM_DATA_BEGIN',
  USER_FORM_DATA: asyncActionType('USER_FORM_DATA'),
  SET_OPEN_DRAWER: 'SET_OPEN_DRAWER',
  SET_OPEN_SETTING: 'SET_OPEN_SETTING',
};

export default {
  ...FILTER_ACTIONS,
};

export const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
