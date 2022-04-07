import FacebookIcon from "@mui/icons-material/Facebook";
import Link from 'next/link'
import React, { useEffect } from "react";
import Footerr from "../components/footer";

import {
  BtnRw,
  DRow,
  FacebookButton,
  FormContainer,
  GoogleButton,
} from "../signUp/signUpStyles";
import { Bg, MainRecc, Push } from "./signinStyles";

import { useRouter } from "next/router";
import {  toast } from "react-toastify";

import Form from "./form";
import Image from "next/image";

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

  //sammy fix cors :(

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
                  <Image
                    src="https://img.icons8.com/color/50/000000/google-logo.png"
                  width={17}
                  height={17}
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
            <div>
              <Link href="">Forgot Password?</Link>
            </div>
          </FormContainer>
        </MainRecc>
        <Push></Push>
        <Footerr />
      </Bg>
    </>
  );
}
