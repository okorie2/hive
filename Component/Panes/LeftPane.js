import React, { useEffect, useState } from "react";
import styles from "./leftPane.module.css";
import Image from "next/image";
import Link from "next/link";
export default function LeftPane() {
  const [newChat, setNewChat] = useState(false);
  const searchNewChat = (bool) => {
    setNewChat(bool);
  };

  return (
    <>
      <div className={styles.leftPane}>
        {!newChat ? (
          <div>
            <div className={styles.spans}>
              <div>
                <h4>Chats</h4>
              </div>
              <div className={styles.menuspot}>
                <div className={styles.menu}>
                  <Image src="/menu.svg" alt="profile" width={4} height={16} />
                </div>
              </div>
            </div>
            <div className={styles.search}>
              <input type="search" placeholder="Search" />
            </div>
            <div className={styles.nil}>
              <div className={styles.deet}>
                <p>No chats here</p>
                <Link href="#">
                  <a onClick={() => searchNewChat(true)}>Start a new chat </a>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className={styles.spans}>
              <div id={styles.nSpans}>
                {" "}
                <h4>
                  {" "}
                  <span onClick={() => setNewChat(false)}>
                    <Image
                      src="/arrowBack.svg"
                      alt="avi"
                      height={16}
                      width={16}
                    />
                  </span>
                  New Chat
                </h4>
              </div>
            </div>
            <div className={styles.search}>
              <input type="search" placeholder="Search" />
            </div>
            <div className={styles.srchLst}>
              <div className={styles.lst}>
                <span>
                  <Image src="/avi.svg" alt="avi" height={48} width={48} />
                </span>
                <span id={styles.sp}>@ellahokorie</span>
              </div>
              <div className={styles.lst}>
                <span>
                  <Image src="/avi.svg" alt="avi" height={48} width={48} />
                </span>
                <span id={styles.sp}>@joseph33</span>
              </div>
              <div className={styles.lst}>
                <span>
                  <Image src="/avi.svg" alt="avi" height={48} width={48} />
                </span>
                <span id={styles.sp}>@markjohanne</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
