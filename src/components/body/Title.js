import React from "react";
import styled from "styled-components";
import { Text, Stack } from "../core/";
const Titlediv = styled(Stack)`
  text-align: center;
  align-items: center;
  margin: 24px 0px;
  color: ${(props) => props.color};
  width: ${(props) => props.width};
`;


export const Title = (prop) => {
  return (
      <Titlediv width={prop.width} flexDirection="column" gap="32px">
        <Text type="H1" color='primary-blue' style={{textTransform:"uppercase"}}>{prop.title}</Text>
        <Text type="T3">{prop.subtitle}</Text>
      </Titlediv>
  );
};
