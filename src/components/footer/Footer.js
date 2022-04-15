import React from "react";
import styled from "styled-components";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";
const Container = styled.div`
  // width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 5% 0px 5%;
  @media (max-width: 623px) {
    padding: 0px;
  }
`  

export const Footer = () => {
  return (
    <Container>
      <FooterTop/>
      <FooterBottom/>
    </Container>
  );
};
export default Footer;
