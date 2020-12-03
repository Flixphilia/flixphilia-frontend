import React, { useState } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { actions } from '../../context/reducer';
import { auth } from '../../utils/firebase';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    maxWidth: 1000,
    margin: '50px auto',
  },
  image: {
    backgroundImage:
      'url(https://pure-lake-91665.herokuapp.com/api/homepage/random)',
    backgroundRepeat: 'no-repeat',
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
    margin: theme.spacing(-1, 1, 1.5, 1),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(0),
  },
  submit: {
    margin: theme.spacing(3, 'auto'),
    padding: theme.spacing(0.7),
  },
  colors: {
    color: theme.palette.primary.main,
  },
}));

const SignUpPage = () => {
  const classes = useStyles();
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log(authUser);
        let changeRequest = user.profileChangeRequest();
        changeRequest.displayName = 'John Doe';
        changeRequest.commitChangesWithCompletion();
        dispatch({
          type: actions.SET_USER,
          user: authUser.user,
        });
        history.push('/user');
      })
      .catch((error) => {
        console.error('Failed!');
      });
  };
  return (
    <Grid container component={Paper} elevation={6} className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" color="primary">
            Sign up
          </Typography>
          <form className={classes.form}>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lname"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              autoComplete="email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              autoComplete="current-password"
            />
            <FormControlLabel
              className={classes.colors}
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I agree to the terms and conditions."
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/auth/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default SignUpPage;
