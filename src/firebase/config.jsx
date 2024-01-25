import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrb49F5mUYHyFzdP3P5TtMd-_QZqLOKjI",
  authDomain: "miniblog-3e745.firebaseapp.com",
  projectId: "miniblog-3e745",
  storageBucket: "miniblog-3e745.appspot.com",
  messagingSenderId: "925107132030",
  appId: "1:925107132030:web:249a475b8fdc2fad016a2f"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export  {db}