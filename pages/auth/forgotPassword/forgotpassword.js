import React from "react";
import styles from "../signin.module.css";
import Image from "next/image";
import Footerr from "../components/footer";

export default function ForgotPass() {
  return (
    <>
      <div className={styles.bgauth}>
        <div className={styles["hiveright"] + " " + styles["hivetopleft"]}>
          <p>Hive</p>
        </div>
        <div className={styles.forgotcard}>
          <div>
            <Image
              src="/svgs/forgoticon.svg"
              alt="lock"
              height={50}
              width={50}
            />
          </div>
          <p className={styles.hiveright}>Forgot your password?</p>
          <span>Enter your email address and a link will be sent to you</span>
          <form>
            <label>Email Address</label>
            <input type="text" placeholder="ekejohn123@gmail.com"></input>
            <br />
            <div className={styles.forgotbutton}>
              <button>Send</button>
            </div>
          </form>
        </div>
        <Footerr />
      </div>
    </>
  );
}
