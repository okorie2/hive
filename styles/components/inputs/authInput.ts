import styled from "styled-components";
interface IAuthStyleProps {
  border: string;
}
export const AuthInput = styled.input`
  padding: 2.6%;
  outline: none;
  border: none;
  background-color: none;
  border-radius: 5px;

  width: 100%;
`;

export const InputContainer = styled.div<IAuthStyleProps>`
  display: flex;
  border-radius: 5px;
  background-color: #fff;
  border: ${(props) =>
    props.border ? props.border : "1.5px solid rgba(0, 0, 0, 0.12)"};
  /* margin: auto; */
  position: relative;
  width: 94%;
`;

export const InputIcon = styled.div`
  position: absolute;
  right: 3%;
  top: 19%;
  cursor: pointer;
`;

export const AuthInputContainer = styled.div`
  margin-left: 4%;
  margin-bottom: 2%;
  //   background-color: yellow;
  label,
  p {
    font-size: smaller;
    text-transform: capitalize;
  }
`;
