import React from "react";
import styles from "./signin.module.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Mockup from "../../Component/Laptop Mockup/Mockup";
import Footerr from "./Footer";

export default function Signup() {
  return (
    <>
      <div className={styles.authContainer}>
        <Mockup />
        {/* <p>Enjoy instant messaging with your contacts anytime</p> */}
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
                  <FacebookIcon fontSize="small" id={styles.fbIcon} />
                </span>
                Sign up with Google
              </button>
            </div>

            <div>
              <button>
                <span>
                  <GoogleIcon fontSize="small" id={styles.gIcon} />
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
            <form>
              <div className={styles.authInputContainer}>
                <label>Username</label> <br />
                <input
                  type="text"
                  placeholder="john123"
                  className={styles.authInput}
                />
              </div>
              <div className={styles.authInputContainer}>
                <label>Email</label> <br />
                <input
                  type="email"
                  placeholder="Email"
                  className={styles.authInput}
                />
              </div>
              <div className={styles.authInputContainer}>
                <label>Password</label> <br />
                <input
                  type="password"
                  placeholder="*******"
                  className={styles.authInput}
                />
                <label>Password must be atleast 6 characters long</label>
              </div>
              {/* <div>
                <span></span> Creating an account means you agree with our Terms
                of Service and Privacy Policy{" "}
              </div> */}
              <div>
                <button className={styles.signupBtn}>Create Account</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footerr />
    </>
  );
}
