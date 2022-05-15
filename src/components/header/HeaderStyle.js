import styled from "styled-components";

export const HeaderStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const HeaderItems = styled.div`
  width: 1320px;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 960px) {
    width: 100%;
    height: 69px;
    padding: 32px;
  }
  @media only screen and (max-width: 540px) {
    padding: 24px;
  }
`;

export const HeaderLinks = styled.div`
  gap: 40px;
  display: flex;
  align-items: center;
`;

export const HeaderLink = styled.div`
  font-family: "Montserrat";
  color: #fff;
  cursor: pointer;
`;

export const HeaderMenuCon = styled.div`
  display: flex;
  @media only screen and (max-width: 650px) {
    display: none;
  }
`;

export const HeaderMenu = styled.div`
  height: 24px;
  width: 24px;
  display: none;
  padding-left: 32px;
  padding-right: 32px;
  @media only screen and (max-width: 650px) {
    display: flex;
    height: 105px;
    width: calc(100% - 66px);
    justify-content: flex-end;
    align-items: center;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const HeaderMenuIcon = styled.div`
  height: 24px;
  width: 24px;
  cursor: pointer;
`;

export const HeaderDropDown = styled.div`
  transition: transform 0.2s;
`;

export const HeaderDropDownItems = styled.div`
  position: absolute;
  top: 100px;
  opacity: 0;
  max-height: 0px;
  transition: opacity 0.2s, max-height 0.2s;
  -webkit-transition: opacity 0.2s, max-height 0.2s;
  -moz-transition: opacity 0.2s, max-height 0.2s;
  -ms-transition: opacity 0.2s, max-height 0.2s;
  -o-transition: opacity 0.2s, max-height 0.2s;
  overflow: hidden;
  @media only screen and (max-width: 540px) {
    position: static;
    margin-top: 24px;
  }
`;

export const HeaderMobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  background-color: #0c265c;
  transition: right 0.4s;
`;