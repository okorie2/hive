import React from "react";
import Footerr from "./Footer";
import styles from "./signin.module.css";
import Link from "next/link";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ResetPassword() {
  return (
    <>
      <div className={styles.bg}>
          <div className={styles["hiveright"] + " " + styles["hivetopleft"]}><p>Hive</p></div>
        <div className={styles.forgotcard + " " + styles.push}>
            <img></img>
            <p className={styles.hiveright}>Set new password</p>
            <span>Your new password should be strong an unique</span>
            <form>
            <label>Password</label>
            <input type='password' ></input>
            <label>Confirm Password</label>
            <input type='password' ></input>
            <br/>
            <button className={styles.resetbutton}>Reset Password</button>
            </form>
            <div className={styles.resetam}><Link href="/auth/Signin"><a><ArrowBackIcon/> <span>Back to log in</span></a></Link></div>
            
        </div>
        
        <Footerr />
      </div>
    </>
  );
}
