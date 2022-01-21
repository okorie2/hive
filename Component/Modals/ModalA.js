import React, { useRef } from "react";
import styles from "./modala.module.css";
import UseModalState from "../../utilities/hooks/UseModalState";
import UseOutsideAlerter from "../../utilities/hooks/UseOutsideAlerter";
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
