import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyD8wPRHDtP-h7h8x75k0iQ8-nr3_csVxKQ",
    authDomain: "resume-builder-95086.firebaseapp.com",
    databaseURL: "https://resume-builder-95086.firebaseio.com",
    projectId: "resume-builder-95086",
    storageBucket: "resume-builder-95086.appspot.com",
    messagingSenderId: "101079735368",
    appId: "1:101079735368:web:354ccd40f2e2ddaa660c7d"
  };
  // Initialize Firebase
  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const auth=firebase.auth();//handles auth wala kaam
  const db=firebase.firestore();//to access db

  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,db,provider};