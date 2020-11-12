import { actions } from '../../utils/reducer';
import { auth } from '../../utils/firebase';
import firebase from 'firebase/firebase';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useStateValue } from '../../utils/StateProvider';

const LoginPage = () => {
  //eslint-disable-next-line
  const [{}, dispatch] = useStateValue();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log(authUser);
        history.push('/user');
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((authUser) => {
        dispatch({
          type: actions.SET_USER,
          user: authUser.user,
        });
        history.push('/user');
      })
      .catch((error) => alert(error.message));
  };

  auth.onAuthStateChanged(() => {
    // console.log(user);
  });

  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <div className="login__container">
        <h1>Login</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <button onClick={handleLogin}>Login With Google</button>
      </div>
    </div>
  );
};

export default LoginPage;
