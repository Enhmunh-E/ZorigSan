import styled from "styled-components";

export const Stack = styled.div`
  display: flex;
  ${(props) =>
    props.justifyContent ? `justify-content: ${props.justifyContent}` : ""};
  ${(props) => (props.alignItems ? `align-items: ${props.alignItems}` : "")};
  ${(props) =>
    props.flexDirection ? `flex-direction: ${props.flexDirection}` : ""};
  ${(props) => (props.flexWrap ? `flex-wrap: ${props.flexWrap}` : "")};
  ${(props) => (props.gap ? `gap: ${props.gap}` : "")};
  ${(props) => (props.rowGap ? `row-gap: ${props.rowGap}` : "")};
  ${(props) => (props.columnGap ? `column-gap: ${props.columnGap}` : "")};
  ${(props) => (props.textAlign ? `text-align: ${props.textAlign}` : "")};
  pointer-events: none;
`;

export default Stack;