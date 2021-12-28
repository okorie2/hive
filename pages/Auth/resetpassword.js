import React from "react";
import Footerr from "./Footer";
import styles from "./signin.module.css";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function ResetPassword() {
  return (
    <>
      <div className={styles.bg}>
        <div className={styles.hiveright + " " + styles.hivetopleft}>
          <p>Hive</p>
        </div>
        <div className={styles.forgotcard}>
          <p className={styles.hiveright}>Set new password</p>
          <span>Your new password should be strong an unique</span>
          <form>
            <label>Password</label>
            <input type="password" placeholder="Enter password"></input>
            <label>Confirm Password</label>
            <input type="password" placeholder="Re-enter Password"></input>
            <br />
            <button className={styles.resetbutton}>Reset Password</button>
          </form>
          <div className={styles.resetam}>
            <Link href="/Auth/Signin">
              <a>
                <ArrowBackIcon className={styles.arrowback} />{" "}
                <span>Back to log in</span>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.push}></div>
        <Footerr />
      </div>
    </>
  );
}
