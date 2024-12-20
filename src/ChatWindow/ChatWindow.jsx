import React, { useEffect, useState } from "react";

import TextBox from "../TextBox/TextBox.jsx";
import SenderMessage from "../SentMessage/SentMessage.jsx";
import ReceiverMessage from "../ReceivedMessage/ReceivedMessage.jsx";

import styles from "./ChatWindow.module.css";

function ChatWindow(props) {
  const currentReceiver = props.receiver;
  const chat = props.chat;
  const [currentChat, setCurrentChat] = useState(chat[currentReceiver]);

  useEffect(() => {
    setCurrentChat((prevCurrentChat) => props.chat[currentReceiver]);
  }, [props.receiver]);

  function addNewMessage(message) {
    setCurrentChat((prevCurrentChat) => {
      return [...prevCurrentChat, message];
    });
  }

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
        <div className={styles.title}>{currentReceiver}</div>
        <div className={styles.messageContainer}>
          {currentChat.map((message) => {
            if (message.sender === "user") {
              return getSentMessage(message.message);
            } else {
              return getReceivedMessage(message.message);
            }
          })}
        </div>
        <div className={styles.textBoxContainer}>
          <TextBox
            reciever={currentReceiver}
            chat={chat[currentReceiver]}
            chatUpdater={addNewMessage}
          />
        </div>
      </div>
    </>
  );
}

export default ChatWindow;
