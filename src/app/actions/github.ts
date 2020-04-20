import { AnyAction } from 'redux';
import { AxiosError } from 'axios';

import { Repo } from '../services/github/models';
import * as ActionType from './githubConstants';

interface GetReposParams {
  userName: string;
}
interface GetReposResult {
  repos: Repo[];
}

export const getRepos = {
  start: (params: GetReposParams) => ({
    type: ActionType.GET_REPOS_START,
    payload: params,
  }),

  succeed: (params: GetReposParams, result: GetReposResult) => ({
    type: ActionType.GET_REPOS_SUCCEED,
    payload: { params, result },
  }),

  fail: (params: GetReposParams, error: AxiosError) => ({
    type: ActionType.GET_REPOS_FAIL,
    payload: { params, error },
    error: true,
  }),
};

export type GithubAction =
  | AnyAction
  | ReturnType<typeof getRepos.start>
  | ReturnType<typeof getRepos.succeed>
  | ReturnType<typeof getRepos.fail>;
