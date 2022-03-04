import styled from "styled-components";

const Text = styled.div`
font-size: ${({ size }) => {
  if (size == "heading1") return "40px";
  if (size == "heading2") return "35px";
  if (size == "heading3") return "30px";
  if (size == "title1") return "56px";
  if (size == "title1bold") return "56px";
  if (size == "title2") return "56px";
  if (size == "title2bold") return "56px";
  if (size == "title2underline") return "56px";
  if (!size) return "20px";
}};
`;
export {Text}