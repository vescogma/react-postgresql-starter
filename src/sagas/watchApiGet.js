import { takeLatest } from 'redux-saga';
import { put, call, select } from 'redux-saga/effects';

import { API } from 'actionTypes';
import * as dataActions from 'actions/data';
import { getShows } from 'api';

function* apiGetFlow() {
  try {
    yield put(dataActions.getPending());
    const response = yield call(getShows);
    yield put(dataActions.getSuccess(response));
  } catch (err) {
    yield put(dataActions.getError(response));
  }
};

export default function* watchApiGet() {
  yield takeLatest(API.GET, apiGetFlow);
}
