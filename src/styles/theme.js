import { createMuiTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
const breakpoints = createBreakpoints({});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0a920a',
    },
    secondary: {
      main: '#fff',
    },
    text: {
      primary: '#000',
      secondary: '#1c1c1c',
    },
    background: {
      default: '#1c1c1c',
    },
  },

  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiCircularProgress: {
      size: 24,
      [breakpoints.up('md')]: {
        size: 16,
      },
    },
  },

  typography: {
    fontFamily: 'Grandstander',
  },
});

export default theme;
