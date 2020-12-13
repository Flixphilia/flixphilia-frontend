import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import LoginPage from './logIn';
import SignUpPage from './signUp';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const UserPage = () => {
  const history = useHistory();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser === false) {
      history.push('/auth/login');
    }
    //eslint-disable-next-line
  }, []);

  return (
    <Container display="flex">
      <Box color="white">
        <pre>{JSON.stringify(currentUser, null, 2)}</pre>
      </Box>
    </Container>
  );
};

export { LoginPage, SignUpPage };
export default UserPage;
