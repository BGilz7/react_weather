import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCj9LCTO59jt8FespL2pYv4FYNbX3Yg4G0",
  authDomain: "react-weather-racer7.firebaseapp.com",
  databaseURL: "https://react-weather-racer7.firebaseio.com",
  projectId: "react-weather-racer7",
  storageBucket: "react-weather-racer7.appspot.com",
  messagingSenderId: "1061966063984"
};
firebase.initializeApp(config);

export default firebase;
