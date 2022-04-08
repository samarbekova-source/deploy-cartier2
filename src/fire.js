import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAg0TLYvC8MO-XsoNZY7rzjojJ0cYnBT5k",
  authDomain: "cartier-efbb7.firebaseapp.com",
  projectId: "cartier-efbb7",
  storageBucket: "cartier-efbb7.appspot.com",
  messagingSenderId: "335835641649",
  appId: "1:335835641649:web:4502bfa01486c6c7152210",
  measurementId: "G-0Y9MYJTX6D",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
