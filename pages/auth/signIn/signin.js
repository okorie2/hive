import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import React, { useEffect } from "react";
import Footerr from "../components/footer";
import styles from "../signin.module.css";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";

import Link from "next/link";
import FormWrapper from "./form";
import Form from "./form";

export default function Signin() {
  const router = useRouter();
  console.log(router.pathname);
  const { token } = router.query;
  console.log(token);

  useEffect(() => {
    if (token) {
      toast.success("Email confirmed Successfully!", { autoClose: 4000 });
    }
  }, []);

  return (
    <>
      <div className={styles.bg}>
        <div className={styles.mainRec} id={styles.signin}>
          <div className={styles.txt}>
            <h2> Hive</h2>
            <p>Log in to your account</p>
          </div>
          <div className={styles.btnRw}>
            <div>
              <button>
                <span>
                  <img
                    src="https://img.icons8.com/color/50/000000/google-logo.png"
                    fontSize="small"
                    id={styles.gIcon}
                    alt="gimage"
                  />

                  {/* <GoogleIcon  /> */}
                </span>
                Log in with Google
              </button>
            </div>

            <div>
              <button>
                <span>
                  <FacebookIcon fontSize="small" id={styles.fbIcon} />
                </span>
                Log in with Facebook
              </button>
            </div>
          </div>
          <div className={styles.dRow}>
            <div className={styles.bBom}></div>
            <div>or</div>
            <div className={styles.bBom}></div>
          </div>
          <div className={styles.formContainer}>
            <Form />
          </div>
        </div>
        <div className={styles.push}></div>
        <Footerr />
      </div>
    </>
  );
}
