import React from "react";
import styles from "../signin.module.css";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import Footerr from "../components/footer";

export default function ResetPassword() {
  return (
    <>
      <div className={styles.bgauth + " " + styles.resetbg}>
        <div className={styles.hiveright + " " + styles.hivetopleft}>
          <p>Hive</p>
        </div>
        <div className={styles.forgotcard}>
          <Image src="/resetlockicon.svg" alt="sent" height={50} width={50} />
          <p className={styles.hiveright}>Set new password</p>
          <span>Your new password should be strong an unique</span>
          <form>
            <div className={styles.resetpasswordinput}>
              <label>Password</label>
              <input type="password" placeholder="Enter password" />
              <span>Password must be atleast 6 characters long</span>
            </div>

            <label>Confirm Password</label>
            <input type="password" placeholder="Re-enter Password"></input>
            <br />
            <div className={styles.resetbutton}>
              <button>Reset Password</button>
            </div>
          </form>
        </div>
        {/* <div className={styles.push}></div> */}
        <Footerr />
      </div>
    </>
  );
}
