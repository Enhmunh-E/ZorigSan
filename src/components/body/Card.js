import React from "react";
import "../../styles/Cards.css";
import styled from "styled-components";
import { Text, Stack } from "../core";

const Container = styled.div`
  width: 1320px;
  display: flex;
  height: fit-content;
  justify-content: space-between;
  align-items: center;
  gap: 102px;
  @media screen and (max-width: 1384px) {
    width: 100%;
  }
  @media screen and (max-width: 960px) {
    gap: 40px;
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
  width,
  key,
}) => {
  if (typeof image === "object") image = JSON.stringify(image);
  console.log(key);
  return (
    <Container width={width}>
      {first === "image" && (
        <Image width={imgwidth} height={imgheight} src={image}></Image>
      )}
      <div>
        <Stack flexDirection={"column"} gap={"40px"}>
          <Text type={"H3"}>{name}</Text>
          <Text
            type={"T2"}
            style={{
              "-webkit-box-orient": "vertical",
              "-webkit-line-clamp": 4,
              display: "-webkit-box",
              lineHeight: "1.6rem",
              maxHeight: "130px",
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
      </div>
      {first != "image" && (
        <Image width={imgwidth} height={imgheight} src={image}></Image>
      )}
    </Container>
  );
};

export default Card;