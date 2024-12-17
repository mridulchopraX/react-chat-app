import React from "react";

import styles from "./TextBox.module.css";

function TextBox() {
  return (
    <>
      <div className={styles.textBox}>
        <input type="text" placeholder="Type a message" />
        <button>Send </button>
      </div>
    </>
  );
}

export default TextBox;
