import React from "react";
import Image from "next/image";

import { BackG, WhiteCard } from "./onboardingStyles";
import TopPane from "../../component/panes/topPane";
import { ButtonHighlight } from "../../styles/components/buttons/buttonHiglight";

export default function AddSuccess() {
  return (
    <BackG>
      <TopPane />
      <WhiteCard>
        <div className="checkDiv">
          <Image
            src="/pngs/check.png"
            id="welcomeimg"
            alt="peopleonPC"
            height={148}
            width={148}
          />
        </div>
        <div className="text">
          <p>
            Your contacts have been successfully <br />
            added
          </p>
        </div>
        <ButtonHighlight>Continue</ButtonHighlight>
      </WhiteCard>
    </BackG>
  );
}
