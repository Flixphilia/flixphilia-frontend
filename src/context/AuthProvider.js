import React, { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

import instance from '../utils/axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useLocalStorage('user', false);

  const signUp = (user) => {
    const data = {
      email: user.data,
      password: user.password,
      username: user.username,
      first_name: user.firstName,
      last_name: user.lastName,
    };

    return instance({
      url: '/auth/register',
      method: 'POST',
      data: data,
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
  };

  // const loginWithGoogle = () => {
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   return auth.signInWithPopup(provider);
  // };

  const login = (user, next) => {
    return instance({
      url: '/auth/login',
      method: 'POST',
      data: user,
    })
      .then((response) => {
        if (response.status === 200) {
          setCurrentUser(response.data);
          next();
          return;
        }
        return response;
      })
      .catch((error) => {
        return error;
      });
  };

  const logout = (next) => {
    return instance({
      url: '/auth/logout',
      method: 'POST',
    })
      .then((response) => {
        if (response.status === 200) {
          setCurrentUser(false);
          next();
        }
      })
      .catch((error) => {
        return error;
      });
  };

  // useEffect(() => {
  //   // will only run once when the app component loads...
  //   let newUser = {};

  //   const unsubscribe = auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       // the user just logged in / the user was logged in
  //       newUser = {
  //         uid: authUser.uid,
  //         displayName: authUser.displayName,
  //         email: authUser.email,
  //         photoURL: authUser.photoURL,
  //       };
  //       setCurrentUser(newUser);
  //     } else {
  //       // the user is logged out
  //       setCurrentUser(false);
  //     }
  //   });
  //   return () => unsubscribe();
  //   //eslint-disable-next-line
  // }, []);

  const value = {
    currentUser,
    signUp,
    login,
    // loginWithGoogle,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
