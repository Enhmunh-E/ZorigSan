import React, { useEffect, useState } from "react";
import { MenuIcon } from "../assets/icons";
import {
  HeaderStyle,
  HeaderMenuCon,
  HeaderMenu,
  HeaderMenuIcon,
  HeaderItems,
  HeaderLinks,
} from "./HeaderStyle";

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
            <div>Бидний тухай</div>
            <div>Хөтөлбөрууд</div>
            <div>Хамтрагч байгуулгууд</div>
            <div>Мэдээ</div>
            <div>хандив өгөх</div>
          </HeaderLinks>
        </HeaderMenuCon>
      </HeaderItems>
    </HeaderStyle>
  );
};

export { Header };