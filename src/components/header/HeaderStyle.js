import styled from "styled-components";

export const HeaderStyle = styled.div`
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderItems = styled.div`
  width: 100%;
  display: flex;
  padding-left: 33px;
  padding-right: 33px;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLinks = styled.div`
  gap: 40px;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 1000px) {
    position: fixed;
    flex-direction: column;
    background-color: #fff;
    width: 300px;
    height: 100vh;
    top: 0;
    right: 0;
    transition: right 0.3s;
  }
`;

export const HeaderLink = styled.div`
  color: #000;
  cursor: pointer;
`;

export const HeaderMenuCon = styled.div`
  display: flex;
  @media only screen and (max-width: 1000px) {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    right: 0;
  }
`;

export const HeaderMenuBackground = styled.div`
  display: none;
  background-color: #0000004d;
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  transition: opacity 0.2s;
  @media only screen and (max-width: 1000px) {
    display: flex;
  }
`;

export const HeaderMenu = styled.div`
  height: 24px;
  width: 24px;
  display: none;
  cursor: pointer;
  @media only screen and (max-width: 1000px) {
    display: flex;
    height: 80px;
    width: calc(100% - 66px);
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const HeaderMenuIcon = styled.div`
  height: 24px;
  width: 24px;
`;

export default HeaderStyle;