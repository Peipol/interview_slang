import type { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
  children: string | ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const hoverBlur : number = 10;
const activeBlur : number = 20;

const StyledButton = styled.button<ButtonProps>`
  background-color: palevioletred;
  color: white;
  font-weight: bold;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 8px;
  box-shadow: 0px 0px 1.8px #fff, 2px 2px 3px #ff6bb4, 2px 3px 5px #ff9ecf,
    2px 3px 8px #ffd1e8;

  &:hover {
    background-color: #ebadc2;
    border-color: #ebadc2;
    color: #282c34;
    box-shadow: 
    0px 0px ${1.8 + hoverBlur}px #fff, 
    2px 2px ${3   + hoverBlur}px #ff6bb4,
    2px 3px ${5   + hoverBlur}px #ff9ecf, 
    2px 3px ${8   + hoverBlur}px #ffd1e8;
}
&:active {
    color: rgba(40, 44, 52, 0.50);
    background-color: #efbece;
    box-shadow: 
    0px 0px ${1.8 + activeBlur}px #fff,
    2px 2px ${3   + activeBlur}px #ff6bb4,
    2px 3px ${5   + activeBlur}px #ff9ecf,
    2px 3px ${8   + activeBlur}px #ffd1e8;
  }
  span {
      font-weight: bolder;
      /* -webkit-text-stroke: 2px black; */
      text-shadow:
      0 0 4px palevioletred,
      0 0 4px white;
  }
`;

const Button: FunctionComponent<ButtonProps> = ({ children = "Button", onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
