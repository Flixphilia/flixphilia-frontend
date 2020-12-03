import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import LoginPage from './logIn';
import SignUpPage from './signUp';
import Typography from '@material-ui/core/Typography';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';

const UserPage = () => {
  const [{ user }] = useStateValue();
  const { displayName, photoURL, email, uid } = user;
  const history = useHistory();

  useEffect(() => {
    if (uid === undefined) {
      history.push('/auth/login');
    }
  }, [uid, history]);

  return (
    <Container display="flex">
      <Box>
        <Typography>{displayName}</Typography>
        <Typography>{email}</Typography>
        <img src={photoURL} alt={displayName} />
      </Box>
    </Container>
  );
};

export { LoginPage, SignUpPage };
export default UserPage;
