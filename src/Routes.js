import { Route, Switch } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Loader from './components/loader';

const QuizPage = lazy(() => import('./Pages/QuizPage'));
const SeriesPage = lazy(() => import('./Pages/SeriesPage'));
const HomePage = lazy(() => import('./Pages/HomePage'));
const UserPage = lazy(() => import('./Pages/UserPage'));
const LoginPage = lazy(() => import('./Pages/UserPage/logIn'));
const SignUpPage = lazy(() => import('./Pages/UserPage/signUp'));
const ErrorBoundary = lazy(() => import('./Pages/ErrorBoundary'));
const ErrorPage = lazy(() => import('./Pages/ErrorBoundary/errorPage'));

const Routes = () => (
  <Suspense fallback={<Loader />}>
    <ErrorBoundary>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/series/:series/:season" exact component={SeriesPage} />
        <Route path="/user" exact component={UserPage} />
        <Route path="/quiz/:series/:season" exact component={QuizPage} />
        <Route path="/error" exact component={ErrorPage} />
        <Route path="/auth/login" exact component={LoginPage} />
        <Route path="/auth/signup" exact component={SignUpPage} />
      </Switch>
    </ErrorBoundary>
  </Suspense>
);

export default Routes;
