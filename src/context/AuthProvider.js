import React, { createContext, useContext, useEffect, useState } from 'react';

import { auth } from '../utils/firebase';
import firebase from 'firebase/firebase';

const AuthContext = createContext({
  displayName: undefined,
  email: undefined,
  photoURL: undefined,
  uid: undefined,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    displayName: undefined,
    email: undefined,
    photoURL: undefined,
    uid: undefined,
  });

  const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider);
  };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    // will only run once when the app component loads...
    let newUser = currentUser;

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in
        newUser = {
          uid: authUser.uid,
          displayName: authUser.displayName,
          email: authUser.email,
          photoURL: authUser.photoURL,
        };
        setCurrentUser(newUser);
      } else {
        // the user is logged out
        setCurrentUser(currentUser);
      }
    });
    return unsubscribe;
    //eslint-disable-next-line
  }, []);

  const value = {
    currentUser,
    signUp,
    login,
    loginWithGoogle,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
