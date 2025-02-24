import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCf6NUpM8SUCw0mvqLV41W201o_w0vVheg",
  authDomain: "raftar-1bd56.firebaseapp.com",
  projectId: "raftar-1bd56",
  storageBucket: "raftar-1bd56.firebasestorage.app",
  messagingSenderId: "388157338834",
  appId: "1:388157338834:web:487f8b81778478bac8290b",
  measurementId: "G-VFT0C3L78B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth and create providers
const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

// Initialize Analytics
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Initialize Messaging
let messaging = null;
if (typeof window !== 'undefined') {
  messaging = getMessaging(app);
}

export { app, auth, analytics, messaging };