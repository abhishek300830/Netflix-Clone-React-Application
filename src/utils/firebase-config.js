import { initializeApp } from "firebase/app";
// import auth
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBqGy5tRIIpjHxqRAPtQwI4_IzSpjI3ETU",
  authDomain: "netflix-clone-bdd0e.firebaseapp.com",
  projectId: "netflix-clone-bdd0e",
  storageBucket: "netflix-clone-bdd0e.appspot.com",
  messagingSenderId: "231301703257",
  appId: "1:231301703257:web:eb8352b8498dfa0318b348",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// exporting auto
export const firebaseAuth = getAuth(app);
