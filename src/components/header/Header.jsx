import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { MenuIcon } from "../../assets/icons";
import { Button } from "../Button";
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

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [menuBack, setMenuBack] = useState(false);
  useEffect(() => {
    window.innerWidth <= 1000 ? setMenu(false) : setMenu(true);
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
        <div>LOGO</div>
        <HeaderMenu onClick={menuFunc}>
          <HeaderMenuIcon>
            <MenuIcon />
          </HeaderMenuIcon>
        </HeaderMenu>
        <HeaderMenuCon style={{ display: menu === false ? "none" : "flex" }}>
          <HeaderMenuBackground
            style={{ opacity: menuBack === false ? 0 : 1 }}
          ></HeaderMenuBackground>
          <HeaderLinks style={{ right: menuBack === false ? "-350px" : 0 }}>
            <HeaderMenu onClick={menuFunc}>
              <HeaderMenuIcon>
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
            <Button width={163} height={48} f_weight={1}>
              хандив өгөх
            </Button>
          </HeaderLinks>
        </HeaderMenuCon>
      </HeaderItems>
    </HeaderStyle>
  );
};

export { Header };
