import styled from "styled-components";

export const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  cursor: pointer;
  border: 1px solid;
  padding: 0;
  background-color: ${(props) => (props?.bgColor ? props?.bgColor : "#fff")};
  border-color: ${(props) =>
    props?.borderColor ? `${props?.borderColor}` : props?.bgColor};
  border-radius: ${(props) =>
    props?.b_radius ? `${props?.b_radius}px` : "3px"};
  width: ${(props) => (props?.width ? `${props?.width}px` : "120px")};
  font-family: "Montserrat";
  font-weight: ${(props) => (props?.f_weight ? props?.f_weight : "500")};
  letter-spacing: ${(props) =>
    props?.l_spacing ? `${props?.l_spacing}px` : "0px"};
`;

export default ButtonStyle;