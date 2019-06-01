import React, { FC } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles, WithStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => ({
  root: {
    width: '60vw',
    padding: '20px 10px',
    background: 'rgba(255, 255, 255, 0.9)',
    [theme.breakpoints.down('sm')]: {
      width: '80vw',
      marginLeft: '20vw'
    },
  }
});

interface FloatingPaperProps {
  children: React.Node;
}

const FloatingPaper: FC<WithStyles & FloatingPaperProps> = ({ classes, children }) => (
  <React.Fragment>
    <Paper className={classes.root}>{children}</Paper>
  </React.Fragment>
);

export default withStyles(styles, { withTheme: true })(FloatingPaper);
