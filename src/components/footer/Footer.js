import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Input } from "../../components/body/Input";
import { Call } from "../../assets/icons/Call";
import { Email } from "../../assets/icons/Email";
import { Facebook } from "../../assets/icons/Fb";
import { Stack, Button } from "../core";
import { NestIcon } from "../../assets/icons";
/* eslint-disable */
/* eslint-disable react/prop-types */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  background: #0c265c;
`;
const FooterTop = styled.div`
  height: 642px;
  width: 1320px;
  padding-left: 32px;
  padding-right: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 1384px) {
    width: calc(100% - 64px);
  }
`;
const FooterBottom = styled.div`
  width: 100%;
  height: 56px;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 550px) {
    height: 96px;
  }
`;
const BigText = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;
const SmallText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  width: 100%;
`;
const BottomText = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 32px;
  letter-spacing: 0.001em;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const BottomCon = styled.div`
  width: 1320px;
  margin-left: 32px;
  margin-right: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 550px) {
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    margin-left: 0px;
    margin-right: 0px;
  }
`;
const Itmes = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.001em;
  color: #fff;
  padding-left: 8px;
`;
const Con = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 328px;
  height: 324px;
  padding-top: 20px;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const ItmeCon = styled.div`
  display: flex;
  gap: 72px;
  @media (max-width: 550px) {
    height: 150px;
    flex-direction: column-reverse;
    align-items: center;
    gap: 32px;
  }
`;
export const Footer = () => {
  return (
    <Container>
      <FooterTop>
        <Con>
          <Stack flexDirection={"column"} gap={"48px"}>
            <Stack flexDirection={"column"} alignItems={"center"} gap={"8px"}>
              <BigText>Дахиж битгий мартаарай</BigText>
              <SmallText>
                Та и-майлээрээ буртгүүлээд шинэ мэдээг шуурхай аваарай
              </SmallText>
            </Stack>
            <Stack
              style={{ width: "100%" }}
              flexDirection={"column"}
              gap={"24px"}
            >
              <Input
                placeholder="И-мэйлээ оруулна уу..."
                BackgroundColor="#fff"
                width="100%"
              />
              <Button
                title={"Бүртгүүлэх"}
                bgColor={"primary-light-blue"}
                f_size={"T3"}
                color={"primary-white"}
              />
            </Stack>
          </Stack>
        </Con>
        <ItmeCon>
          <Link
            to="/Test"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <Call />
            <Itmes>11223344</Itmes>
          </Link>
          <Link
            to="/Test"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <Email />
            <Itmes>admin@zorigfoundation.com</Itmes>
          </Link>
          <Link
            to="/Test"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <Facebook />
            <Itmes>Zorigfoundation</Itmes>
          </Link>
        </ItmeCon>
      </FooterTop>
      <FooterBottom>
        <BottomCon>
          <Link to="https://nestacademy.mn/" style={{ textDecoration: "none" }}>
            <BottomText>Made by Nest Academy <NestIcon/> </BottomText>
          </Link>
          <Link to="/Test" style={{ textDecoration: "underline #fff" }}>
            <BottomText>Үйлчилгээний нөхцөл</BottomText>
          </Link>
        </BottomCon>
      </FooterBottom>
    </Container>
  );
};

export default Footer;