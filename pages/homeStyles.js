import styled from "styled-components";

export const Nav = styled.div`
  display: grid;
  grid-template-columns: 55% auto auto auto auto auto;
  padding: 2% 4%;
  font-weight: 400;
  /* font-size: 15px; */
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
