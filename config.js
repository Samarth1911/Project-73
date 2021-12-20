import * as firebase from "firebase";
require("@firebase/firestore");

  var firebaseConfig = {
    apiKey: "AIzaSyCC6pRfRJfwGxeF05PAQd6nnBJGSDFNdtw",
  authDomain: "project-73-7d927.firebaseapp.com",
  projectId: "project-73-7d927",
  storageBucket: "project-73-7d927.appspot.com",
  messagingSenderId: "580453956363",
  appId: "1:580453956363:web:98fe53c674fb0448a8800e",
  measurementId: "G-0P1SFX1ZYF"
  };
 
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
