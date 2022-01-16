import React, { useRef } from "react";
import styles from "./modala.module.css";
import UseOutsideAlerter from "../../pages/chat/utilities/UseOutsideAlerter";
export default function ModalA({ onClick, expanded, ref }) {
  const modalRef = useRef(null);
  UseOutsideAlerter(modalRef);
  return (
    <>
      <div
        className={styles.modalA}
        id={expanded ? styles["modalAx"] : ""}
        ref={modalRef}
      >
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
