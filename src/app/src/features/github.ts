import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Repo } from '@/services/github/models';
import { getReposFactory } from '@/services/github/api';

type GetReposParams = {
  userName: string;
}
type GetReposResult = {
  repos: Repo[];
}

export type GithubState = {
  repos: Repo[];
  isLoading: boolean;
};

const initialState: GithubState = {
  repos: [],
  isLoading: false,
};

export const fetchRepos = createAsyncThunk<GetReposResult, GetReposParams>(
  'github/fetchRepos',
  async (arg): Promise<GetReposResult> => {
    try {
      const api = getReposFactory();
      const repos = await api(arg.userName);

      return { repos };
    } catch {
      throw new Error('fetch error');
    }
  },
);

export const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRepos.pending, (state) => ({ ...state, repos: [], isLoading: true }));
    builder.addCase(fetchRepos.fulfilled,
      (state, action) => ({ ...state, repos: action.payload.repos, isLoading: false }));
  },
});
