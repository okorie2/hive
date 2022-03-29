import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import React, { useEffect } from "react";
import Footerr from "../components/footer";
import styles from "../signin.module.css";
import Image from "next/image";
import { BtnRw, DRow, FacebookButton, FormContainer, GoogleButton, } from "../signUp/signUpStyles";
import {Bg, MainRecc, Push} from "./signinStyles"
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
                    id="gIcon"
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
                  <FacebookIcon fontSize="small" id="fbIcon" />
                </span>
                Log in with Facebook
              </FacebookButton>
            </div>
          </BtnRw>
          <DRow>
            <div className="bBom"></div>
            <div>or</div>
            <div className="bBom"></div>
          </DRow>
          <FormContainer>
            <Form />
            <div><Link href="">Forgot Password?</Link></div>
          </FormContainer>
        </MainRecc>
        <Push></Push>
        <Footerr />
      </Bg>
    </>
  );
}
