import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import bgImg from '../public/images/cover.jpg';

interface StyleProps {
  image: any;
  opacity?: number;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: ({ image, opacity }: StyleProps) => ({
      minHeight: 'max(100vh, 100%)',
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
  }),
);

const BackImage: FC<StyleProps> = ({
  children,
  image = bgImg,
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
