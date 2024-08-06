// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBk3nq7S1nebPNRk8pcEuyTSRULYac63wA",
    authDomain: "ecotrack-5bb03.firebaseapp.com",
    projectId: "ecotrack-5bb03",
    storageBucket: "ecotrack-5bb03.appspot.com",
    messagingSenderId: "468416749521",
    appId: "1:468416749521:web:b9eb6930bd03e41dbacaf0",
    measurementId: "G-LKBNBJCT5S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Facebook login
document.getElementById('fb-login-btn').addEventListener('click', () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log('User signed in:', result.user);
            alert("Logged in as " + result.user.displayName);
        })
        .catch((error) => {
            console.error('Facebook login error:', error);
            alert("Error during Facebook login: " + error.message);
        });
});

// Admin login
document.getElementById('admin-login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;

    // Simple authentication check
    if (username === 'admin' && password === 'password') {
        alert('Admin logged in');
    } else {
        alert('Invalid credentials');
    }
});
