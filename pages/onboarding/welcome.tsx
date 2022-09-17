import React from "react";
import Image from "next/image";

import { BackG, WhiteCard } from "../../styles/pages/onboardingStyles";
import { useRouter } from "next/router";
import { ButtonHighlight } from "../../styles/components/buttons/buttonHiglight";
import TopPane from "../../component/panes/topPane";

export default function Onboarding() {
  const router = useRouter();
  const toAddFriends = () => {
    router.push("/onboarding/addFriends");
  };
  return (
    <BackG>
      <TopPane />
      <WhiteCard>
        <div className="imageDiv">
          <Image
            src="/pngs/peopleonPc.png"
            id="welcomeimg"
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
        <ButtonHighlight onClick={toAddFriends}>Continue</ButtonHighlight>
      </WhiteCard>
    </BackG>
  );
}
