import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyBXJRCUCLWR2g-JRg_CTRkdbNljIBrK8H4",
    authDomain: "twitter-clone-36d75.firebaseapp.com",
    projectId: "twitter-clone-36d75",
    storageBucket: "twitter-clone-36d75.appspot.com",
    messagingSenderId: "107424707092",
    appId: "1:107424707092:web:177f423a95635c480ded01",
    measurementId: "G-MNPWPE54JR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;