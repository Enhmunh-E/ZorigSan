import React from "react";
import styled from "styled-components";
import FontSizes from "./Font_Sizes";
import Colors from "./Colors.js";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid
    ${({ type }) => {
        if (type === "secondary") {
          return Colors.primary["100"];
        }
        if (type === "tertiary") {
          return Colors.primary["400"];
        }
        return Colors.secondary["100"];
    }};
  border-radius: 10px;
  cursor: pointer;
  width: 258px;
  height: 46px;
  font-weight: 700;
  background-color: ${({ type }) => {
    let isOutline = type.split("-");
    if (isOutline.length === 2) {
      return "#FFFFFF";
    }
    if (isOutline[0] === "secondary") {
      return Colors.primary["100"];
    }
    if (isOutline[0] === "tertiary") {
      return Colors.primary["400"];
    }
    return Colors.secondary["100"];
  }};
  color: ${({ type }) => {
    let isOutline = type.split("-");
    if (isOutline.length === 2) {
      if (isOutline[0] === "secondary") {
        return Colors.primary["100"];
      }
      if (isOutline[0] === "tertiary") {
        return Colors.primary["400"];
      }
      return Colors.secondary["100"];
    }
    else {
      return '#FFFFFF'
    }
  }};
  font-size: ${(props) =>
    FontSizes[props.f_size] ? FontSizes[props.f_size] : "20px"};
`;
