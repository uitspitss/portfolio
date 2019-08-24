import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '60vw',
      padding: '20px 10px',
      background: 'rgba(255, 255, 255, 0.9)',
      [theme.breakpoints.down('xs')]: {
        width: '100vw',
      },
    },
  }),
);

const FloatingPaper: React.FC = ({ children }) => {
  const classes = useStyles({});
  return <Paper className={classes.root}>{children}</Paper>;
};

export default FloatingPaper;
