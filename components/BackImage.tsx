import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';

interface BackImageProps {
  children: React.ReactNode;
  image: string;
  opacity?: number;
}

const BackImage: FC<BackImageProps> = ({
  children,
  image = 'static/cover.jpg',
  opacity = 0.5,
}) => (
  <div id="backimage">
    <Grid
      className="backimage-container"
      container
      justify="center"
      alignItems="center"
    >
      {children}
    </Grid>
    <style jsx>{`
      :global(.backimage-container) {
        height: 100vh;
        background-image: -webkit-linear-gradient(
            top,
            rgba(0, 0, 0, ${opacity}),
            rgba(0, 0, 0, ${opacity})
          ),
          url(${image});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      }
    `}</style>
  </div>
);

export default BackImage;
