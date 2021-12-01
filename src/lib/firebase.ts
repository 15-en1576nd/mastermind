// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
export { GoogleAuthProvider } from 'firebase/auth';
export { browserLocalPersistence, setPersistence, getAuth, signInWithPopup } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyC-83X7O07MXBXVrRet2pE0U7Fvr5ib96E',
	authDomain: 'emojimind.firebaseapp.com',
	projectId: 'emojimind',
	storageBucket: 'emojimind.appspot.com',
	messagingSenderId: '922751636472',
	appId: '1:922751636472:web:621f37355255efe3f1bc0d',
	measurementId: 'G-SWNHPWJKE2'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
