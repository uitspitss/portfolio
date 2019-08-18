import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: '100vh',
      backgroundImage: 'url("/static/little-happy.jpg")',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
  }),
);

const Hero: FC = () => {
  const classes = useStyles({});

  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Typography variant="h1" color="textPrimary">
        uitspitss's portfolio
      </Typography>
    </Grid>
  );
};

export default Hero;
