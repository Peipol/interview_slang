import type { FunctionComponent } from "react";
import styled from "styled-components";

interface TitleProps {
  size? : number
}

const StyledTitle = styled.h1<TitleProps>`
  color: transparent;
  font-size: calc(10px + ${props => props.size}vmin);
  text-align: center;
  text-shadow:
    0px 0px 1.8px #fff,
    2px 2px 3px #ff6bb4,
    2px 3px 5px #ff9ecf,
    2px 3px 8px #ffd1e8;
`

const Title: FunctionComponent<TitleProps> = ({ children = "Title", size = 9 }) => {
  return <StyledTitle size={size}>{children}</StyledTitle>;
};

export default Title;
