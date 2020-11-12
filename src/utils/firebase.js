import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDGUCe3SoC7uOIAHL12YgfQbpjwd96tzPY',
  authDomain: 'flixphilia-login.firebaseapp.com',
  databaseURL: 'https://flixphilia-login.firebaseio.com',
  projectId: 'flixphilia-login',
  storageBucket: 'flixphilia-login.appspot.com',
  messagingSenderId: '884067264315',
  appId: '1:884067264315:web:f25d768679202ba318391e',
  measurementId: 'G-5JZX79JKNK',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth, firebaseApp };
