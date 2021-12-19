import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  // apiKey: "AIzaSyDRUL1fjfkQsJ_iPffvtjIDcD62Ag3I36o",
  // authDomain: "hackathon-51ac5.firebaseapp.com",
  // projectId: "hackathon-51ac5",
  // databaseURL: "https://hackathon-51ac5-default-rtdb.firebaseio.com",
  // storageBucket: "hackathon-51ac5.appspot.com",
  // messagingSenderId: "351905200896",
  // appId: "1:351905200896:web:729883549cf2c9461b91e5"
  apiKey: "AIzaSyDPGZeHySUe5yd8T-V4vHgQESeKU2sISog",
  authDomain: "bar-db.firebaseapp.com",
  databaseURL: "https://bar-db-default-rtdb.firebaseio.com",
  projectId: "bar-db",
  storageBucket: "bar-db.appspot.com",
  messagingSenderId: "52506451695",
  appId: "1:52506451695:web:5b2448195286e8296cc51a"
};

const app = initializeApp(firebaseConfig);

///AUTH FIREBASE
const auth = getAuth();
///FIRESTORE DATABASE//
const db = getFirestore();
export { auth, db }