import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { Repo } from '@/services/github/models';
import GithubRepoCard from './GithubRepoCard';

const useStyles = makeStyles(() =>
  createStyles({
    root: {},
  }),
);

export interface ReposProps {
  repos: Repo[];
  isLoading?: boolean;
}

const Repos: FC<ReposProps> = ({ repos }) => {
  const classes = useStyles({});

  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={9}>
        <Typography variant="h2" component="h1">
          My Repositories
        </Typography>
      </Grid>
      <Grid item xs={9}>
        <GridList>
          {repos &&
            repos.map((repo) => (
              <GithubRepoCard repo={repo} key={repo.node_id} />
            ))}
        </GridList>
      </Grid>
    </Grid>
  );
};

export default Repos;
