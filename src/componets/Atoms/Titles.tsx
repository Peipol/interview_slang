import type { FunctionComponent } from "react";
import styled from "styled-components";

interface TitleProps {
  value: string;
}

const StyledTitle = styled.h1`
  color: hotpink;
`

const Title: FunctionComponent<TitleProps> = ({ value = "Title" }) => {
  return <StyledTitle>{value}</StyledTitle>;
};

export default Title;
