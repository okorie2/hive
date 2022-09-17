import React from "react";

import Footerr from "../components/footer";

import Link from "next/link";
import Image from "next/image";

import {
  BgAuthReset,
  HiveTopLeft,
  Push,
} from "../../../styles/pages/signinStyles";

export default function ResetSuccessful() {
  return (
    <>
      <BgAuthReset>
        <div className="resetsuccessbg">
          <HiveTopLeft>
            <p>Hive</p>
          </HiveTopLeft>
          <div className="forgotcard">
            <Image
              src="/svgs/resetsuccessicon.svg"
              alt="sent"
              height={50}
              width={50}
            />
            <p className="hiveright">Password Reset</p>
            <span>Your password has been successfully reset</span>
            <br />
            <Link href="/auth/signIn/signin">
              <button className="successbut">Login</button>
            </Link>
          </div>
          <Push></Push>
          <Footerr />
        </div>
      </BgAuthReset>
    </>
  );
}
