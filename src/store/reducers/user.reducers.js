import { fromJS } from 'immutable';
import ACTIONS from '../../utils/design.constant';

// Making Store Immutable
const CURRENT_DRAFT_STATE = fromJS({});

export const userReducer = (state = CURRENT_DRAFT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.USER_LOGIN.SUCCESS:
      return state.set('login', action.draft);
    case ACTIONS.USER_SIGNUP.SUCCESS:
      return state.set('Signup', action.draft);
    case ACTIONS.USER_FORM_DATA.SUCCESS:
      return state.set('Form-data', action.draft);

    default:
      return state;
  }
};
