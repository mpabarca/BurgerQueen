import firebase from 'firebase/app';

const config = {
    apiKey: "AIzaSyBSR4N5WZno9QVDiGJVg3Lq6s4yEj9Ug6o",
    authDomain: "burger-queen2019.firebaseapp.com",
    databaseURL: "https://burger-queen2019.firebaseio.com",
    projectId: "burger-queen2019",
    storageBucket: "burger-queen2019.appspot.com",
    messagingSenderId: "801610163321"
  };

const fire= firebase.initializeApp(config);
export default fire;