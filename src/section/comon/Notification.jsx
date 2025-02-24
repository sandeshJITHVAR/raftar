import { useEffect, useState } from "react";
import { requestNotificationPermission, onMessageListener } from "../utils/notifications";

const Notification = () => {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    requestNotificationPermission();
    onMessageListener()
      .then((payload) => {
        setNotification(payload.notification);
      })
      .catch((err) => console.error("Failed to receive message:", err));
  }, []);

  return (
    <div>
      {notification && (
        <div className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded shadow-lg">
          <h4>{notification.title}</h4>
          <p>{notification.body}</p>
        </div>
      )}
    </div>
  );
};

export default Notification;