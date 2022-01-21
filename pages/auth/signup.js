import React from "react";
import styles from "./signin.module.css";
import Image from "next/image";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Mockup from "../../Component/Laptop Mockup/Mockup";
import Footerr from "./Footer";
import LeftImage from "../../public/Rectangle302.jpg";

export default function Signup() {
  return (
    <>
      <div className={styles.authContainer}>
        <div className={styles.leftRec}>
          <div className={styles.leftRecLogo}>
         <div className={styles.leftRecLogologo}> <Image 
              src='/logooutline.svg' 
              alt='logo'
              height={30}
              width={30}/></div>
            <div className={styles.leftRecLogospan}><span>Hive</span></div>  
          </div>
          <div  className={styles.leftRectxt}>
            <span>
              Enjoy instant messaging with your contacts anytime, anywhere!
            </span>
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
                  className={styles.authInput + " "+ styles.authpass}
                  
                />
                <label>Password must be atleast 6 characters long</label>
              </div>
              <div className={styles.terms}>
                <div ><input type="checkbox"/></div>
                <div className={styles.termstxt}><span>Creating an account means you agree with our <Link href="#">Terms
                of Service</Link> and <Link href="#">Privacy Policy</Link></span></div>
              </div>
              <div className={styles.signupBtn}>
                <button>Create your account</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footerr />
    </>
  );
}
