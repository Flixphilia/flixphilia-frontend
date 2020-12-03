import { useEffect, useRef, useState } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import SvgIcon from '@material-ui/core/SvgIcon';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth } from '../../context/AuthProvider';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    maxWidth: 1000,
    margin: '50px auto',
    backgroundColor: theme.palette.background.default,
  },
  image: {
    backgroundImage:
      'url(https://pure-lake-91665.herokuapp.com/api/homepage/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'auto',
    backgroundPosition: 'center',
    maxWidth: 500,
    // height: 'inherit',
    // width: 'inherit',
  },
  paper: {
    margin: theme.spacing(6, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(2, 1),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
    // color: theme.palette.primary.main,
  },
  or: {
    color: theme.palette.primary.main,
    margin: theme.spacing(-1.5, 20, -2.5, 20),
    fontSize: '23px',
  },
  submit: {
    margin: theme.spacing(4, 'auto'),
    padding: theme.spacing(1),
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const { currentUser, loginWithGoogle, login } = useAuth();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const email = useRef('');
  const password = useRef('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { uid } = currentUser;

  const history = useHistory();

  const handleLogIn = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError('');
    try {
      await login(email.current.value, password.current.value);
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
    if (uid !== undefined) {
      history.push('/user');
    }
    //eslint-disable-next-line
  }, []);

  return (
    <Grid container component={Paper} elevation={6} className={classes.root}>
      <CssBaseline />
      {error && console.log(error)}
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              ref={email}
              value={email.current.value}
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
              className={classes.submit}
              onClick={handleLogIn}
            >
              Log In
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
