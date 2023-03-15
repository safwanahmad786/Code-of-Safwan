import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = firebase.initializeApp ( {
  apiKey: "AIzaSyBwzfrP5yRqfVg2P4hRluysdx3Doh1pedU",
  authDomain: "liked-in-safwan.firebaseapp.com",
  projectId: "liked-in-safwan",
  storageBucket: "liked-in-safwan.appspot.com",
  messagingSenderId: "29567668861",
  appId: "1:29567668861:web:c98ff2034e4f3db0df1714",
});

export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase;
