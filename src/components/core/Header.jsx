import React, { useState, useContext, useRef } from "react";
import { Link } from "gatsby";
import { ThemeContext } from "../../providers/Theme-provider";
import styled from "styled-components";
import {
  MenuIcon,
  DropdownArrow,
  ZorigLogo,
  // CloseIcon,
} from "../../assets/icons";
import { Button, Stack, Text, Padding } from ".";
import "../../styles/animationsStyles.css";
import { motion, useCycle } from "framer-motion";
import useWindowDimensions from "../../functions/useWindowDimensions";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="#fff"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }) => (
  <button className="button1" onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

const variants = {
  closed: {
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
    y: 50,
  },
  open: {
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
    y: 0,
  },
};

const MenuItem = ({ text, status }) => {
  if (status === "normal") {
    return (
      <motion.li
        className="animationLi"
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Stack justifyContent={"flex-end"}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Text color={"#fff"}>{text}</Text>
          </Link>
        </Stack>
      </motion.li>
    );
  }
  if (status === "tittle") {
    return (
      <motion.li
        className="animationLi"
        variants={variants}
        style={{ cursor: "default" }}
      >
        <Stack justifyContent={"flex-end"}>
          <Text type={"H2"} color={"#fff"}>
            {text}
          </Text>
        </Stack>
      </motion.li>
    );
  }
  if (status === "button") {
    return (
      <motion.li
        className="animationLi"
        variants={variants}
        style={{ cursor: "default" }}
      >
        <Button
          title={text}
          bgColor={"#fff"}
          f_size={"T3"}
          f_weight={500}
          color={"primary-blue"}
        />
      </motion.li>
    );
  }
};

const sidebar = {
  closed: {
    clipPath: "circle(0px at 92.5vw 40px)",
    transition: {
      damping: 40,
      delay: 0.5,
      stiffness: 400,
      type: "spring",
    },
  },
  open: (height = 2000) => ({
    clipPath: `circle(${height * 2 + 200}px at 95vw 40px)`,
    transition: {
      restDelta: 2,
      stiffness: 20,
      type: "spring",
    },
  }),
};
const variants1 = {
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
  open: {
    transition: { delayChildren: 1, staggerChildren: 0.07 },
  },
};

const Navigation = ({ state }) => (
  <motion.ul className="animationUl" variants={variants1}>
    <Link
      to="/"
      style={{
        left: "32px",
        opacity: state ? "1" : "0",
        position: "absolute",
        top: state ? "-75px" : "-55px",
        transition: "all 0.5s",
        transitionDelay: state ? "0" : "0.5s",
      }}
    >
      <ZorigLogo />
    </Link>

    {data.map((el, i) => (
      <MenuItem status={el.status} text={el.text} key={i} />
    ))}
  </motion.ul>
);

const data = [
  { status: "tittle", text: "Бидний тухай" },
  { status: "normal", text: "Зоригийн тухай" },
  { status: "normal", text: "Хамт олон" },
  { status: "normal", text: "Бидний үнэт зүйлс" },
  { status: "normal", text: "Тэргүүний мэндчилгээ" },
  { status: "tittle", text: "Хөтөлбөрүүд" },
  { status: "normal", text: "Оюутан залууст зориулсан" },
  { status: "normal", text: "Залуу мэргэжилтнүүдэд зориулсан" },
  { status: "normal", text: "Сурагчдад зориулсан хөтөлбөр" },
  { status: "normal", text: "Орон нутгийн залууст зориулсан" },
  { status: "button", text: "хандив өгөх" },
];

const Example = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useWindowDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <MenuToggle toggle={() => toggleOpen()} />
      <Navigation state={isOpen} />
    </motion.nav>
  );
};

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
            {/* <MenuIcon color={color === "primary-white" ? "#fff" : "#000"} /> */}
          </HeaderMenuIcon>
          <Example />
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
                    to="/our-values"
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
        <HeaderMobileMenu
          style={{ display: menu === false ? "none" : "block" }}
        >
          <Padding size={[24, 24, 0, 24]}>
            <Stack justifyContent={"space-between"} alignItems={"center"}>
              <Link to="/" style={{ display: "flex" }}>
                <ZorigLogo />
              </Link>
              <div style={{ cursor: "pointer" }} onClick={() => setMenu(!menu)}>
                {/* <CloseIcon /> */}
                <Example />
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
  z-index: 10;
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
