import { initializeApp } from "firebase/app";
import { getMessaging, onBackgroundMessage } from "firebase/messaging/sw";

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
const messaging = getMessaging(app);

// Handle background notifications
onBackgroundMessage(messaging, (payload) => {
  console.log("Received background message: ", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/icon.png",
  });
});
