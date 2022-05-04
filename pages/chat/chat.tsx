import React, { useState } from "react";
import styles from "./chat.module.css";
import Image from "next/image";
import ModalA from "../../component/modals/modalA";
import LeftPane from "../../component/panes/leftPane";
import { ModalContext } from "../../context/modalContext";
import TopPane from "../../component/panes/topPane";
export default function Chat() {
  const [expanded, setExpanded] = useState(false);
  const [state, setState] = useState(false);
  // const [open, setOpen] = useState(false);
  // const showModal = (e) => {
  //   setState(!state);
  // };
  console.log(state, "modal status");

  return (
    <>
      <div className={styles.layout}>
        <TopPane />
        <div className={styles.sec}>
          <LeftPane />
          <div className={styles.midpane}>
            <div
              className={styles["navi"]}
              id={expanded ? styles["xpanded"] : ""}
            >
              <div className={styles.dot}>
                <div className={styles.pers}>
                  <Image
                    src="/svgs/person.svg"
                    alt="person"
                    width={16}
                    height={16}
                  />
                </div>
              </div>
              <div className={styles.icons}>
                <Image
                  src="/svgs/call.svg"
                  alt="call"
                  width={17.96}
                  height={17.96}
                />
              </div>
              <div className={styles.icons}>
                <Image
                  src="/svgs/videocam.svg"
                  alt="videocam"
                  width={18}
                  height={12}
                />
              </div>

              <div id={styles.menu2} onClick={() => setState(!state)}>
                <Image src="/svgs/menu2.svg" alt="menu" width={4} height={16} />
              </div>
            </div>
            <div
              className={styles["section"]}
              id={expanded ? styles["xpanded"] : ""}
            >
              <div className={styles.msgArea}>
                <div className={styles.teddy}>
                  <div className={styles.bear}>
                    <Image
                      src="/svgs/bear.svg"
                      alt="bear"
                      width={88}
                      height={88}
                    />
                  </div>
                  <p>Send and receive messages here</p>
                </div>
              </div>
              <div
                className={styles["msgInput"]}
                id={expanded ? styles["xpand"] : ""}
              >
                <div className={styles.add}>
                  <div className={styles.imj}>
                    <Image
                      src="/svgs/add.svg"
                      alt="add"
                      width={14}
                      height={14}
                    />
                  </div>
                </div>
                <div className={styles.fol}>
                  <Image
                    src="/svgs/folder.svg"
                    alt="folder"
                    width={22}
                    height={19}
                  />
                </div>
                <div>
                  <div
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    className={styles.edit}
                  >
                    edit <div className={styles.emoji}></div>
                  </div>
                </div>
                <div className={styles.send}>
                  <div className={styles.imj}>
                    <Image
                      src="/svgs/send.svg"
                      alt="send"
                      width={17.84}
                      height={15.56}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={expanded ? styles["none"] : styles["rightpane"]}>
            <div
              className={styles["close"]}
              onClick={() => setExpanded(!expanded)}
            >
              <Image src="/svgs/close.svg" alt="close" width={14} height={14} />
            </div>
            <div className={styles.txt}>
              <p>Your contact profile </p>
              <p id={styles.up}>appears here</p>
            </div>
          </div>
        </div>

        {state ? (
          <ModalContext.Provider value={{ state, setState }}>
            <ModalA
              onClick={() => {
                setExpanded(false);
                setState(!state);
              }}
              expanded={expanded}
            />
          </ModalContext.Provider>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
