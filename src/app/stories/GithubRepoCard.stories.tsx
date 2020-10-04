import React, { FC } from 'react';
import { Meta } from '@storybook/react';

import GithubRepoCard from '../components/GithubRepoCard';
import { Repo } from '../services/github/models';

const repo: Repo = {
  id: 175907444,
  node_id: 'MDEwOlJlcG9zaXRvcnkxNzU5MDc0NDQ=',
  name: 'portfolio',
  full_name: 'uitspitss/portfolio',
  html_url: 'https://github.com/uitspitss/portfolio',
  description: 'WIP',
  fork: false,
  url: 'https://api.github.com/repos/uitspitss/portfolio',
  created_at: '2019-03-16T00:20:11Z',
  updated_at: '2019-08-31T05:36:47Z',
  pushed_at: '2019-08-31T05:36:45Z',
  homepage: '',
  size: 9425,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'TypeScript',
  forks_count: 0,
  license: null,
};

export default {
  title: 'Components/GithubRepoCard',
  component: GithubRepoCard,
} as Meta;

export const WithData: FC = () => <GithubRepoCard repo={repo} />;
