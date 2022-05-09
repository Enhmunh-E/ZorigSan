import React, { useMemo } from "react";
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
import useWindowDimensions from "../../../functions/useWindowDimensions";

export const Banner = ({ description, image, title }) => {
  const { width } = useWindowDimensions();
  const bannerHeight = useMemo(() => {
    return width >= 541 ? "720px" : "400px";
  }, [width]);
  const phone = useMemo(() => {
    return width <= 540;
  }, [width]);
  return (
    <BannerCon bannerHeight={bannerHeight}>
      <Header color={"primary-white"} />
      <BannerTitleCon>
        <BannerHaalt1>
          <Haalt1 size={phone ? "small" : "big"} />
        </BannerHaalt1>
        <BannerTitle>
          <Text type={"Quote"} color={"#fff"}>
            {title}
          </Text>
        </BannerTitle>
        <BannerHaalt2>
          <Haalt2 size={phone ? "small" : "big"} />
        </BannerHaalt2>
        <BannerDescription>
          <Text style={{ color: "#fff" }} type="H2">
            {description}
          </Text>
        </BannerDescription>
        {phone === false && (
          <Button
            type={"arrow"}
            title={"Бидний тухай"}
            width={167}
            bgColor={"primary-white"}
            f_size={"T3"}
            f_weight={500}
            bRadius={4}
            color={"primary-blue"}
          />
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