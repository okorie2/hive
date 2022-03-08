import React, { useState } from "react";
import styles from "./signin.module.css";
import Image from "next/image";

import FacebookIcon from "@mui/icons-material/Facebook";

import Footerr from "./footer";

import { FormHandler } from "./components/signupForm";

export default function Signup() {
  return (
    <>
      <div className={styles.authContainer}>
        <div className={styles.leftRec}>
          <div className={styles.leftContent}>
            <div className={styles.leftRecLogo}>
              <div className={styles.leftRecLogologo}>
                {" "}
                <Image
                  src="/svgs/logooutline.svg"
                  alt="logo"
                  height={30}
                  width={30}
                />
              </div>
              <div className={styles.leftRecLogospan}>
                <span>Hive</span>
              </div>
            </div>
            <div className={styles.leftRectxt}>
              <span>
                Enjoy instant messaging with your contacts anytime, anywhere!
              </span>
            </div>
          </div>
        </div>

        <div className={styles.mainRec}>
          <div className={styles.txt}>
            <h2>Sign up to Hive</h2>
            <p>
              Create your account quick and easy and connect <br /> with your
              friends
            </p>
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
                </span>
                Sign up with Google
              </button>
            </div>

            <div>
              <button>
                <span>
                  <FacebookIcon fontSize="small" id={styles.fbIcon} />
                </span>
                Sign up with Facebook
              </button>
            </div>
          </div>

          <div className={styles.dRow}>
            <div className={styles.bBom}></div>

            <div>or</div>
            <div className={styles.bBom}></div>
          </div>
          <div className={styles.formContainer}>
            <FormHandler />
          </div>
        </div>
      </div>

      <Footerr />
    </>
  );
}
