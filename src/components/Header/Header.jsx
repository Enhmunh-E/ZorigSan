import React, { useState, useContext } from "react";
import { Link } from "gatsby";
import { ThemeContext } from "../../providers/Theme-provider";
import {
  MenuIcon,
  DropdownArrow,
  ZorigLogo,
  CloseIcon,
} from "../../assets/icons";
import { Button, Stack, Text, Padding } from "../core";
import {
  HeaderStyle,
  HeaderMenuCon,
  HeaderMenu,
  HeaderMenuIcon,
  HeaderItems,
  HeaderLinks,
  HeaderLink,
  HeaderDropDown,
  HeaderDropDownItems,
  HeaderMobileMenu,
} from "./HeaderStyle";

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
          <Padding size={[32, 32, 0, 32]}>
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
                <Text type={"H2"} color={themeColor}>
                  Бидний тухай
                </Text>
              </Stack>
              <Stack justifyContent={"flex-end"}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Text color={themeColor}>Зоригийн тухай</Text>
                </Link>
              </Stack>
              <Stack justifyContent={"flex-end"}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Text color={themeColor}>Хамт олон</Text>
                </Link>
              </Stack>
              <Stack justifyContent={"flex-end"}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Text color={themeColor}>Бидний үнэт зүйлс</Text>
                </Link>
              </Stack>
              <Stack justifyContent={"flex-end"}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Text color={themeColor}>Тэргүүний мэндчилгээ</Text>
                </Link>
              </Stack>
              <Stack justifyContent={"flex-end"}>
                <Text type={"H2"} color={themeColor}>
                  Хөтөлбөрүүд
                </Text>
              </Stack>
              <Stack justifyContent={"flex-end"}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Text color={themeColor}>Оюутан залууст зориулсан</Text>
                </Link>
              </Stack>
              <Stack justifyContent={"flex-end"}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Text color={themeColor}>
                    Залуу мэргэжилтнүүдэд зориулсан
                  </Text>
                </Link>
              </Stack>
              <Stack justifyContent={"flex-end"}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Text color={themeColor}>Сурагчдад зориулсан хөтөлбөр</Text>
                </Link>
              </Stack>
              <Stack justifyContent={"flex-end"}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Text color={themeColor}>Орон нутгийн залууст зориулсан</Text>
                </Link>
              </Stack>
              <Button
                title={"хандив өгөх"}
                bgColor={color}
                f_size={"T3"}
                f_weight={500}
                bRadius={4}
                color={
                  color === "primary-blue" ? "primary-white" : "primary-blue"
                }
              />
            </Stack>
          </Padding>
        </HeaderMobileMenu>
      </HeaderItems>
    </HeaderStyle>
  );
};

export default Header;