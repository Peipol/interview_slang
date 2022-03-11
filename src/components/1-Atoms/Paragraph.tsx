import type { FunctionComponent } from "react";
import styled from "styled-components";

interface ParagraphProps {
  size?: number;
}

const StyledParagraph = styled.p<ParagraphProps>`
  text-align: left;
  font-size: calc(10px + ${(props) => props.size}vmin);
`;

const Paragraph: FunctionComponent<ParagraphProps> = ({
  children = "Text",
  size = 2,
}) => {
  return <StyledParagraph size={size}>{children}</StyledParagraph>;
};

export default Paragraph;
