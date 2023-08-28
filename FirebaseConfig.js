import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDy8g_jzz8WKkOWxYJb1rNCeKH8NAQ3eBs',
  authDomain: 'finncabulary-quiz-app.firebaseapp.com',
  projectId: 'finncabulary-quiz-app',
  storageBucket: 'finncabulary-quiz-app.appspot.com',
  messagingSenderId: '288105839617',
  appId: '1:288105839617:web:82e373b506c3f1ef305400',
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
