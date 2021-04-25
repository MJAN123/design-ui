import { put, all, takeEvery, call, select, delay } from 'redux-saga/effects';
import { api } from '../services/service';
import { userActions } from '../actions';
import ACTIONS from '../../utils/design.constant';
import { getUserName } from '../selectors/user.selectors';

export function* addUser({ user }) {
  try {
    yield put(userActions.addUser.pending());
    const selectedUser = yield select(getUserName);

    const response = yield call(api.addUser, user);

    yield put(userActions.addUser.success(response));
  } catch {
    yield put(userActions.addUser.error('Error'));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(ACTIONS.ADD_USER_BEGIN, addUser)]);
}
