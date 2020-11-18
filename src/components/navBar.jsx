import { fade, makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';
import { useStateValue } from '../utils/StateProvider';

const navStyles = makeStyles((theme) =>{
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const NavBar = () => {
  //eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();
  const classes = navStyles();
  return (
    <AppBar position="static">
      <Toolbar>
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
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

// import styled from 'styled-components';

// import styled from 'styled-components';

// import styled from 'styled-components';

// import styled from 'styled-components';

// import styled from 'styled-components';

// import styled from 'styled-components';

// import styled from 'styled-components';

//   display: flex;
//   place-items: center;
//   justify-content: space-between;
//   padding: 8px;
//   position: sticky;
//   top: 0;
//   background-color: #1c1c1cd4;
// `;

// const Logo = styled.div`
//   color: white;
//   padding: 8px;
//   font-size: 30px;
//   margin-left: 10px;
//   margin-bottom: -2px;
// `;

// const LogoName = styled.span`
//   letter-spacing: 1px;
// `;

// const UserDetails = styled.p`
//   display: flex;
//   place-items: center;
// `;

// const StyledSearch = styled.div`
//   padding: 8px;
//   margin-right: 20px;
//   margin-bottom: 7px;
// `;

// const SearchInput = styled.input`
//   border-radius: 16px;
//   padding: 8px;
//   border: none;

//   &:focus {
//     outline: none;
//   }
// `;

// const SearchButton = styled.button`
//   border-radius: 50%;
//   border: none;
//   margin-left: 10px;
//   background-color: green;
//   color: white;
//   font-size: 20px;
//   width: 40px;
//   height: 40px;

//   &:focus {
//     outline: none;
//   }

//   span {
//     vertical-align: middle;
//   }
// `;

// const NavBar = () => {
//   //eslint-disable-next-line
//   const [{ user }, dispatch] = useStateValue();

//   return (
//     <StyledNavBar>
//       <Logo>
//         <LogoName>
//           <Link to="/">FlixPhilia</Link>
//         </LogoName>
//       </Logo>

//       <UserDetails>
//         <Avatar src={user.photoURL} />
//         {JSON.stringify(user.displayName)}
//       </UserDetails>
//       <StyledSearch>
//         <form>
//           <SearchInput />
//           <SearchButton>
//             <span className="fa fa-search"></span>
//           </SearchButton>
//         </form>
//       </StyledSearch>
//     </StyledNavBar>
//   );
// };
