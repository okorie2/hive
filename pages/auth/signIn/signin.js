import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import React, { useEffect } from "react";
import Footerr from "../components/footer";
import styles from "../signin.module.css";
import {
  BtnRw,
  DRow,
  FacebookButton,
  FormContainer,
  GoogleButton,
} from "../signUp/signUpStyles";
import { Bg, MainRecc, AuthInputContainer } from "./signinStyles";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";

import Form from "./form";

export default function Signin() {
  const router = useRouter();
  console.log(router.pathname);
  const { token, msg } = router.query;
  console.log("hey", msg);

  useEffect(() => {
    if (token) {
      toast.info(msg, { autoClose: 4000 });
    }
  }, []);

  return (
    <>
      <Bg>
        <MainRecc>
          <div className="txt">
            <h2> Hive</h2>
            <p>Log in to your account</p>
          </div>
          <BtnRw>
            <div>
              <GoogleButton>
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
              </GoogleButton>
            </div>

            <div>
              <FacebookButton>
                <span>
                  <FacebookIcon fontSize="small" id={styles.fbIcon} />
                </span>
                Log in with Facebook
              </FacebookButton>
            </div>
          </BtnRw>
          <DRow>
            <div className={styles.bBom}></div>
            <div>or</div>
            <div className={styles.bBom}></div>
          </DRow>
          <div className={styles.formContainer}>
            <Form />
          </div>
        </MainRecc>
        <div className={styles.push}></div>
        <Footerr />
      </Bg>
    </>
  );
}
