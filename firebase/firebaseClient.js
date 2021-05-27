// firebase/firebaseClient.js
import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9gV2W-fuT7nQHW0agptIepbryZR2tmLU",
  authDomain: "nextjs-tina-cms.firebaseapp.com",
  projectId: "nextjs-tina-cms",
  storageBucket: "nextjs-tina-cms.appspot.com",
  messagingSenderId: "853496487085",
  appId: "1:853496487085:web:d527d01765ee03a1597a24",
  measurementId: "G-57XZF0332E",
  databaseURL: "https://nextjs-tina-cms-default-rtdb.firebaseio.com"
};

function getClientApp() {
  let regApp = firebase.apps.filter((app) => {
    return app.name == 'nextJsApp'
  })[0]
  if (!regApp) {
    regApp = firebase.initializeApp(firebaseConfig, 'nextJsApp');
    firebase.auth(regApp).setPersistence(firebase.auth.Auth.Persistence.SESSION);
    window.firebase = firebase;
  }
  return regApp
}

export { firebase, getClientApp };

