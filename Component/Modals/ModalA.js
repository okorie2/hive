import React, { useRef } from "react";
import UseOutsideAlerter from "../../hooks/UseOutsideAlerter";
import styles from "./modala.module.css";
export default function ModalA({ onClick, expanded }) {
  const modalRef = useRef(null);
  const { state, setState } = UseOutsideAlerter(modalRef);
  console.log(state, "modala state");
  return (
    <>
      {!state ? (
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
      ) : (
        ""
      )}
    </>
  );
}
