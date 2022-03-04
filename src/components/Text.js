import styled from "styled-components";

const Text = styled.div`
font-size: ${({ size }) => {
  if (size == "heading1") return "40px";
  if (size == "heading2") return "35px";
  if (size == "heading3") return "30px";
  if (size == "title1") return "56px";
  if (size == "title1_bold") return "56px";
  if (size == "title2") return "56px";
  if (size == "title2_bold") return "56px";
  if (size == "title2_underline") return "56px";
  if (!size) return "20px";
}};
`;
export {Text}