import React, { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import { Header } from "../../header";
import { Text, Button } from "../../core";
import { Haalt1, Haalt2 } from "../../../assets/icons";
import {
  BannerCon,
  BannerImg,
  BannerImgFilter,
  BannerHaalt1,
  BannerHaalt2,
  BannerTitleCon,
  BannerTitle,
  BannerDescription,
} from "./BannerStyle";

export const Banner = ({ description, image, title }) => {
  const [phone, setPhone] = useState(false);
  const [bannerHeight, setBannerHeight] = useState(false);
  useEffect(() => {
    window.innerWidth <= 540 ? setPhone(true) : setPhone(false);
    setBannerHeight(window.innerWidth >= 540 ? "720px" : "400px");
  }, []);
  const GlobalStyle = createGlobalStyle`
  body {
      margin: 0;
      overflow-x: hidden;
  }
  `;
  return (
    <BannerCon bannerHeight={bannerHeight}>
      <GlobalStyle />
      <Header />
      <BannerTitleCon>
        <BannerHaalt1>
          <Haalt1 size={phone === true ? "small" : "big"} />
        </BannerHaalt1>
        <BannerTitle>
          <Text style={{ width: "89%" }} type={"Quote"} color={"#fff"}>
            {title}
          </Text>
        </BannerTitle>
        <BannerHaalt2>
          <Haalt2 size={phone === true ? "small" : "big"} />
        </BannerHaalt2>
        <BannerDescription>
          <Text style={{ color: "#fff" }} type="H2">
            {description}
          </Text>
        </BannerDescription>
        {phone === false ? (
          <Button
            type={"arrow"}
            title={"Бидний тухай"}
            width={167}
            bgColor={"primary-white"}
            f_size={"T3"}
            f_weight={500}
            bRadius={3}
            color={"primary-blue"}
          />
        ) : (
          <></>
        )}
      </BannerTitleCon>
      <BannerImg
        bannerHeight={bannerHeight}
        style={{ backgroundImage: `url(${image})` }}
      />
      <BannerImgFilter bannerHeight={bannerHeight}></BannerImgFilter>
    </BannerCon>
  );
};