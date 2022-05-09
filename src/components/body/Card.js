import React from "react";
import "../../styles/Cards.css";
import styled from "styled-components";
import { Text, Stack } from "../core";

const Container = styled.div`
  width: 1320px;
  display: flex;
  height: fit-content;
  align-items: center;
  gap: 102px;
  @media only screen and (max-width: 1384px) {
    width: calc(100% - 64px);
    padding-left: 32px;
    padding-right: 32px;
    gap: 51px;
  }
`;
const Line = styled.div`
  width: 25px;
  height: 1px;
  background-color: black;
`;
const Image = styled.img`
  width: 50%;
  border-radius: 8px;
`;

export const Card = ({
  image,
  first,
  name,
  description,
  imgwidth,
  imgheight,
  type,
  margin,
}) => {
  let borderradius;
  let direction;
  let width;
  let height;
  let minwidth;
  let minheight;
  let fontsize;
  if (typeof image === "object") image = JSON.stringify(image);
  if (type === "small") {
    const { window_width } = GetWindowSize();
    direction = "column";
    first = "image";
    borderradius = "0";
    margin = "0";
    if (window_width < 600) {
      width = "90vw";
      imgwidth = "85vw";
      imgheight = "65vw";
    } else {
      width = "22.5vw";
      imgwidth = "22.5vw";
      imgheight = "16.5vw";
    }
  }
  // I HAVE NOT DONE THE MOBILE VERSION SXDFGHJKLKJHGFDFGHJYTGFVGBHJUYTGFCDVBNHJUYTRFDCVBHYTRFDCXVHU
  return (
    <Container
      margin={margin}
      direction={direction}
      height={height}
      type={type}
      width={width}
    >
      {first === "image" && (
        <Image
          borderradius={borderradius}
          width={imgwidth}
          height={imgheight}
          src={image}
          minheight={minheight}
          minwidth={minwidth}
        />
      )}
      <Stack flexDirection={"column"} gap={"40px"}>
        <Text type={"H3"}>{name}</Text>
        <Text
          type={"T2"}
          style={{
            "-webkit-box-orient": "vertical",
            "-webkit-line-clamp": 4,
            display: "-webkit-box",
            lineHeight: "20px",
            maxHeight: "119px",
            overflow: "hidden",
          }}
        >
          {description}
        </Text>
        <Stack alignItems={"center"} gap={"24px"}>
          <Text type={"T4"}>Дэлэгрэнгүй</Text>
          <Line />
        </Stack>
      </Stack>
      {first != "image" && (
        <Image width={imgwidth} height={imgheight} src={image} />
      )}
    </Container>
  );
};

export default Card;