import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { MenuIcon } from "../../assets/icons";
import { Button } from "..";
import {
  HeaderStyle,
  HeaderMenuCon,
  HeaderMenu,
  HeaderMenuIcon,
  HeaderItems,
  HeaderLinks,
  HeaderLink,
} from ".";

const Header = () => {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    window.innerWidth <= 1000 ? setMenu(false) : setMenu(true);
  }, []);
  return (
    <HeaderStyle>
      <HeaderItems>
        <div>LOGO</div>
        <HeaderMenu onClick={() => setMenu(!menu)}>
          <HeaderMenuIcon src={MenuIcon} />
        </HeaderMenu>
        <HeaderMenuCon style={{ right: menu === false ? "-100vw" : 0 }}>
          <HeaderLinks style={{ right: menu === false ? "-350px" : 0 }}>
            <HeaderMenu onClick={() => setMenu(!menu)}>
              <HeaderMenuIcon src={MenuIcon} />
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