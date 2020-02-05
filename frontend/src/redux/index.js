import { combineReducers } from "redux";
import authReducer from "./auth/reducer";

import { all } from 'redux-saga/effects';
import authSaga from './auth/sagas';

export const reducers = combineReducers({authReducer});

export function* rootSaga() {
  yield all([
    authSaga(),
  ]);
}
