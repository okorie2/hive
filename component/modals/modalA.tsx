import React, { useContext, useRef } from "react";
import { ModalContext } from "../../context/modalContext";
import UseOutsideAlerter from "../../hooks/UseOutsideAlerter";

import styles from "./modala.module.css";
interface IModalProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  expanded: boolean;
}
export default function ModalA({ onClick, expanded }: IModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  UseOutsideAlerter(modalRef);
  const { state } = useContext(ModalContext);
  // console.log(state, "modala state");
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
