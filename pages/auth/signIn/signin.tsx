import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
import React, { useEffect } from "react";
import Footerr from "../components/footer";

import {
  BtnRw,
  DRow,
  FacebookButton,
  FormContainer,
  GoogleButton,
} from "../../../styles/pages/signUpStyles";
import { Bg, MainRecc, Push } from "../../../styles/pages/signinStyles";

import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Image from "next/image";
// import Form from "./form";

export default function Signin() {
  const router = useRouter();
  console.log(router.pathname);
  const { token, msg } = router.query;
  console.log("hey", msg, token);

  useEffect(() => {
    if (token) {
      toast.info(msg, { autoClose: 4000 });
    }
  }, [token]);

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
            {/* <Form /> */}
            <div>
              <Link href="/auth/forgotPassword/forgotpassword">
                <a>Forgot Password?</a>
              </Link>
            </div>
          </FormContainer>
        </MainRecc>
        <Push></Push>
        <Footerr />
      </Bg>
    </>
  );
}
