import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { VFXProvider, VFXImg } from 'react-vfx';
import bgImg from '@/public/images/bg_keyboard.jpg';
import kbdImg from '@/public/images/minidox.png';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: '100vh',
      backgroundImage: `url(${bgImg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    header: {
      padding: '50px',
    },
    image: {
      display: 'block',
      width: '60%',
      margin: 'auto',
    },
  }),
);

const Keyboard: FC = () => {
  const classes = useStyles({});

  return (
    <VFXProvider>
      <Grid
        container
        className={classes.root}
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Typography className={classes.header} variant="h2" align="center">
            My Favorite Keyboard
          </Typography>
          <Typography variant="h3" align="center">
            Minidox
          </Typography>
          <Typography variant="h6" align="center">
            <a
              href="https://github.com/That-Canadian/MiniDox_PCB"
              target="_blank"
              rel="noopener"
            >
              PCB designed by u/That-Canadian
            </a>
          </Typography>
          <VFXImg className={classes.image} src={kbdImg} shader="rainbow" />
        </Grid>
      </Grid>
    </VFXProvider>
  );
};

export default Keyboard;
