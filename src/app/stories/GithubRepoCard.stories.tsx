import React from 'react';
import { storiesOf } from '@storybook/react';
import GithubRepoCard from '../components/GithubRepoCard';

const repo = {
  id: 175907444,
  node_id: 'MDEwOlJlcG9zaXRvcnkxNzU5MDc0NDQ=',
  name: 'portfolio',
  full_name: 'uitspitss/portfolio',
  private: false,
  html_url: 'https://github.com/uitspitss/portfolio',
  description: 'WIP',
  fork: false,
  url: 'https://api.github.com/repos/uitspitss/portfolio',
  created_at: '2019-03-16T00:20:11Z',
  updated_at: '2019-08-31T05:36:47Z',
  pushed_at: '2019-08-31T05:36:45Z',
  homepage: null,
  size: 9425,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'TypeScript',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 0,
};

storiesOf('Components', module).add('GithubRepoCard', () => (
  <GithubRepoCard repo={repo} />
));
