import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Hero: FC<{}> = () => (
  <div id="hero">
    <Grid
      className="hero-container"
      container
      justify="center"
      alignItems="center"
    >
      <Typography variant="h1" color="primary">
        uitspitss's portfolio
      </Typography>
    </Grid>
    <style jsx>{`
      :global(.hero-container) {
        height: 100vh;
        background-image: url('/static/little-happy.jpg');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      }
    `}</style>
  </div>
);

export default Hero;
