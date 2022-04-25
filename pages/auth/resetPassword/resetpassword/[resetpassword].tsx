import React from "react";

import Footerr from "../../components/footer";

import Image from "next/image";
import { BgAuthReset, HiveTopLeft } from "../../signIn/signinStyles";
import Form from "./form";
import { useRouter } from "next/router";

export default function ResetPassword() {
  const router = useRouter();
  const resetpassword = router.query.resetpassword as string;
  console.log(resetpassword, "token");
  return (
    <>
      <BgAuthReset>
        <HiveTopLeft>
          <p>Hive</p>
        </HiveTopLeft>
        <div className="forgotCard">
          <Image
            src="/svgs/resetlockicon.svg"
            alt="sent"
            height={50}
            width={50}
          />
          <p className="hiveright">Set new password</p>
          <span>Your new password should be strong an unique</span>
          <Form token={resetpassword} />
          {/* <form>
            <div className="resetpasswordinput">
              <label>Password</label>
              <input type="password" placeholder="Enter password" />
              <span>Password must be atleast 6 characters long</span>
            </div>

            <label>Confirm Password</label>
            <input type="password" placeholder="Re-enter Password"></input>
            <br />

            <div className="resetbutton">
              <button>Reset Password</button>
            </div>
          </form> */}
        </div>
        {/* <div className={styles.push}></div> */}
        <Footerr />
      </BgAuthReset>
    </>
  );
}
