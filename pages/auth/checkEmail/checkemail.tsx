import React, { useEffect } from "react";
import Footerr from "../components/footer";
import styles from "../signin.module.css";
import Link from "next/link";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { handleForgotPassword } from "redux/actions/auth/forgotPassword";
import { toast } from "react-toastify";
import { RootState } from "redux/reducers";

export default function CheckMail() {
  const dispatch = useDispatch();
  const router = useRouter();
  const email = router.query.email as string;

  const resendEmail = () => {
    dispatch(handleForgotPassword(email));
  };

  const { data, error } = useSelector(
    (state: RootState) => state.forgotPassword
  );

  const alert = () => {
    if (data?.status === 200) {
      toast.success(data && data?.data?.message, { autoClose: 4000 });
    } else if (error.status) {
      toast.warn(error && error?.data?.data?.message, { autoClose: 4000 });
    }
  };

  console.log(data.status);
  useEffect(() => {
    alert();
  }, [data, error.status]);

  const openEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <>
      <div className={styles.bgauth}>
        <div className={styles["hiveright"] + " " + styles["hivetopleft"]}>
          <p>Hive</p>
        </div>
        <div className={styles.forgotcard}>
          <Image
            src="/svgs/sentmailicon.svg"
            alt="sent"
            height={50}
            width={50}
          />
          <p className={styles.hiveright}>Check your mail</p>
          <span>A link Has been sent to {email}</span>
          <button className={styles.checkembutton} onClick={openEmail}>
            Open email app
          </button>
          <br />
          <div className={styles.checkspan}>
            <span>
              Didn’t receive the email?
              <a onClick={resendEmail}> Resend</a>
            </span>
          </div>
          <br />
          <div className={styles.checkam}>
            <Link href="/auth/signIn/signin">
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
