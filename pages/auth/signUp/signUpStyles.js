import styled from "styled-components";
import img from "/public/pngs/Rectangleleft.png";


export const Terms = styled.div`
  width: 92%;
  margin: auto;
  margin-top: 4%;
  display: grid;
  grid-template-columns: 5% 95%;

  .termstxt {
    margin-left: 2%;
    color: #616061;
    font-size: 0.8rem;
    width: 90%;
  }
`;

export const SignUpBtn = styled.div`
  text-align: center;
  margin-top: 5%;
`;

export const AuthContainer = styled.div`
  background-color: #e5e5e5;
    display: grid;
    margin: auto;
    width: 100%;
    grid-template-columns: 50% 50%;
    /* padding-bottom: 5%; */
`;

export const LeftRec = styled.div`
  background-image: url(${img.src});
  background-repeat: no-repeat;
  background-size: cover;

  .leftContent {
    margin-top: 80%;
  }

  .leftRecLogo {
    margin: auto;
    /* text-align: center; */
    align-items: center;
    color: white;
    font-family: "Fertigo", sans-serif;
    display: grid;
    grid-template-columns: 50% 50%;
    width: 6rem;
    height: 2.5rem;
    background-image: url("../../public/svgs/logooutline.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left;
  }

  .leftRecLogospan {
    font-size: 1.3rem;
    text-align: right;
  }

  .leftRectxt {
    margin: auto;
    width: 45%;
    text-align: center;
    color: white;
    font-family: "Open Sans";
    margin-top: 3%;
  }
`;

export const MainRec = styled.div`
  padding-top: 5%;
  width: 70%;
  border-radius: 10px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
  background-color: #fff;
  font-family: "Open Sans", sans-serif;
  margin: auto;
  margin-top: 10%;
  margin-bottom: 10%;
  padding-bottom: 5%;

  .txt {
    margin-left: 5%;
    color: rgba(0, 0, 0, 0.8);
  }

  .txt p {
    color: #616061;
    font-family: "Open Sans";
    font-size: 0.8rem;
  }

  .txt h2 {
    font-weight: 400;
    font-family: "Fertigo", sans-serif;
    font-size: 1.2rem;
  }
`;

export const BtnRw = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin-left: 4.5%;
`;

export const DRow = styled.div`
    margin-top: 5%;
    margin-left: 34%;
    width: 60%;
    display: flex;
    flex-direction: row;
    /* margin: auto; */

    .bBom {
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);
      width: 20%;
    }
`;

export const FormContainer = styled.div`
  padding-top: 5%;

  label{
  color: #616061;
  }
`;


export const GoogleButton = styled.button`
width: 89%;
height: 152%;
background-color: #fff;
border: 1px solid rgba(0, 0, 0, 0.12);
border-radius: 5px;
font-family: "Open Sans", sans-serif;

&:hover{
  background-color: rgb(236, 234, 234);
}

span {
    font-size: 10px;
  }

  #gIcon {
    margin-bottom: -3%;
  margin-right: 4%;
  width: 1.5em;
  padding-bottom: 1.5%;
  }
`;

export const FacebookButton = styled.button`
width: 89%;
height: 152%;
background-color: #fff;
border: 1px solid rgba(0, 0, 0, 0.12);
border-radius: 5px;
font-family: "Open Sans", sans-serif;

&:hover{
  background-color: rgb(236, 234, 234);
}

span {
    font-size: 10px;
  }

  #fbIcon {
    margin-bottom: -3%;
    margin-right: 4%;
    color: #4460a0;
  }
`;