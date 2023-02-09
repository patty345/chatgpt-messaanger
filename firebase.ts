import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGA12p9ow1sQg5fsR017rA1YEz5nUuenM",
  authDomain: "chatgpt-messanger-d4654.firebaseapp.com",
  projectId: "chatgpt-messanger-d4654",
  storageBucket: "chatgpt-messanger-d4654.appspot.com",
  messagingSenderId: "289739123338",
  appId: "1:289739123338:web:f8f66463d9d903de03db73",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
