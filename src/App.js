import { initialState, reducer } from './utils/reducer';

import Footer from './components/footer';
import Main from './Pages/Main.jsx';
import NavBar from './components/navBar';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { StateProvider } from './utils/StateProvider';

const App = () => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <NavBar />
        <Main />
        <Footer />
      </Router>
    </StateProvider>
  );
};

export default App;
