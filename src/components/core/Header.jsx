import React, { useState, useContext } from "react";
import { Link } from "gatsby";
import { ThemeContext } from "../../providers/Theme-provider";
import styled from 'styled-components'
import {
  MenuIcon,
  DropdownArrow,
  ZorigLogo,
  CloseIcon,
} from "../../assets/icons";
import { Button, Stack, Text, Padding } from ".";


export const Header = ({ color }) => {
  const [menu, setMenu] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const { Theme } = useContext(ThemeContext);
  let themeColor = color.includes("primary")
    ? Theme.primary[color]
    : Theme.secondary[color];

  return (
    <HeaderStyle
      style={
        color === "primary-blue"
          ? {
              backgroundColor: "#fff",
              position: "fixed",
            }
          : {
              backgroundColor: "transparent",
              position: "static",
            }
      }
    >
      <HeaderItems>
        <Link to="/" style={{ display: "flex" }}>
          <ZorigLogo />
        </Link>
        <HeaderMenu>
          <HeaderMenuIcon onClick={() => setMenu(!menu)}>
            <MenuIcon color={color === "primary-white" ? "#fff" : "#000"} />
          </HeaderMenuIcon>
        </HeaderMenu>
        <HeaderMenuCon>
          <HeaderLinks style={{ right: menu === false ? "-100vw" : 0 }}>
            <HeaderMenu>
              <HeaderMenuIcon onClick={() => setMenu(!menu)}>
                <MenuIcon />
              </HeaderMenuIcon>
            </HeaderMenu>
            <Stack flexDirection={"column"}>
              <HeaderLink onClick={() => setDropDown(!dropDown)}>
                <Stack alignItems={"center"} gap={"16px"}>
                  <Text color={themeColor}>Бидний тухай</Text>
                  <HeaderDropDown
                    style={{
                      transform:
                        dropDown === false ? "rotate(0deg)" : "rotate(-180deg)",
                    }}
                  >
                    <DropdownArrow color={themeColor} />
                  </HeaderDropDown>
                </Stack>
              </HeaderLink>
              <HeaderDropDownItems
                style={{
                  maxHeight: dropDown === false ? "0px" : "152px",
                  opacity: dropDown === false ? 0 : 1,
                }}
              >
                <Stack flexDirection={"column"} gap={"8px"}>
                  <Link
                    style={{ height: "32px", textDecoration: "none" }}
                    to="/about-us"
                  >
                    <Text color={themeColor}>Зоригийн тухай</Text>
                  </Link>
                  <Link
                    style={{ height: "32px", textDecoration: "none" }}
                    to="/about-us"
                  >
                    <Text color={themeColor}>Тэргүүний мэндчилгээ</Text>
                  </Link>
                  <Link
                    style={{ height: "32px", textDecoration: "none" }}
                    to="/about-us"
                  >
                    <Text color={themeColor}>Бидний үнэт зүйлс</Text>
                  </Link>
                  <Link
                    style={{ height: "32px", textDecoration: "none" }}
                    to="/about-us"
                  >
                    <Text color={themeColor}>Хамт олон</Text>
                  </Link>
                </Stack>
              </HeaderDropDownItems>
            </Stack>
            <Link style={{ textDecoration: "none" }} to="/programs">
              <Text color={themeColor}>Хөтөлбөрууд</Text>
            </Link>
            <Button
              title={"хандив өгөх"}
              width={134}
              bgColor={color}
              f_size={"T3"}
              f_weight={500}
              bRadius={4}
              color={
                color === "primary-blue" ? "primary-white" : "primary-blue"
              }
            />
          </HeaderLinks>
        </HeaderMenuCon>
        <HeaderMobileMenu style={{ right: menu === false ? "-100vw" : "0" }}>
          <Padding size={[24, 24, 0, 24]}>
            <Stack justifyContent={"space-between"} alignItems={"center"}>
              <Link to="/" style={{ display: "flex" }}>
                <ZorigLogo />
              </Link>
              <div style={{ cursor: "pointer" }} onClick={() => setMenu(!menu)}>
                <CloseIcon />
              </div>
            </Stack>
            <Stack flexDirection={"column"} gap={"32px"}>
              <Stack justifyContent={"flex-end"}>
                <Text type={"H2"} color={"#fff"}>
                  Бидний тухай
                </Text>
              </Stack>
              <Stack justifyContent={"flex-end"}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Text color={"#fff"}>Зоригийн тухай</Text>
                </Link>
              </Stack>
              <Stack justifyContent={"flex-end"}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Text color={"#fff"}>Хамт олон</Text>
                </Link>
              </Stack>
              <Stack justifyContent={"flex-end"}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Text color={"#fff"}>Бидний үнэт зүйлс</Text>
                </Link>
              </Stack>
              <Stack justifyContent={"flex-end"}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Text color={"#fff"}>Тэргүүний мэндчилгээ</Text>
                </Link>
              </Stack>
              <Stack justifyContent={"flex-end"}>
                <Text type={"H2"} color={"#fff"}>
                  Хөтөлбөрүүд
                </Text>
              </Stack>
              <Stack justifyContent={"flex-end"}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Text color={"#fff"}>Оюутан залууст зориулсан</Text>
                </Link>
              </Stack>
              <Stack justifyContent={"flex-end"}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Text color={"#fff"}>Залуу мэргэжилтнүүдэд зориулсан</Text>
                </Link>
              </Stack>
              <Stack justifyContent={"flex-end"}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Text color={"#fff"}>Сурагчдад зориулсан хөтөлбөр</Text>
                </Link>
              </Stack>
              <Stack justifyContent={"flex-end"}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Text color={"#fff"}>Орон нутгийн залууст зориулсан</Text>
                </Link>
              </Stack>
              <Button
                title={"хандив өгөх"}
                bgColor={"#fff"}
                f_size={"T3"}
                f_weight={500}
                color={"primary-blue"}
              />
            </Stack>
          </Padding>
        </HeaderMobileMenu>
      </HeaderItems>
    </HeaderStyle>
  );
};

export default Header;

 const HeaderStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 1;
`;

 const HeaderItems = styled.div`
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

 const HeaderLinks = styled.div`
  gap: 40px;
  display: flex;
  align-items: center;
`;

 const HeaderLink = styled.div`
  font-family: "Montserrat";
  color: #fff;
  cursor: pointer;
`;

 const HeaderMenuCon = styled.div`
  display: flex;
  @media only screen and (max-width: 650px) {
    display: none;
  }
`;

 const HeaderMenu = styled.div`
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

 const HeaderMenuIcon = styled.div`
  height: 24px;
  width: 24px;
  cursor: pointer;
`;

 const HeaderDropDown = styled.div`
  transition: transform 0.2s;
`;

 const HeaderDropDownItems = styled.div`
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

 const HeaderMobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  background-color: #0c265c;
  transition: right 0.4s;
`;

