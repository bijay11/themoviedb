// import firebase from "firebase/app";
// import "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBCMCrm-pfvY-yRACxqndjxoqZXG7aHJWE",
  authDomain: "auth-moviedb-95337.firebaseapp.com",
  projectId: "auth-moviedb-95337",
  storageBucket: "auth-moviedb-95337.appspot.com",
  messagingSenderId: "286904630230",
  appId: "1:286904630230:web:6593c3e7c7706e82fd4277",
});

export const auth = app.auth();
export default app;
