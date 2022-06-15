import React, { useState, useContext, useRef, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { ThemeContext } from "../../providers/Theme-provider";
import styled from "styled-components";
import {
  MenuIcon,
  DropdownArrow,
  ZorigLogo,
  // CloseIcon,
} from "../../assets/icons";
import { Button, Stack, Text, Padding, Modal } from ".";
import "../../styles/animationsStyles.css";
import ZorigsanText from "../../assets/icons/ZorigsanText";
import { motion, useCycle } from "framer-motion";
import useWindowDimensions from "../../functions/useWindowDimensions";
import { DonationModal } from "./DonationModal";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="#fff"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle, color, state }) => (
  <button className="button1" onClick={toggle}>
    <svg width="30" height="30" viewBox="0 0 23 23">
      <Path
        stroke={color === "primary-blue" && state !== true ? "#0C265C" : "#fff"}
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        stroke={color === "primary-blue" && state !== true ? "#000" : "#fff"}
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        stroke={color === "primary-blue" && state !== true ? "#000" : "#fff"}
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

const MenuItem = ({ text, status, link }) => {
  if (status === "normal") {
    return (
      <motion.li
        className="animationLi"
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Stack justifyContent={"flex-end"}>
          <Link to={`/${link}`} style={{ textDecoration: "none" }}>
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
    transition: { delayChildren: 0.2, staggerChildren: 0.07 },
  },
};

const Example = ({ col, data = [] }) => {
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
      <MenuToggle state={isOpen} color={col} toggle={() => toggleOpen()} />
      <motion.ul
        style={{ display: isOpen ? "block" : "none" }}
        className="animationUl"
        variants={variants1}
      >
        <Link
          to="/"
          style={{
            left: "32px",
            opacity: isOpen ? "1" : "0",
            position: "absolute",
            top: isOpen ? "-75px" : "-55px",
            transition: "all 0.5s",
            transitionDelay: isOpen ? "0" : "0.5s",
          }}
        >
          <ZorigLogo />
        </Link>

        {data.map((el, i) => (
          <MenuItem link={el.link} status={el.status} text={el.text} key={i} />
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export const Header = ({ color }) => {
  // console.log(ids);
  const contentfulData = useStaticQuery(graphql`
    query a {
      allContentfulProgramTypes {
        nodes {
          contentful_id
          title
        }
      }
    }
  `);

  const [menuData, setMenuData] = useState([
    { status: "tittle", text: "Бидний тухай" },
    { link: "about-zorig", status: "normal", text: "Зоригийн тухай" },
    { link: "about-us", status: "normal", text: "Хамт олон" },
    { link: "our-values", status: "normal", text: "Бидний үнэт зүйлс" },
    { link: "greeting", status: "normal", text: "Тэргүүний мэндчилгээ" },
    { status: "tittle", text: "Хөтөлбөрүүд" },
  ]);

  useEffect(() => {
    if (contentfulData) {
      let temp = [];
      temp = contentfulData.allContentfulProgramTypes.nodes.map((prog) => ({
        link: prog.contentful_id,
        status: "normal",
        text: prog.title,
      }));

      setMenuData([
        ...menuData,
        ...temp,
        { status: "button", text: "Xандив өгөх" },
      ]);
    }
  }, [contentfulData]);

  const [menu, setMenu] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [modal, setModal] = useState(false);
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
        <Link to="/" style={{ display: "flex", textDecoration: "none" }}>
          <ZorigsanText
            color={color === "primary-blue" ? "#0C265C" : "white"}
          />
        </Link>
        <HeaderMenu>
          <HeaderMenuIcon onClick={() => setMenu(!menu)}>
            {/* <MenuIcon color={color === "primary-white" ? "#fff" : "#000"} /> */}
          </HeaderMenuIcon>
          <Example col={color} data={menuData} />
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
                color={color}
                style={{
                  maxHeight: dropDown === false ? "0px" : "152px",
                  opacity: dropDown === false ? 0 : 1,
                }}
              >
                <Stack flexDirection={"column"} gap={"8px"}>
                  <Link
                    style={{ height: "32px", textDecoration: "none" }}
                    to="/about-zorig"
                  >
                    <Hover color={color}>
                      <Text color={themeColor}>Зоригийн тухай</Text>
                    </Hover>
                  </Link>
                  <Link
                    style={{ height: "32px", textDecoration: "none" }}
                    to="/greeting"
                  >
                    <Hover color={color}>
                      <Text color={themeColor}>Тэргүүний мэндчилгээ</Text>
                    </Hover>
                  </Link>
                  <Link
                    style={{ height: "32px", textDecoration: "none" }}
                    to="/our-values"
                  >
                    <Hover color={color}>
                      <Text color={themeColor}>Бидний үнэт зүйлс</Text>
                    </Hover>
                  </Link>
                  <Link
                    style={{ height: "32px", textDecoration: "none" }}
                    to="/about-us"
                  >
                    <Hover color={color}>
                      <Text color={themeColor}>Хамт олон</Text>
                    </Hover>
                  </Link>
                </Stack>
              </HeaderDropDownItems>
            </Stack>
            <Link style={{ textDecoration: "none" }} to="/programs">
              <Hover color={color}>
                <Text color={themeColor}>Хөтөлбөрүүд</Text>
              </Hover>
            </Link>
            <Button
              title={"Хандив өгөх"}
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
                onClick={() => setModal(true)}
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
      {modal === true ? (
        <Modal setModal={setModal}>
          <DonationModal setModal={setModal} />
        </Modal>
      ) : (
        <></>
      )}
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
const Hover = styled.div`
  background-image: ${(props) =>
    `${props.color}` !== "primary-blue"
      ? "linear-gradient(to right, #fff, #fff 50%, #fff 50%) "
      : "linear-gradient(to right, #0C265C, #0C265C 50%,#0C265C 50%)"};
  background-size: 200% 100%;
  background-position: -100%;
  display: inline-block;
  padding: 5px 0;
  position: relative;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;

  :before {
    content: "";
    background: ${(props) =>
      `${props.color}` !== "primary-blue" ? "#fff " : "#0C265C"};
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 1px;
    transition: all 0.3s ease-in-out;
  }

  :hover {
    background-position: 0;
  }

  :hover::before {
    width: 100%;
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
  background-color: ${(props) =>
    `${props.color}` !== "primary-blue" ? "transparent " : "#fff"};
  padding: 24px;
  margin-left: -24px;
  border-radius: 0 0 32px 32px;
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
