import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

interface HeroProps {
  heroImageUrl?: string;
}

const Hero: React.FC<HeroProps> = ({
  heroImageUrl = 'https://loremflickr.com/800/600',
}) => (
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
        height: 90vh;
        background-image: url(${heroImageUrl});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      }
    `}</style>
  </div>
);

export default Hero;
