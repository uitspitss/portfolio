import { all, fork } from 'redux-saga/effects';

import { watchGetRepos } from './github';

export default function* rootSaga() {
  yield all([fork(watchGetRepos)]);
}
