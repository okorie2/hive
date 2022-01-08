import React from "react";
import styles from "./modala.module.css";
export default function ModalA({ onClick, expanded }) {
  return (
    <>
      <div className={styles.modalA} id={expanded ? styles["modalAx"] : ""}>
        <div onClick={onClick}>Contact Info</div>
        <div>Name Contact </div>
        <div>Select Messages</div>
        <div>Close Chat</div>
        <div>Mute Notifications</div>
        <div>Clear Messages</div>
        <div>Delete Chat</div>
      </div>
    </>
  );
}
