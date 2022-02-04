import firebase from 'firebase/app'
import 'firebase/firestore'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDaYYj35tawfsgDwWidjpphFLro9MyLADk",
    authDomain: "recipe-react-site.firebaseapp.com",
    projectId: "recipe-react-site",
    storageBucket: "recipe-react-site.appspot.com",
    messagingSenderId: "691174459899",
    appId: "1:691174459899:web:6385933772d34c1bb8e35e",
    measurementId: "G-MMJ55T6RQX"
  };
 
  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()

  export {projectFirestore}; 