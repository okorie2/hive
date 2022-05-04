import styled from "styled-components";
import img from "/public/pngs/bg.png";

export const Nav = styled.div`
  display: grid;
  grid-template-columns: 55% auto auto auto auto auto;
  padding: 2% 4%;
  font-weight: 400;
  align-items: center;

  .active {
    width: 60%;
    font-size: larger;
    font-weight: 500;
    align-items: center;
    display: grid;
    grid-template-columns: 10% auto;
  }

  .hiveright {
    font-family: "Fertigo", sans-serif;
    text-align: left;
    margin-left: 1.5%;
  }

  button {
    cursor: pointer;
  }
`;

export const Navlist = styled.div`
  button {
    width: 70%;
    padding: 8%;
    border: 1.5px solid #45b4e0;
    background-color: #fff;
    color: #45b4e0;
    border-radius: 5px;
  }
`;

export const Tugrid = styled.div`
  display: grid;
  width: 76%;
  margin: auto;
  grid-template-columns: 65% 35%;
  margin-top: 5%;
`;

export const Left = styled.div`
  width: 65%;

  h1 {
    font-weight: 520;
    font-family: "Fertigo", sans-serif;
    font-size: 32px;
  }

  p {
    font-size: small;
    font-weight: 400;
    font-size: 16px;
  }

  button {
    border: none;
    background-color: #45b4e0;
    color: white;
    padding: 3% 4%;
    /* height: 90px; */
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
  }
`;

export const Right = styled.div`
  /* background-color: #f5f5f5; */
  /* width: 95%;
  height: 85%; */
  /* padding: 10% 0; */
  /* height: 100%; */
  margin-top: -13%;
  /* margin: auto; */

  .txt {
    width: 50%;
    margin: auto;
    margin-top: 20%;
  }
`;

export const Mid = styled.div`
  background-color: #e3f3fa;
  height: 60%;
  margin-top: 5%;
  padding-bottom: 4%;

  h2 {
    text-align: center;
    padding: 3%;
    font-weight: 400;
    font-size: 1.4rem;
    font-family: "Fertigo", sans-serif;
  }
`;

export const Trigrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  width: 80%;
  margin: auto;
  font-size: small;

  text-align: center;

  h4 {
    font-weight: 500;
  }
`;

export const Box = styled.div`
  width: 50px;
  height: 40px;
  background-color: #fff;
  padding-top: 1%;
  margin: auto;
`;

export const Smc = styled.div`
  /* width: 30px;s
  height: 30px;
  border-radius: 50%; */
  margin-top: 12%;
  /* background-color: #f0f0f0; */
  /* margin: auto; */
`;

export const Tod = styled.section`
  /* background-color: black; */
  margin-top: 3%;
  margin-bottom: 5%;
`;

export const TodGrid = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: auto auto;
`;

export const Rii = styled.div`
  padding: 3%;
  font-size: 0.9rem;

  h4 {
    font-weight: 400;
    font-family: "Fertigo", sans-serif;
    font-size: 1rem;
  }

  b {
    font-weight: 600;
    /* font-size: 18px; */
  }
`;

export const FeatureHeader = styled.div`
  font-family: "Fertigo", sans-serif;
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 1.7rem;
  margin-top: 6%;
  margin-bottom: 5%;
`;

export const MiniGrid = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
  margin-bottom: 5%;

  span {
    color: #616061;
  }
`;

export const Bullet = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 5%;
`;

export const FeatureText = styled.div`
  font-family: "Open Sans";
`;

export const FeatureSpan = styled.div`
  width: 70%;
  margin-top: 3%;
`;

export const Center = styled.section`
  background: linear-gradient(
      to right,
      rgba(1, 2, 29, 0),
      rgba(13, 13, 14, 0.596)
    ),
    //  url(".../public/pngs/bg.png")
    url(${img.src});

  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 423px;
  overflow: auto;
  color: white;

  button {
    cursor: pointer;
  }

  .activetext {
    font-family: "Open Sans";
  }
`;

export const Cent = styled.div`
  margin-top: 10%;

  p {
    font-weight: 400;
    margin-left: 22%;
    margin-top: 1%;
    /* margin: auto; */
    font-size: 20px;
    width: 55%;
    text-align: center;
  }

  button {
    margin-left: 41%;
    border: none;
    background-color: #45b4e0;
    color: white;
    padding: 1% 4%;
    border-radius: 5px;
    font-size: 1rem;
  }
`;

export const Active = styled.div`
  display: grid;
  width: 6%;
  grid-template-columns: 40% 60%;
  margin: auto;
  font-family: "Fertigo", sans-serif;
  align-items: center;
`;

export const Spot = styled.div`
  text-align: left;
`;

export const Hive = styled.div`
  text-align: right;
`;

export const Footer = styled.footer`
  background-color: #1d1d1d;
  /* padding: 1%; */
  color: #fff;
  font-size: small;
  padding-bottom: 2%;

  .ftGrid {
    padding: 1%;
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: auto auto auto auto;

    h4 {
      text-transform: uppercase;
    }

    li {
      float: left;
      list-style-type: none;
      padding-right: 4%;
    }

    ul {
      margin-left: -10%;
    }
  }
  .copy {
    text-align: center;
  }
`;
