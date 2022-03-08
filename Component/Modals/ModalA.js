import React, { useContext, useRef, useState } from "react";
import { ModalContext } from "../../context/modalContext";
import UseOutsideAlerter from "../../hooks/UseOutsideAlerter";
import Chat from "../../pages/chat/chat";
import styles from "./modala.module.css";

export default function ModalA({ onClick, expanded }) {
  const modalRef = useRef(null);
  UseOutsideAlerter(modalRef);
  const { state, setState } = useContext(ModalContext);
  console.log(state, "modala state");
  return (
    <>
      {state ? (
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
