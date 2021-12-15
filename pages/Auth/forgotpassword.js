import React from "react";
import Footerr from "./Footer";
import styles from "./signin.module.css";

export default function ForgotPass() {
  return (
    <>
      <div className={styles.bg}>
          <div className={styles["hiveright"] + " " + styles["hivetopleft"]}><p>Hive</p></div>
        <div className={styles.forgotcard}>
            <img></img>
            <p className={styles.hiveright}>Forgot your password?</p>
            <span>Enter your email address and a link will be sent to you</span>
            <form>
            <label>Email Address</label>
            <input type='text' placeholder="ekejohn123@gmail.com"></input>
            <br/>
            <button className={styles.forgotbutton}>Send</button>
            </form>
        </div>
        <Footerr />
      </div>
    </>
  );
}
