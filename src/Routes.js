import { LoginPage, SignUpPage } from './Pages/UserPage';
import { Route, Switch } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import LoaderPage from './Pages/LoaderPage';

const QuizPage = lazy(() => import('./Pages/QuizPage'));
const SeriesPage = lazy(() => import('./Pages/SeriesPage'));
const UserPage = lazy(() => import('./Pages/UserPage'));

const Routes = () => (
  <Suspense fallback={<LoaderPage />}>
    <Switch>
      <Route path="/series/:series" component={SeriesPage} />
      <Route path="/user" component={UserPage} />
      <Route path="/quiz/:series/:season" component={QuizPage} />
      <Route path="/auth/login" component={LoginPage} />
      <Route path="/auth/signup" component={SignUpPage} />
    </Switch>
  </Suspense>
);

export default Routes;
