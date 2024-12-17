import React from "react";

import TextBox from "../TextBox/TextBox.jsx";
import SenderMessage from "../SentMessage/SentMessage.jsx";
import ReceiverMessage from "../ReceivedMessage/ReceivedMessage.jsx";

import styles from "./ChatWindow.module.css";

function ChatWindow(props) {
  function getSentMessage(message) {
    return (
      <div className={styles.sent}>
        <SenderMessage message={message} />
      </div>
    );
  }

  function getReceivedMessage(message) {
    return (
      <div className={styles.received}>
        <ReceiverMessage message={message} />
      </div>
    );
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>College Friends</div>
        <div className={styles.messageContainer}>
          {getSentMessage("Hello, how are you?")}
          {getReceivedMessage("I am fine, thank you. How are you?")}
        </div>
        <div className={styles.textBoxContainer}>
          <TextBox />
        </div>
      </div>
    </>
  );
}

export default ChatWindow;
