import styled from "styled-components";
import { MainRec } from "../signUp/signUpStyles";

export const Bg = styled.div`
  background-color: #e5e5e5;
  padding-top: 7%;

`;

export const MainRecc = styled(MainRec)`
padding-top: 1%;

margin: auto;
width: 34%;
padding-bottom: 4%;

/* margin-top: 7%; */

.txt {
  text-align: center;
  }
`;

export const AuthInputContainer = styled.form`
.authInputContainer {
  margin-left: 4%;
  margin-bottom: 2%;

  label, p {
  font-size: smaller;
  }

  a {
  color: #4ab5e1; 
  }

  .authInput {
  padding: 2.6%;
  outline: none;
  border: none;
  background-color: none;

  /* margin: auto; */
  width: 100%;

  /* background-color: #fff; */
  /* border-radius: 5px; */
  /* border-color: #c4c4c4; */
  /* border: 1px solid rgba(0, 0, 0, 0.12); */
  &::placeholder{
  color: #1d1c1d;
  }
  }
  .authpass::placeholder {
  background-image: url(../../public/passworddots.svg);
  background-repeat: no-repeat;
  background-position: 1% 50%;
}

}
`;