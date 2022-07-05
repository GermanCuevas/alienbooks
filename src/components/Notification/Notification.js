import "./Notification.css";
import { createContext, useState, useContext } from "react";

const Notification = ({ message, severity }) => {
  let notificationStyle;
  if (severity === "order") {
    notificationStyle = {
      position: "absolute",
      bottom: 30,
      right: "50%",
      width: "auto",
      height: "auto",
      backgroundColor: "blue",
      padding: "10px 20px 10px 20px",
      color: "white",
      borderRadius: "15px",
      fontSize: "1.5rem",
    };
  } else {
    notificationStyle = {
      position: "absolute",
      top: 110,
      right: 20,
      width: "auto",
      height: "auto",
      backgroundColor: severity === "error" ? "red" : "green",
      padding: "10px 20px 10px 20px",
      color: "white",
      borderRadius: "15px",
    };
  }

  if (!message) return;

  return (
    <div style={notificationStyle} className="notificationDiv">
      <h4>{message}</h4>
    </div>
  );
};

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  const setNotification = (severity, message) => {
    setMessage(message);
    setSeverity(severity);
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <NotificationContext.Provider value={{ setNotification }}>
      <Notification message={message} severity={severity} />
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  return useContext(NotificationContext);
};
