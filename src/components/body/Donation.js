import React from "react";
import styled from "styled-components";
import { Text, Button } from "../core";
// Stack
/* eslint-disable */
/* eslint-disable react/prop-types */
/* eslint-disable complexity */

const Container = styled.div`
  background-color: rgb(243, 243, 247);
  width: ${(props) => (props.width ? props.width : "")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Flex = styled.div`
  width: ${(props) => (props.width ? props.width : "")};
  padding-top: ${(props) => (props.PaddingTop ? props.PaddingTop : "")};
  padding-bottom: ${(props) =>
    props.PaddingBottom ? props.PaddingBottom : ""};
  display: flex;
  text-align: center;
`;

export const Donation = ({ text }) => {
  return (
    <Container width="100%">
      <Flex
        width="500px"
        PaddingTop="144px"
        PaddingBottom="128px"
        style={{
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Text type="H1" color="#243C6C" style={{ paddingBottom: "62px" }}>
          {text}
        </Text>
        <Button
          title={"хандив өгөх"}
          width={190}
          b_radius={3}
          f_weight={1}
          f_size="24px"
          type={"arrow"}
          bgColor={"primary-blue"}
          color={"primary-white"}
        />
      </Flex>
    </Container>
  );
};
