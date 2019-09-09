import { Reducer } from 'redux';
import { AxiosError } from 'axios';

import { GithubAction } from '../../actions/github';
import * as ActionType from '../../actions/githubConstants';
import { Repo } from '../../services/github/models';

export type GithubState = {
  repos: Repo[];
  isLoading: boolean;
  error?: AxiosError | null;
};

export const initialState = (injects?: GithubState) => ({
  repos: [],
  isLoading: false,
  ...injects,
});

export const reducer: Reducer<GithubState, GithubAction> = (
  state: GithubState = initialState(),
  action: GithubAction,
): GithubState => {
  switch (action.type) {
    case ActionType.GET_REPOS_START:
      return {
        ...state,
        repos: [],
        isLoading: true,
      };
    case ActionType.GET_REPOS_SUCCEED:
      return {
        ...state,
        repos: action.payload.result.repos,
        isLoading: false,
      };
    case ActionType.GET_REPOS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    default:
      // eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unused-vars
      const _: never = action;

      return state;
  }
};
