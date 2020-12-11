import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { fade } from '@material-ui/core/styles';
import makeStyles from '@material-ui/styles/makeStyles';
import useCountRenders from '../hooks/useCountRenders';
import { useAuth } from '../hooks/useAuth';

import { useHistory } from 'react-router-dom';

const navBarStyles = makeStyles({
  root: {
    backgroundColor: 'rgba(28,28,28,0.85)',
    flexFlow: 'row',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: '28px',
    padding: '8px',
  },

  avatar: {
    marginLeft: '16px',
    cursor: 'pointer',
    height: '38px',
    width: '38px',
  },

  search: {
    position: 'relative',
    backgroundColor: fade('#fff', 0.15),
    '&:hover': {
      backgroundColor: fade('#fff', 0.25),
    },
    marginLeft: 0,
    width: '240px',
    height: 'fit-content',
    borderRadius: '24px',
  },

  searchIcon: {
    padding: '0 12px',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
  },

  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: '8px 8px 8px 42px',
    width: '100%',
  },
  username: {
    padding: '12px 0 12px 12px',
  },
});

const SearchBar = ({ classes }) => (
  <div className={classes.search}>
    <div className={classes.searchIcon}>
      <SearchIcon />
    </div>

    <InputBase
      placeholder="Search…"
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput,
      }}
      inputProps={{ 'aria-label': 'search' }}
    />
  </div>
);

const NavBar = () => {
  console.log('NavBar: ', useCountRenders());

  const classes = navBarStyles();
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const hidden = history.location.pathname === '/auth/login';

  const { photoURL } = currentUser;

  const handleLogout = async () => {
    await logout(() => {
      window.location.reload();
    });
  };

  return (
    <AppBar className={classes.root} position="sticky">
      <Toolbar>
        <Link href="/" underline="none">
          <Typography className={classes.title} noWrap>
            FlixPhilia
          </Typography>
        </Link>
      </Toolbar>

      <Toolbar>
        <SearchBar classes={classes} />

        {currentUser ? (
          <Link onClick={handleLogout} component="button" underline="none">
            <Typography className={classes.username}>Logout</Typography>
          </Link>
        ) : hidden ? null : (
          <Link href="/auth/login" underline="none" color="primary">
            <Typography className={classes.username}>Login</Typography>
          </Link>
        )}

        <Typography
          className={classes.username}
          // onClick={uid === undefined ? handlelogin : null}
        >
          {}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
