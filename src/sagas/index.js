import { fork } from 'redux-saga/effects';
import watchApiGet from 'sagas/watchApiGet';
const sagaList = [
  watchApiGet,
];

function* rootSaga() {
  yield sagaList.map(saga => fork(saga));
}

export default rootSaga;
