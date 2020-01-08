import styled from "styled-components";
import {
  setColor,
  setLetterSpacing,
  setFont,
  setRem,
  setBorder,
  setTransition
} from "../../styles";

export const PrimaryBtn = styled.button`
  display: inline-block;
  background: ${setColor.primaryColor};
  color: ${setColor.mainWhite};
  text-transform: capitalize;
  font-size: ${setRem(18)};
  font-family: ${setFont.main};
  padding: ${setRem(18)} ${setRem(36)};
  border: ${setBorder({ color: setColor.primaryColor })};
  letter-spacing: ${setLetterSpacing(3)};
  transition: ${setTransition()};
  &:hover {
    background: transparent;
    color: ${setColor.primaryColor};
  }
  ${props =>
    `margin: ${props.top || 0} ${props.right || 0} ${props.bottom ||
      0} ${props.left || 0}`};
  text-decoration: none;
  cursor: pointer;
`;

export const SmallBtn = styled(PrimaryBtn)`
  padding: ${setRem(9)} ${setRem(12)};
`;
