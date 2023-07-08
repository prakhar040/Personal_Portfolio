import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "personal-portfolio-e54d3.firebaseapp.com",
  projectId: "personal-portfolio-e54d3",
  storageBucket: "personal-portfolio-e54d3.appspot.com",
  messagingSenderId: "784203146988",
  appId: "1:784203146988:web:5b3d169a05870d79a427c9"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const usersRef = collection(db, "users");

export default app;