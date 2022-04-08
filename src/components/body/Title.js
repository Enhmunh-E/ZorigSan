import React from "react";
import styled from "styled-components";
const Titlediv = styled.div`
  font-family: "PT Serif";
  font-style: normal;
  font-weight: 400;
  letter-spacing: 1.5px;
  text-align: center;
  align-items: center;
  margin: 24px 0px;
  color: #202020;
  width: ${(props) => props.width};
`;
const Heading = styled.p`
  font-size: 40px;
  line-height: 53px;
  margin: none;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin: 24px 0px;
`;
const SubHeading = styled.p`
  font-size: 12px;
  line-height: 24px;
`;
export const Title = (prop) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Titlediv width={prop.width}>
        <Heading>{prop.title}</Heading>
        <SubHeading>{prop.subtitle}</SubHeading>
      </Titlediv>
    </div>
  );
};
