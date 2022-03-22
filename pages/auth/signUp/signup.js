import React, { useState } from "react";
import styles from "../signin.module.css";
import Image from "next/image";

import FacebookIcon from "@mui/icons-material/Facebook";

import Footerr from "../components/footer";

import FormWrapper from "./formHandler";

import { AuthContainer, BtnRw, DRow, FacebookButton, FormContainer, GoogleButton, LeftRec, MainRec } from "./signUpStyles";

export default function Signup() {
  return (
    <>
      <AuthContainer>
        <LeftRec>
          <div className="leftContent">
            <div className="leftRecLogo">
              <div className="leftRecLogologo">
                {" "}
                <Image
                  src="/svgs/logooutline.svg"
                  alt="logo"
                  height={30}
                  width={30}
                />
              </div>
              <div className="leftRecLogospan">
                <span>Hive</span>
              </div>
            </div>
            <div className= "leftRectxt">
              <span>
                Enjoy instant messaging with your contacts anytime, anywhere!
              </span>
            </div>
          </div>
        </LeftRec>

        <MainRec>
          <div className="txt">
            <h2>Sign up to Hive</h2>
            <p>
              Create your account quick and easy and connect <br /> with your
              friends
            </p>
          </div>
          <BtnRw>
            <div>
              <GoogleButton>
                <span>
                  <img
                    src="https://img.icons8.com/color/50/000000/google-logo.png"
                    fontSize="small"
                    alt="gimage"
                    id = "gIcon"
                  />
                </span>
                Sign up with Google
              </GoogleButton>
            </div>

            <div>
              <FacebookButton>
                <span>
                  <FacebookIcon
                    fontSize="small"
                    id = "fbIcon"  />
                </span>
                Sign up with Facebook
              </FacebookButton>
            </div>
          </BtnRw>

          <DRow>
            <div className="bBom"></div>

            <div>or</div>

            <div className="bBom"></div>
          </DRow>
          <FormContainer>
            <FormWrapper />
          </FormContainer>
        </MainRec>
      </AuthContainer>

      <Footerr />
    </>
  );
}
