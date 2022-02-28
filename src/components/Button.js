import React from "react";
import styled from "styled-components";
import FontSizes from './Font_Sizes'

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  width: ${(props) => props.w}px;
  height: ${(props) => props.h}px;
  background-color: ${(props) => props.bg_color};
  color: ${(props) => props.text_color};
  font-size: ${(props) =>  FontSizes[props.f_size] ?  FontSizes[props.f_size] :  FontSizes.md}
`;

