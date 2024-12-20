import React from "react";

import styles from "./SidePanel.module.css";

function SidePanel(props) {
  function handleRadioChange(event) {
    let receiver = event.target.value;
    props.setReceiver((oldReceiver) => receiver);
  }

  function createChatUser(userName) {
    return (
      <label className={styles.user}>
        <input
          type="radio"
          name="user"
          value={userName}
          checked={userName == props.receiver}
          onChange={handleRadioChange}
        />
        {userName}
      </label>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>ChatGram</div>
      <div className={styles.userList}>
        <div className={styles.subtitle}>Online Users</div>
        <div className={styles.list}>
          {props.users.map((user) => createChatUser(user))}
        </div>
      </div>
    </div>
  );
}

export default SidePanel;
