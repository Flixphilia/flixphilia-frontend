import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import HomeIcon from '@material-ui/icons/Home';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade } from '@material-ui/core/styles';
import makeStyles from '@material-ui/styles/makeStyles';
import { useAuth } from '../context/AuthProvider';
import useCountRenders from '../hooks/useCountRenders';

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

  // const [{ user }, dispatch] = useStateValue();
  const classes = navBarStyles();
  const { currentUser } = useAuth();

  // const handlelogin = () => {
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   auth
  //     .signInWithPopup(provider)
  //     .then((authUser) => {
  //       dispatch({
  //         type: actions.SET_USER,
  //         user: authUser.user,
  //       });
  //     })
  //     .catch((error) => alert(error.message));
  // };

  // const handlelogout = () => {
  //   alert('This will Sign You Out');
  //   auth.signOut();
  //   window.location.reload();
  // };

  console.log(currentUser);
  const { photoURL, uid } = currentUser;

  // const label = uid === undefined ? 'Login' : displayName.split(' ')[0];

  return (
    <AppBar className={classes.root} position="sticky">
      <Toolbar>
        <HomeIcon />
        <Typography className={classes.title} noWrap>
          FlixPhilia
        </Typography>
      </Toolbar>

      <Toolbar>
        <SearchBar classes={classes} />

        {uid && <Avatar src={photoURL} className={classes.avatar} />}
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
