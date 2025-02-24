import { messaging } from "../lib/firebase";
import { getToken, onMessage } from "firebase/messaging";

const VAPID_KEY = "BEvo837yTkydxPV-8IAAqCKUhzIZp7KPj9qrBy3mOc08hlf0cKZDCM7cB8pFQuXbTw2H4TCvPSvJno9jwR-QhsM"; // Get this from Firebase Console under Cloud Messaging

export const requestNotificationPermission = async () => {
    try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
            console.log("Notification permission granted.");
            const token = await getToken(messaging, { vapidKey: VAPID_KEY });
            console.log("FCM Token:", token);
            return token;
        } else {
            console.log("Notification permission denied.");
        }
    } catch (error) {
        console.error("Error getting notification permission:", error);
    }
};

export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            console.log("Message received:", payload);
            resolve(payload);
        });
    });
