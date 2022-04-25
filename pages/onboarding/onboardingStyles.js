import { Bg, MainRecc } from "pages/auth/signIn/signinStyles";
import styled from "styled-components";

export const BackG = styled(Bg)`
  background: #e5e5e5;
  height: 100vh;
  width: 100%;
  padding-top: 6%;
`;

export const WhiteCard = styled(MainRecc)`
  background-color: #fefefe;
  width: 40%;
  padding-bottom: 2%;

  .checkDiv {
    display: flex;
    justify-content: center;
    width: 20%;
    margin-left: 40%;
    margin-top: 5%;
  }

  .addFriend {
    display: flex;
    justify-content: center;
    margin-top: 30%;
  }

  .addFriend button {
    width: 20%;
    margin-left: 0;
  }

  .text {
    margin: auto 0;
    text-align: center;
    padding-bottom: 2%;
  }
  .text p {
    color: #616061;
    font-family: "Open Sans";
    font-size: 0.8rem;
  }

  .text .addprompt {
    font-family: "Open Sans";
    word-spacing: 1.5px;
    margin-top: 1%;
  }
  .text h2 {
    font-weight: 500;
    font-style: bold;
    font-family: "Fertigo", sans-serif;
    font-size: 1.2rem;
  }
  .text h3 {
    font-weight: 300;
    font-style: bold;
    font-family: "Fertigo", sans-serif;
    font-size: 1rem;
    margin-bottom: 0;
  }

  input {
    border-radius: 7px;
    padding: 15px;
    border: 0.5px solid #dae3dc;
    width: 85%;
  }

  .imageDiv {
    margin-top: 4%;
    display: flex;
    justify-content: center;
  }

  button {
    margin-left: 30%;
    margin-top: 5%;
  }
`;
