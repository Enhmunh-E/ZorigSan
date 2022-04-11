import React from "react";
import styled from "styled-components";
import WebLogo from "../../assets/icons/HLogo";
import { Link } from "gatsby";

const Container = styled.div`
  width: 80%;
  height: 306px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid  #E5E7EB;

  // @media (max-width: 1401px) {
  //   justify-content: space-between;
  //   flex-direction: row;
  // }
  @media (max-width: 623px) {
    width: 100%;
    height: 672px;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    border-top:none;
  }
`;
const SmallText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.25px;
  color: #202020;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin: 16px 0px;
  word-break: break-word;
  @media (max-width: 415px) {
    text-align: center;
  }
`;
const BigText = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #202020;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 16px 0px;
  display: flex;
  justify-content: center;
  word-break: break-word;
  @media (max-width: 415px) {
    text-align: center;
  }
`;

export const FooterBottom = () => {
  return (
    <Container>
      <WebLogo />
      <div>
        <BigText>Services</BigText>
        <Link><SmallText>Link 1</SmallText></Link>
        <Link><SmallText>Link 1</SmallText></Link>
        <Link><SmallText>Link 1</SmallText></Link>
      </div>
      <div>
        <BigText>Company</BigText>
        <Link><SmallText>Link 1</SmallText></Link>
        <Link> <SmallText>Link 1</SmallText></Link>
        <Link><SmallText>Link 1</SmallText></Link>
      </div>
      <div>
       <BigText>Contact</BigText>
        <Link><SmallText>Link 1</SmallText></Link>
        <Link><SmallText>Link 1</SmallText></Link>
        <Link><SmallText>Link 1</SmallText></Link>
      </div>
    </Container>
  );
};
export default FooterBottom;
