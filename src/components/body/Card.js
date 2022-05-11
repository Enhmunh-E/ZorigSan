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
const LongText = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  display: -webkit-box;
  line-height: 20px;
  overflow: hidden;
`;
export const Card = ({
  image,
  name,
  description,
  imgwidth,
  imgheight,
  width,
  index,
}) => {
  if (typeof image === "object") image = JSON.stringify(image);
  console.log(index);
  return (
    <Container width={width}>
      {index % 2 === 0 && (
        <Image width={imgwidth} height={imgheight} src={image}></Image>
      )}
      <div>
        <Stack flexDirection={"column"} gap={"40px"}>
          <Text type={"H3"}>{name}</Text>
          <LongText>
            <Text type={"T2"}>{description}</Text>
          </LongText>
          <Stack alignItems={"center"} gap={"24px"}>
            <Text style={{ cursor: "pointer" }} type={"T4"}>
              Дэлэгрэнгүй
            </Text>
            <Line />
          </Stack>
        </Stack>
      </div>
      {index % 2 !== 0 && (
        <Image width={imgwidth} height={imgheight} src={image}></Image>
      )}
    </Container>
  );
};

export default Card;