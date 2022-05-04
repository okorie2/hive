import styled from "styled-components";
interface IBtnHiglightStyleProps {
  padding?: string;
}
export const ButtonHighlight = styled.button<IBtnHiglightStyleProps>`
  background-color: #4ab5e1;
  padding: ${(props) => (props.padding ? props.padding : "3% 2%")};
  border-radius: 5px;
  border: none;
  width: 40%;
  color: #fff;
  cursor: pointer;
`;
