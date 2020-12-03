import { createMuiTheme } from '@material-ui/core/styles';

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
  },

  typography: {
    fontFamily: 'Grandstander',
  },
});

export default theme;
