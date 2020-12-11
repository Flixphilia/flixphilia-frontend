import { useEffect, useRef, useState } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import SvgIcon from '@material-ui/core/SvgIcon';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '85vh',
    width: 800,
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      height: '80vh',
      width: '100%',
      margin: 0,
    },
  },
  image: {
    backgroundImage:
      'url(https://pure-lake-91665.herokuapp.com/api/homepage/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    maxWidth: 400,
  },
  paper: {
    margin: theme.spacing(6, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 400,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: 0,
    },
  },
  avatar: {
    margin: theme.spacing(0, 1),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  form: {
    marginTop: theme.spacing(2),
  },
  or: {
    color: theme.palette.primary.main,
    margin: theme.spacing(-1.5, 20, -2.5, 20),
    fontSize: '23px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px',
    },
  },
  submit: {
    margin: theme.spacing(4, 'auto'),
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2, 'auto'),
    },
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const { currentUser, loginWithGoogle, login } = useAuth();
  const username = useRef('');
  const password = useRef('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const history = useHistory();

  const handleLogIn = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await login(
        { username: 'testusername', password: 'admin' },
        () => {
          history.push('/user');
        }
      );
      console.log(response);
    } catch (error) {
      setError('Failed to Login!');
    }

    setLoading(false);
  };

  const handleLoginWithGoogle = async () => {
    setLoading(true);
    setError('');
    try {
      await loginWithGoogle();
    } catch (error) {
      setError('Failed to Login!');
    }
    setLoading(false);
  };

  useEffect(() => {
    if (currentUser) {
      history.push('/user');
    }
    //eslint-disable-next-line
  }, []);

  return (
    <Grid container component={Paper} elevation={6} className={classes.root}>
      <CssBaseline />
      {error && console.log(error)}
      <Hidden smDown>
        <Grid item md={6} className={classes.image} />
      </Hidden>
      <Grid item sm={12} md={6} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" color="primary">
            Log In to you Account
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="User Name"
              name="username"
              autoComplete="username"
              autoFocus
              ref={username}
              value={username.current.value}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              ref={password}
              value={password.current.value}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={loading}
              className={classes.submit}
              onClick={handleLogIn}
            >
              {loading ? <CircularProgress size={24} /> : 'Log In'}
            </Button>
            <Typography className={classes.or}>OR</Typography>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              startIcon={<GoogleIcon />}
              disabled={loading}
              onClick={handleLoginWithGoogle}
            >
              {'Log In with Google'}
            </Button>

            <Grid container>
              <Grid item>
                <Link href="/auth/signup" variant="body2">
                  {"Don't have an account? Sign Up Now!"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default LoginPage;

const GoogleIcon = () => (
  <SvgIcon
    style={{
      fontSize: '0.9rem',
      marginRight: '-3',
      marginBottom: '2.4',
      padding: '0',
    }}
  >
    <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
  </SvgIcon>
);
