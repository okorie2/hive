import React, { useState } from "react";
import styles from "./signin.module.css";
import Image from "next/image";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";

import Mockup from "../../Component/Laptop Mockup/Mockup";
import Footerr from "./Footer";
import LeftImage from "../../public/Rectangle302.jpg";
import { useDispatch } from "react-redux";
import { handleAuth } from "../../redux/actions/auth";
import { FormHandler } from "./components/signupForm";

export default function Signup() {
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState({
    username: "string",
    email: "user@example.com",
    first_name: "string",
    last_name: "string",
    image_url: "string",
    password: "string",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
    console.log(name, value);
  };

  const registerUser = (e) => {
    e.preventDefault();
    dispatch(handleAuth(userDetails));
  };
  return (
    <>
      <div className={styles.authContainer}>
        <div className={styles.leftRec}>

          <div className={styles.leftContent}>
            <div className={styles.leftRecLogo}>
              <div className={styles.leftRecLogologo}>
                {" "}
                <Image
                  src="/logooutline.svg"
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
