import { MainRecc } from "pages/auth/signIn/signinStyles";
import styled from "styled-components";

export const BackG = styled.div`
  background: #e5e5e5;
  height: 100vh;
  /* width: 100%; */
  padding-top: 0.1%;
`;

export const SelectPaper = styled.div`
  width: 85%;
  height: 10em;
  overflow-y: auto;
  margin: auto;
  background-color: #fefefe;
  p {
    font-family: "fertigo pro";
    color: #1d1c1d;
    font-weight: 400;
  }

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset #b0afb0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #b0afb0;
    border-radius: 5px;
    border: 1px solid #b0afb0;
  }

  .item-container {
    width: 100%;
    /* background-color: pink; */
    margin-bottom: 3%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    .item {
      display: flex;
      width: 30%;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 1.5%;
      font-family: "Open Sans";
      /* background-color: yellow; */

      div:nth-child(1) {
        /* background-color: pink; */
        flex-basis: 28%;
      }
      div:nth-child(2) {
        /* background-color: green; */
        flex-basis: 25%;
        flex-grow: 1;
      }
    }
  }
`;
export const WhiteCard = styled(MainRecc)`
  background-color: #fefefe;
  width: 40%;
  padding-bottom: 2%;
  margin-top: 5%;

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
    margin-top: 5%;
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
