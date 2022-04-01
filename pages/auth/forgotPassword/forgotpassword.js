import React from "react";
import Image from "next/image";
import Footerr from "../components/footer";
import { BgAuth, ForgotCard, HiveTopLeft } from "../signIn/signinStyles";

export default function ForgotPass() {
  return (
    <>
      <BgAuth>
        <HiveTopLeft>
          <p>Hive</p>
        </HiveTopLeft>
        <ForgotCard>
          <div>
            <Image
              src="/svgs/forgoticon.svg"
              alt="lock"
              height={50}
              width={50}
            />
          </div>
          <p className="hiveright">Forgot your password?</p>
          <span>Enter your email address and a link will be sent to you</span>
          <form>
            <label>Email Address</label>
            <input type="text" placeholder="ekejohn123@gmail.com"></input>
            <br />
            <div className="forgotbutton">
              <button>Send</button>
            </div>
          </form>

        </ForgotCard>
        {/* <div className={styles.push}></div> */}

        </div>

        <Footerr />
      </BgAuth>
    </>
  );
}
