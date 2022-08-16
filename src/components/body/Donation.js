import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../../context/Provider";
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

export const Donation = () => {
  const { isDonationModalOpen, setIsDonationModalOpen } = useContext(Context);
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
        <Text type="T0" color="#243C6C" style={{ paddingBottom: "62px" }}>
          ЗОРИГ САН-Д ХАНДИВ ӨГӨӨРЭЙ
        </Text>
        <Button
          title={"Хандив өгөх"}
          onClick={() => {
            setIsDonationModalOpen(!isDonationModalOpen);
          }}
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
