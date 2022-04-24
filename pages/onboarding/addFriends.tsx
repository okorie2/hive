import React from "react";

import {
  BackG,
    WhiteCard
  } from "./onboardingStyles";
import { ButtonHighlight } from "styles/components/buttons/buttonHiglight";

export default function AddFriend() {
  return (
    <BackG>
      <WhiteCard>
      <div className="text">
            <h3>Add your friends to the Hive</h3>
            <p className = "addprompt">
            Enter the names of people you want <br />
             to add below
            </p>
            <input/>
     </div>
     <div className="addFriend">
      <ButtonHighlight>
        Add
      </ButtonHighlight>
     </div>
     
      </WhiteCard>
    </BackG>
  );
}
