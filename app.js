import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBk3nq7S1nebPNRk8pcEuyTSRULYac63wA",
  authDomain: "ecotrack-5bb03.firebaseapp.com",
  projectId: "ecotrack-5bb03",
  storageBucket: "ecotrack-5bb03.appspot.com",
  messagingSenderId: "468416749521",
  appId: "1:468416749521:web:b9eb6930bd03e41dbacaf0",
  measurementId: "G-LKBNBJCT5S"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new FacebookAuthProvider();

function signInWithFacebook() {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("User signed in:", result.user);
    })
    .catch((error) => {
      console.error("Error during sign-in:", error);
    });
}
