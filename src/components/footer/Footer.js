import React from "react";
import styled from "styled-components";
import { Input } from "../../components/body/Input";
import { Call } from "../../assets/icons/Call";
import { Email } from "../../assets/icons/Email";
import { Facebook } from "../../assets/icons/Fb";
import { Link } from "gatsby";
/* eslint-disable */
/* eslint-disable react/prop-types */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  background: #0c265c;
`;
const FooterTop = styled.div`
  height: 642px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: column;
  align-items: center;
  align-items: center;
  justify-content: space-evenly;
`;
const FooterBottom = styled.div`
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
  height: 64px;
`;
const BottomText = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 32px;
  letter-spacing: 0.001em;
  color: #ffffff;
`;
const BottomCon = styled.div`
  width: 1360px;
  margin-left: 40px;
  margin-right: 40px;
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
const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  width: 100%;
  height: 48px;
  background: #00669a;
  border-radius: 4px;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 8px;
`;
const Itmes = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.001em;
  color: #ffffff;
  padding-left: 8px;
`;
const Con = styled.div`
  display: flex;
  width: 320px;
  padding-left: 20px;
  padding-right: 20px;
  height: 324px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
  @media (max-width: 400px) {
    width: 80%;
  }
`;
const ItmeCon = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-evenly;
  @media (max-width: 1000px) {
    width: 80%;
  }
  @media (max-width: 550px) {
    height: 150px;
    justify-content: space-evenly;
    flex-direction: column-reverse;
    align-items: center;
  }
`;
export const Footer = () => {
  return (
    <Container>
      <FooterTop>
        <Con>
          <BigText>Дахиж битгий мартаарай</BigText>
          <SmallText>
            Та и-майлээрээ буртгүүлээд шинэ мэдээг шуурхай аваарай
          </SmallText>
          <Input
            placeholder="И-мэйлээ оруулна уу..."
            BackgroundColor="#fff"
            width="100%"
          />
          <Button>Бүртгүүлэх</Button>
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
          <Link to="/Test" style={{ textDecoration: "none" }}>
            <BottomText>Made by @Nest Academy</BottomText>
          </Link>
          <Link to="/Test" style={{ textDecoration: "underline  #fff" }}>
            <BottomText>Үйлчилгээний нөхцөл</BottomText>
          </Link>
        </BottomCon>
      </FooterBottom>
    </Container>
  );
};
export default Footer;
