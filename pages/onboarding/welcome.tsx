import React from "react";
import Image from "next/image";

import {
  BackG,
    WhiteCard
  } from "./onboardingStyles";
import { ButtonHighlight } from "styles/components/buttons/buttonHiglight";

export default function Onboarding() {
  return (
    <BackG>
      <WhiteCard>
        <div className = "imageDiv">
        <Image
        src= "/pngs/peopleonPc.png"
        id = "welcomeimg"
        alt="peopleonPC"
        height={148}
        width={190}
        />
        </div>
        <div className="text">
            <h2>Welcome to Hive</h2>
            <p>
            Connect with your family and friends <br />
             easily, anywhere, anytime.
            </p>
        </div>
        <ButtonHighlight>Continue</ButtonHighlight>
     </WhiteCard>
    </BackG>
  );
}
