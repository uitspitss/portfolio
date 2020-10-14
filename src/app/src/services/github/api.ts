import axios from 'axios';

import { Repo } from './models';

type ApiConfig = {
  baseURL: string;
  timeout: number;
};

const DEFAULT_API_CONFIG: ApiConfig = {
  baseURL: 'https://api.github.com',
  timeout: 7000,
};

// eslint-disable-next-line import/prefer-default-export
export const getReposFactory = (optionConfig?: ApiConfig) => {
  const config = {
    ...DEFAULT_API_CONFIG,
    ...optionConfig,
  };
  const instance = axios.create(config);

  const getRepos = async (userName: string) => {
    const response = await instance.get(`/users/${userName}/repos`);

    if (response.status !== 200) {
      throw new Error('Server Error');
    }
    const repos: Repo[] = response.data;

    return repos;
  };

  return getRepos;
};
