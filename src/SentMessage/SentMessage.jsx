import React from "react";

import styles from "./SentMessage.module.css";

function SentMessage(props) {
  return (
    <>
      <div className={styles.message}>
        <p>{props.message}</p>
      </div>
    </>
  );
}

export default SentMessage;
