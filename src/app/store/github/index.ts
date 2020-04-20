import { Reducer, AnyAction } from 'redux';
import { AxiosError } from 'axios';

// import { GithubAction } from '../../actions/github';
import * as ActionType from '../../actions/githubConstants';
import { Repo } from '../../services/github/models';

export type GithubState = {
  repos: Repo[];
  isLoading: boolean;
  error?: AxiosError | null;
};

export const initialState = () => ({
  repos: [],
  isLoading: false,
});

// FIXME: AnyAction
export const reducer: Reducer<GithubState, AnyAction> = (
  state = initialState(),
  action,
) => {
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
      return state;
  }
};
