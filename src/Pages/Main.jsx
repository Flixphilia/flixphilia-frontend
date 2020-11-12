import { Route, Switch } from 'react-router-dom';
import UserPage, { LoginPage, SignUpPage } from './UserPage/index.jsx';

import SeriesPage from './SeriesPage/index.jsx';
import { actions } from '../utils/reducer.js';
import { auth } from '../utils/firebase.js';
import { useEffect } from 'react';
import { useStateValue } from '../utils/StateProvider.js';

const Main = () => {
  //eslint-disable-next-line
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in
        let user = {
          uid: authUser.uid,
          displayName: authUser.displayName,
          email: authUser.email,
          photoURL: authUser.photoURL,
        };
        dispatch({
          type: actions.SET_USER,
          user,
        });
      } else {
        // the user is logged out
        dispatch({
          type: actions.SET_USER,
          user: null,
        });
      }
    });
    //eslint-disable-next-line
  }, []);

  return (
    <Switch>
      <Route path="/series/:series" component={SeriesPage} />
      <Route path="/user" component={UserPage} />
      <Route path="/auth/login" component={LoginPage} />
      <Route path="/auth/signup" component={SignUpPage} />
    </Switch>
  );
};
export default Main;
