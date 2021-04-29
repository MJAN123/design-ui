import ACTIONS from '../../utils/design.constant';

export const UserLogin = {
  pending: () => ({
    type: ACTIONS.USER_LOGIN.PENDING,
  }),
  success: (response) => ({
    type: ACTIONS.USER_LOGIN.SUCCESS,
    response,
  }),
  error: (response) => ({
    type: ACTIONS.USER_LOGIN.ERROR,
    response,
  }),
};

export const UserLoginBegin = () => ({
  type: ACTIONS.USER_LOGIN_BEGIN,
});

export const UserSignup = {
  pending: () => ({
    type: ACTIONS.USER_SIGNUP.PENDING,
  }),
  success: (response) => ({
    type: ACTIONS.USER_SIGNUP.SUCCESS,
    response,
  }),
  error: (response) => ({
    type: ACTIONS.USER_SIGNUP.ERROR,
    response,
  }),
};

export const UserSignupBegin = () => ({
  type: ACTIONS.USER_SIGNUP_BEGIN,
});

export const UserFormData = {
  pending: () => ({
    type: ACTIONS.USER_FORM_DATA.PENDING,
  }),
  success: (response) => ({
    type: ACTIONS.USER_FORM_DATA.SUCCESS,
    response,
  }),
  error: (response) => ({
    type: ACTIONS.USER_FORM_DATA.ERROR,
    response,
  }),
};

export const UserFormDataBegin = () => ({
  type: ACTIONS.USER_FORM_DATA_BEGIN,
});
