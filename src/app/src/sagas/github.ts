import { call, put, takeLatest } from 'redux-saga/effects';

import * as Action from '@/actions/githubConstants';
import { getRepos } from '@/actions/github';
import { getReposFactory } from '@/services/github/api';

function* runGetRepos(action: ReturnType<typeof getRepos.start>) {
  const { userName } = action.payload;

  try {
    const api = getReposFactory();
    const repos = yield call(api, userName);

    yield put(getRepos.succeed({ userName }, { repos }));
  } catch (error) {
    yield put(getRepos.fail({ userName }, error));
  }
}

export function* watchGetRepos() {
  yield takeLatest(Action.GET_REPOS_START, runGetRepos);
}
