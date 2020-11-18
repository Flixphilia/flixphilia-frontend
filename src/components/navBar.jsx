import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useStateValue } from '../utils/StateProvider';

const StyledNavBar = styled.nav`
  display: flex;
  place-items: center;
  justify-content: space-between;
  padding: 8px;
  position: sticky;
  top: 0;
  background-color: #1c1c1cd4;
`;

const Logo = styled.div`
  color: white;
  padding: 8px;
  font-size: 30px;
  margin-left: 10px;
  margin-bottom: -2px;
`;

const LogoName = styled.span`
  letter-spacing: 1px;
`;

const UserDetails = styled.p`
  display: flex;
  place-items: center;
`;

const StyledSearch = styled.div`
  padding: 8px;
  margin-right: 20px;
  margin-bottom: 7px;
`;

const SearchInput = styled.input`
  border-radius: 16px;
  padding: 8px;
  border: none;

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  border-radius: 50%;
  border: none;
  margin-left: 10px;
  background-color: green;
  color: white;
  font-size: 20px;
  width: 40px;
  height: 40px;

  &:focus {
    outline: none;
  }

  span {
    vertical-align: middle;
  }
`;

const NavBar = () => {
  //eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();

  return (
    <StyledNavBar>
      <Logo>
        <LogoName>
          <Link to="/">FlixPhilia</Link>
        </LogoName>
      </Logo>

      <UserDetails>{JSON.stringify(user.displayName)}</UserDetails>

      <StyledSearch>
        <form>
          <SearchInput />
          <SearchButton>
            <span className="fa fa-search"></span>
          </SearchButton>
        </form>
      </StyledSearch>
    </StyledNavBar>
  );
};

export default NavBar;
