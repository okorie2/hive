import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import React from "react";
import Footerr from "../components/footer";
import styles from "../signin.module.css";
import Image from "next/image";
import Link from "next/link";
import { BtnRw, DRow, FacebookButton, FormContainer, GoogleButton, } from "../signUp/signUpStyles";
import {Bg, MainRecc, AuthInputContainer} from "./signinStyles"

export default function Signin() {
  return (
    <>
      <Bg>
        <MainRecc>
          <div className = "txt">
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
          <FormContainer>
            <AuthInputContainer>
              <div className="authInputContainer">
                <label>Username or Email address</label> <br />
                <input
                  type="email"
                  placeholder="Email"
                  className="authInput"
                />
              </div>
              <div className="authInputContainer">
                <label>Password</label> <br />
                <input
                  type="password"
                  placeholder=" "
                  className={styles.authInput + " " + styles.authpass}
                />
                <br />
                <p className={styles.authsigninpass}>
                  <Link href="/auth/forgotpassword">
                    <a>Forgot Password?</a>
                  </Link>
                </p>
              </div>
              <div className={styles.signupBtn}>
                <button id={styles.signinBtn}>Login</button>
              </div>
            </AuthInputContainer>
          </FormContainer>
        </MainRecc>
        <div className={styles.push}></div>
        <Footerr />
      </Bg>
    </>
  );
}
