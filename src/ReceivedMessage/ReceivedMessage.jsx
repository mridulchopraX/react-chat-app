import React from "react";

import styles from "./ReceivedMessage.module.css";

function ReceivedMessage(props) {
  return (
    <>
      <div className={styles.message}>
        <p>{props.message}</p>
      </div>
    </>
  );
}

export default ReceivedMessage;
