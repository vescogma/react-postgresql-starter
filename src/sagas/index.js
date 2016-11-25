import { fork } from 'redux-saga/effects';

const sagaList = [
];

function* rootSaga() {
  yield sagaList.map(saga => fork(saga));
}

export default rootSaga;
