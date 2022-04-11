import React from "react";
import styled from "styled-components";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";
const Container = styled.div`
  width: 100vw;
  height: 533px;
  display: flex;
  flex-direction: column;
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
