import { Link } from 'react-router-dom';
import LoginPage from './logIn';
import SignUpPage from './signUp';
import styled from 'styled-components';

const { useStateValue } = require('../../utils/StateProvider');

const UserPageWrapper = styled.div`
  height: 60vh;
  width: 60%;
  margin: 20px auto;
`;

const UserPage = () => {
  const [{ user }] = useStateValue();

  return (
    <UserPageWrapper>
      <h1>User</h1>
      <p>{JSON.stringify(user.displayName)}</p>
      <p>{JSON.stringify(user.photoURL)}</p>
      <p>{JSON.stringify(user.email)}</p>
      <p>{JSON.stringify(user.uid)}</p>
      <Link to="/series/mirzapur">
        <p>Mirzapur</p>
      </Link>
      <Link to="/series/friends">
        <p>F.R.I.E.N.D.S.</p>
      </Link>
    </UserPageWrapper>
  );
};
export { LoginPage, SignUpPage };

export default UserPage;
