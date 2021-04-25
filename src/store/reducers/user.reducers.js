import { fromJS } from 'immutable';
import ACTIONS from '../../utils/design.constant';

// Making Store Immutable
const CURRENT_DRAFT_STATE = fromJS({
  user: 'Muhammad Jan',
});

export const userReducer = (state = CURRENT_DRAFT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.ADD_USER:
      return state.set('currentDraft', action.draft);

    default:
      return state;
  }
};
