import { takeEvery, all, put, call, select } from 'redux-saga/effects';
import {
  types,
  loginRequestSuccess,
  loginRequestFailure,
} from './actions';
import { loginRequest } from '../../api';

const loginSelector = state => state.auth;

export function* loginRequestSaga() {
  try {
    const data = select(loginSelector);
    yield call(loginRequest, data);
    yield put(loginRequestSuccess());
  } catch (e) {
    console.log('SAGA', e);
    yield put(loginRequestFailure());
  }
}

export default function* authSaga() {
  yield all([
    takeEvery(types.LOGIN_REQUEST, loginRequestSaga),
  ]);
}
