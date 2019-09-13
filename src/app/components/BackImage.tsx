import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface StyleProps {
  image: string;
  opacity?: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: ({ image, opacity }: StyleProps) => ({
      minHeight: '100vh',
      backgroundImage: `-webkit-linear-gradient(
              top,
              rgba(0, 0, 0, ${opacity}),
              rgba(0, 0, 0, ${opacity})
            ),
            url(${image})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      // backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      [theme.breakpoints.down('md')]: {
        height: '100vh',
      },
    }),
  }),
);

const BackImage: FC<StyleProps> = ({
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
