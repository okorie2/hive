import React from "react";
import Footerr from "./Footer";
import styles from "./signin.module.css";
import Link from "next/link";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ResetSuccessful() {
  return (
    <>
      <div className={styles.bg}>
          <div className={styles["hiveright"] + " " + styles["hivetopleft"]}><p>Hive</p></div>
        <div className={styles.forgotcard}>
            <img></img>
            <p className={styles.hiveright}>Password Reset</p>
            <span>Your password has been successfully reset</span>
            <br/>
            <button className={styles.successbut}>Login</button>
            
        </div>
        <Footerr />
      </div>
    </>
  );
}
