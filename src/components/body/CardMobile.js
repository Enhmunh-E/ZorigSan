import React from "react";
import styled from "styled-components";
import { Text, Stack } from "../core";
import "../../styles/Cards.css";

const Container = styled.div`
  background-size: auto 100%;
  background-position: top;
  background-repeat: no-repeat;
  background-image: ${(props) => (props.image ? `url(${props.image})` : "")};
  width: 100%;
`;
const Line = styled.div`
  width: 25px;
  height: 1px;
  background-color: #fff;
`;
const LongText = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  line-height: 20px;
  overflow: hidden;
`;
const ItemsContainer = styled.div`
  height: 222px;
  padding: 8px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.6);
`;
export const CardMobile = ({ image, name, description }) => {
  if (typeof image === "object") image = JSON.stringify(image);
  return (
    <Container image={image}>
      <ItemsContainer>
        <Stack flexDirection={"column"} gap={"16px"}>
          <Text type={"H3"} color={"#fff"}>
            {name}
          </Text>
          <LongText>
            <Text type={"T2"} color={"#fff"}>
              {description}
            </Text>
          </LongText>
          <Stack alignItems={"center"} gap={"24px"}>
            <Text style={{ cursor: "pointer" }} type={"T4"} color={"#fff"}>
              Дэлэгрэнгүй
            </Text>
            <Line />
          </Stack>
        </Stack>
      </ItemsContainer>
    </Container>
  );
};

export default CardMobile;