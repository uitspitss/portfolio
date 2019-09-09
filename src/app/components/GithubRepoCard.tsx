import React, { FC } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import OpenInNew from '@material-ui/icons/OpenInNew';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { Repo } from '../services/github/models';

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      width: 500,
      margin: 20,
    },
  }),
);

type GithubRepoCardProps = {
  repo: Repo;
};

const GithubRepoCard: FC<GithubRepoCardProps> = ({ repo }) => {
  const classes = useStyles({});

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {repo.full_name}
        </Typography>
        <Typography component="p" color="textSecondary" noWrap={true}>
          {repo.description}
        </Typography>
        <Chip label={repo.language} color="primary" size="small" />
      </CardContent>
      <CardActions>
        <Button href={repo.html_url} target="_blank" rel="noreferrer noopener">
          kOpen In new tab <OpenInNew />
        </Button>
      </CardActions>
    </Card>
  );
};

export default GithubRepoCard;
