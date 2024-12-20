import React from "react";

import styles from "./TextBox.module.css";

function TextBox(props) {
  function updateChat() {
    let message = document.querySelector(".msg-input").value;
    document.querySelector(".msg-input").value = "";
    const newMessage = {
      sender: "user",
      message: message,
    };

    props.chatUpdater(newMessage);
  }

  return (
    <div className={styles.textBox}>
      <input type="text" placeholder="Type a message" className="msg-input" />
      <button onClick={updateChat}>Send </button>
    </div>
  );
}

export default TextBox;
