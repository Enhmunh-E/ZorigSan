import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { MenuIcon } from "../../assets/icons";
import { Button } from "../core";
import { ZorigLogo } from "../../assets/icons";
import {
  HeaderStyle,
  HeaderMenuCon,
  HeaderMenu,
  HeaderMenuIcon,
  HeaderItems,
  HeaderLinks,
  HeaderLink,
  HeaderMenuBackground,
} from "./HeaderStyle";

export const Header = () => {
  const [menu, setMenu] = useState(false);
  const [menuBack, setMenuBack] = useState(false);
  useEffect(() => {
    window.innerWidth <= 960 ? setMenu(false) : setMenu(true);
  }, []);
  const menuFunc = () => {
    if (menu === true) {
      setMenuBack(!menuBack);
      setTimeout(() => {
        setMenu(!menu);
      }, 200);
    } else {
      setMenu(!menu);
      setTimeout(() => {
        setMenuBack(!menuBack);
      }, 200);
    }
  };
  return (
    <HeaderStyle>
      <HeaderItems>
        <Link to="/" style={{ display: "flex" }}>
          <ZorigLogo />
        </Link>
        <HeaderMenu>
          <HeaderMenuIcon onClick={menuFunc}>
            <MenuIcon />
          </HeaderMenuIcon>
        </HeaderMenu>
        <HeaderMenuCon style={{ display: menu === false ? "none" : "flex" }}>
          <HeaderMenuBackground
            style={{ opacity: menuBack === false ? 0 : 1 }}
          ></HeaderMenuBackground>
          <HeaderLinks style={{ right: menuBack === false ? "-350px" : 0 }}>
            <HeaderMenu style={{ padding: "32px" }}>
              <HeaderMenuIcon onClick={menuFunc}>
                <MenuIcon />
              </HeaderMenuIcon>
            </HeaderMenu>
            <Link style={{ textDecoration: "none" }} to="/about-us">
              <HeaderLink>Бидний тухай</HeaderLink>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/programs">
              <HeaderLink>Хөтөлбөрууд</HeaderLink>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/sponsors">
              <HeaderLink>Хамтрагч байгуулгууд</HeaderLink>
            </Link>
            <Button
              title={"хандив өгөх"}
              width={134}
              bgColor={"primary-white"}
              f_size={"T3"}
              f_weight={500}
              bRadius={3}
              color={"primary-blue"}
            />
          </HeaderLinks>
        </HeaderMenuCon>
      </HeaderItems>
    </HeaderStyle>
  );
};

export default Header;