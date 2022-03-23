import React from 'react';
import styled from 'styled-components';
import FontSizes from './FontSizes';
import Colors from './Colors.js';

const types = {
  primary: Colors.secondary['100'],
  secondary: Colors.primary['100'],
  tertiary: Colors.primary['400'],
};

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid
    ${({ type }) => {
    if (type) {
      return types[type.split('-')[0]];
    }
    return types.primary
  }};
  border-radius: 10px;
  cursor: pointer;
  width: ${(props) => props?.width ? props?.width : '258px'};
  height: ${(props) => props?.height ? props?.height : '46px'};
  font-weight: 700;
  background-color: ${({ type }) => {
    if(type){
      const isOutline = type.split('-');
      if (isOutline.length === 2) {
        return '#FFFFFF';
      }

      if (isOutline[0] === type) {
        return types[type];
      }
    } else {
      return types.primary
    }
  }};
  color: ${({ type }) => {
    if(type){
      const isOutline = type.split('-');
      if (isOutline.length === 2) {
          return types[isOutline[0]];
      } else {
        return '#FFFFFF';
      }
    } else {
      return '#FFFFFF';
    }
  }};
  font-size: ${(props) => (FontSizes[props.f_size] ? FontSizes[props.f_size] : '20px')};
`;
export default Button;