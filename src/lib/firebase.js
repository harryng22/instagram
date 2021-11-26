import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// here is where I want to import the seed file
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyAumKJ2IxHq711hOCIC7HUs8GtXNtLDC8I",
  authDomain: "instagram-1c9ba.firebaseapp.com",
  projectId: "instagram-1c9ba",
  storageBucket: "instagram-1c9ba.appspot.com",
  messagingSenderId: "491498368758",
  appId: "1:491498368758:web:03cc4d6121c3e7853e06d7",
  measurementId: "G-JC8RKD64PK"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where I want to import the seed file (only ONCE!)
// seedDatabase(firebase);

export { firebase, FieldValue };
