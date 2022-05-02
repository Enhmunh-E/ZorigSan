import styled from "styled-components";
import Colors from "./Colors";

const types = {
  primary: Colors.secondary["100"],
  secondary: Colors.primary["100"],
  tertiary: Colors.primary["400"],
};

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid
    ${({ type }) => (type ? types[type.split("-")[0]] : types.primary)};
  border-radius: ${(props) =>
    props?.b_radius ? `${props?.b_radius}px` : "10px"};
  cursor: pointer;
  width: ${(props) => (props?.width ? `${props?.width}px` : "258px")};
  height: ${(props) => (props?.height ? `${props?.height}px` : "46px")};
  font-weight: ${(props) => (props?.f_weight ? props?.f_weight : "700")};
  background-color: ${({ type }) => {
    if (type) {
      const isOutline = type.split("-");
      if (isOutline.length === 2) return "#FFFFFF";
      if (isOutline[0] === type) return types[type];
    } else {
      return types.primary;
    }
  }};
  color: ${({ type }) =>
    type
      ? type.split("-").length === 2
        ? types[type.split("-")[0]]
        : "#FFFFFF"
      : "#FFFFFF"};
  font-size: '20px';
  letter-spacing: '0px'
`;
export default Button;
