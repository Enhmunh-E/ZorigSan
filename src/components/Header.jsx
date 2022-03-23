import React from "react";
import { HeaderStyle, HeaderItems, HeaderLinks } from "./HeaderStyle";

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderItems>
        <div>LOGO</div>
        <HeaderLinks>
          <div>Бидний тухай</div>
          <div>Хөтөлбөрууд</div>
          <div>Хамтрагч байгуулгууд</div>
          <div>Мэдээ</div>
          <div>хандив өгөх</div>
        </HeaderLinks>
      </HeaderItems>
    </HeaderStyle>
  );
};

export { Header };