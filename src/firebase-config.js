import * as firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/storage'
 
const firebaseConfig = {
    apiKey: "AIzaSyB1ZessoVi1EScy892gcdVojudaQ03o1Mw",
    authDomain: "evernote-clone-d91b8.firebaseapp.com",
    projectId: "evernote-clone-d91b8",
    storageBucket: "evernote-clone-d91b8.appspot.com",
    messagingSenderId: "624115260628",
    appId: "1:624115260628:web:1a714edd7a8bce8c2daf41"
  };
  
  firebase.initializeApp(firebaseConfig);

  export const projectStorage = firebase.storage();
  export const projectFireStore = firebase.firestore();
  export const timestamp = firebase.firestore.FieldValue.serverTimestamp;