import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

interface StyleProps {
  image: string;
  opacity?: number;
}

const useStyles = makeStyles({
  root: ({ image, opacity }: StyleProps) => ({
    height: '100vh',
    backgroundImage: `-webkit-linear-gradient(
            top,
            rgba(0, 0, 0, ${opacity}),
            rgba(0, 0, 0, ${opacity})
          ),
          url(${image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }),
});

type BackImageProps = {
  children: React.ReactNode;
} & StyleProps;

const BackImage: FC<BackImageProps> = ({
  children,
  image = 'static/cover.jpg',
  opacity = 0.5,
}) => {
  const classes = useStyles({ image, opacity });
  return (
    <Grid
      className={classes.root}
      container
      justify="center"
      alignItems="center"
    >
      {children}
    </Grid>
  );
};

export default BackImage;
