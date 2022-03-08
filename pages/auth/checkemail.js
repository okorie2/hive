import React from "react";
import Footerr from "./footer";
import styles from "./signin.module.css";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function CheckMail() {
  return (
    <>
      <div className={styles.bg}>
        <div className={styles["hiveright"] + " " + styles["hivetopleft"]}>
          <p>Hive</p>
        </div>
        <div className={styles.forgotcard}>
          <img></img>
          <p className={styles.hiveright}>Check your mail</p>
          <span>A link Has been sent to owhondahsam@gmail.com</span>
          <button className={styles.checkembutton}>Open email app</button>
          <br />
          <div className={styles.checkspan}>
            <span>
              Didn’t receive the email? <b>Resend</b>
            </span>
          </div>
          <br />
          <div className={styles.checkam}>
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
