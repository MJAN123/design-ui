import { fromJS } from 'immutable';
import ACTIONS from '../../utils/design.constant';

// Making Store Immutable
const CURRENT_DRAFT_STATE = fromJS({
  isDrawer: false,
  openSetting: false,
});

export const applicationReducer = (state = CURRENT_DRAFT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.SET_OPEN_DRAWER:
      return state.set('isDrawer', action.state);
    case ACTIONS.SET_OPEN_SETTING:
      return state.set('openSetting', action.state);
    default:
      return state;
  }
};
