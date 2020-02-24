import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import bgImg from '../public/images/little-happy.jpg';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: '100vh',
      backgroundImage: `url(${bgImg})`,
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
      <Grid item>
        <Typography variant="h1" align="center" color="primary">
          uitspitss&#39;s portfolio
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Hero;
