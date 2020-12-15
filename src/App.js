import { initialState, reducer } from './context/reducer';

import Footer from './components/footer';
import NavBar from './components/navBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import { StateProvider } from './context/StateProvider';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import theme from './styles/theme';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <ThemeProvider theme={theme}>
        <Router>
          <CssBaseline />
          <NavBar />
          <Routes />
          {/* <Footer /> */}
        </Router>
      </ThemeProvider>
    </StateProvider>
  );
};

export default App;
