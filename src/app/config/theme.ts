import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6bb0ba',
    },
    secondary: {
      main: '#db915f',
    },
    error: {
      main: '#e56363',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
