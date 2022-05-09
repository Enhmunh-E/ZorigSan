import React from "react";
import "../../styles/Cards.css";
import styled from "styled-components";
import { Text, Stack } from "../core";

const Container = styled.div`
  @media screen and (max-device-width: 600px) {
    gap: 20px;
    flex-direction: column;
  }
  @media not screen and (max-device-width: 600px) {
    flex-direction: row;
  }
  width: ${(props) => (props.width ? props.width : "85vw")};
  display: flex;
  height: fit-content;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  margin: 0 7.5vw 0 7.5vw;
`;
const Line = styled.div`
  width: 25px;
  height: 1px;
  background-color: black;
`;
const Image = styled.img`
  @media screen and (max-device-width: 600px) {
    width: ${(props) => (props.width ? props.width : "85vw")};
    height: ${(props) => (props.height ? props.height : "60vw")};
  }
  @media not screen and (max-device-width: 600px) {
    width: ${(props) => (props.width ? props.width : "40vw")};
    height: ${(props) => (props.height ? props.height : "25vw")};
    ${(props) => (props.width ? "" : "min-width: 290px")};
    ${(props) => (props.height ? "" : "min-height: 180px")};
  }
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
}) => {
  if (typeof image === "object") image = JSON.stringify(image);
  console.log(image);
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