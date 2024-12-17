import React from "react";

import styles from "./SidePanel.module.css";

function SidePanel(props) {
  function createChatUser(userName) {
    return (
      <label className={styles.user}>
        <input type="radio" name="user" value={userName} />
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
          {createChatUser("John")}
          {createChatUser("Jane")}
        </div>
      </div>
    </div>
  );
}

export default SidePanel;
