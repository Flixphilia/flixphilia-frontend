import React, { useEffect, useState } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth } from '../../hooks/useAuth';
import { useHistory } from 'react-router-dom';
import useInput from '../../hooks/useInput';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '86vh',
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
  },
  avatar: {
    margin: theme.spacing(-1, 1, 1.5, 1),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  form: {
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
  const { currentUser } = useAuth();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
  const [firstName, bindFirstName] = useInput('');
  const [lastName, bindLastName] = useInput('');
  const [username, bindUsername] = useInput('');
  const [email, bindEmail] = useInput('');
  const [password, bindPassword] = useInput('');

  useEffect(() => {
    currentUser && history.push('/');
  }, [currentUser, history]);

  const handleSignUp = async (event) => {
    event.preventDefault();
    setLoading(true);

    const user = {
      firstName,
      lastName,
      username,
      email,
      password,
    };

    // const user = {
    //   username: 'testusername',
    //   email: 'admin@admin.com',
    //   password: 'admin',
    //   first_name: 'Admin',
    //   last_name: 'Admin',
    // };

    console.log(user);

    try {
      const response = await signUp(user);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <Grid container component={Paper} elevation={6} className={classes.root}>
      <Hidden smDown>
        <Grid item md={6} className={classes.image} />
      </Hidden>
      <Grid item sm={12} md={6} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" color="primary">
            Sign up
          </Typography>
          <form className={classes.form}>
            <TextField
              {...bindFirstName}
              autoComplete="fname"
              // name="firstName"
              variant="outlined"
              margin="normal"
              required
              id="firstName"
              label="First Name"
              autoFocus
              style={{ width: '48.5%' }}
            />
            <TextField
              {...bindLastName}
              variant="outlined"
              margin="normal"
              required
              id="lastName"
              label="Last Name"
              autoComplete="lname"
              style={{ width: '48.5%', marginLeft: '10px' }}
            />
            <TextField
              {...bindUsername}
              autoComplete="uname"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="userName"
              label="Username"
            />
            <TextField
              {...bindEmail}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              autoComplete="email"
            />
            <TextField
              {...bindPassword}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              // name="password"
              label="Password"
              type="password"
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
              disabled={loading}
              className={classes.submit}
              onClick={handleSignUp}
            >
              {loading ? <CircularProgress /> : 'Sign Up'}
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/auth/login" variant="body2">
                  Already have an account? Log in
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
