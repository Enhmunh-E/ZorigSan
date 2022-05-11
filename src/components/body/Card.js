import React, { useMemo } from "react";
import styled from "styled-components";
import { Text, Stack } from "../core";
import useWindowDimensions from "../../functions/useWindowDimensions";
import "../../styles/Cards.css";

const Container = styled.div`
  width: 1320px;
  display: flex;
  height: fit-content;
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
  object-fit: cover;
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
  index,
  imgwidth,
  imgheight,
}) => {
  if (typeof image === "object") image = JSON.stringify(image);
  const { width } = useWindowDimensions();
  const phone = useMemo(() => {
    return width <= 540;
  }, [width]);
  return (
    <Container>
      {index % 2 === 0 && (
        <Image width={imgwidth} height={imgheight} src={image}></Image>
      )}
      <div>
        <Stack flexDirection={"column"} gap={phone === false ? "40px" : "16px"}>
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