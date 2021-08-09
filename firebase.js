import firebase from 'firebase';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQPI3Mj8VvDLdR61i7g-GWuptyoh3apsM",
    authDomain: "facebook-yt-d32d1.firebaseapp.com",
    projectId: "facebook-yt-d32d1",
    storageBucket: "facebook-yt-d32d1.appspot.com",
    messagingSenderId: "769818869252",
    appId: "1:769818869252:web:bfd4f8c100ad8ec598ff51",
    measurementId: "G-QZ1RDDD9HB"
  };

  const app = !firebase.apps.length 
    ? firebase.initializeApp(firebaseConfig) 
    : firebase.app();

  const db = app.firestore();
  const storage = firebase.storage();

  export { db, storage };