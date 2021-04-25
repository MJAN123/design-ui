import ACTIONS from '../../utils/design.constant';

export const addUser = {
  pending: () => ({
    type: ACTIONS.GET_TOKEN.PENDING,
  }),
  success: (response) => ({
    type: ACTIONS.GET_TOKEN.SUCCESS,
    response,
  }),
  error: (response) => ({
    type: ACTIONS.GET_TOKEN.ERROR,
    response,
  }),
};

export const addUserBegin = () => ({
  type: ACTIONS.ADD_USER_BEGIN,
});
