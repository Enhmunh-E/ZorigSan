import styled from "styled-components";
import React from "react";
import { Stack } from "../core";
import { Card } from ".";
import useWindowDimensions from "../../functions/useWindowDimensions";

// // let image1 = import something
// // let header1 = import something
// // let subtext1 = import something
// // let date1 = import something
// // do this x3

const VerticalLine = styled.div`
  width: 0px;
  opacity: 0.2;
  border: 1px solid #0c265c;
`;
const HorizontalLine = styled.div`
  width: 30px;
  height: 5px;
  opacity: 0.2;
  background: #0c265c;
  @media screen and (max-width: 600px) {
    margin-left: 2.5vw;
  }
`;
const Title = styled.h1`
  width: 100vw;
  display: flex;
  color: #0c265c;
  justify-content: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  line-height: 49px;
  text-transform: uppercase;
  font-feature-settings: "case";
  font-size: 40px;
  @media screen and (max-width: 800px) {
    font-size: 30px;
  }
`;
const Text = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #0c265c;
  @media screen and (max-width: 600px) {
    margin-left: 2.5vw;
  }
`;
export const News = () => {
  let direction = "row";
  let gap;
  const { width } = useWindowDimensions();
  if (width < 600) {
    direction = "column";
    // console.log(direction);
    gap = "32px";
  }
  return (
    <Stack flexDirection="column">
      <Title>сонин сайхан</Title>
      <Stack
        justifyContent="space-between"
        gap={gap ? gap : "0"}
        flexDirection={direction}
        style={{ padding: "0 5vw 0 5vw" }}
      >
        <Stack gap="10px" flexDirection="column" justifyContent="left">
          <Card
            margin="none"
            type="small"
            image="https://m0.her.ie/wp-content/uploads/2018/01/07093633/GettyImages-887815620.jpg"
            header="Цахим орчинд таны хүүхдэд"
            text="Хүүхдийн утас 108-д орж ирдэг гомдлын дуудлага дундаас "
          />
          <HorizontalLine />
          <Text type="title2">year</Text>
        </Stack>
        {width > 600 && <VerticalLine />}
        <Stack gap="10px" flexDirection="column" justifyContent="left">
          <Card
            type="small"
            image="https://m0.her.ie/wp-content/uploads/2018/01/07093633/GettyImages-887815620.jpg"
            header="Цахим орчинд таны хүүхдэд"
            text="Хүүхдийн утас 108-д орж ирдэг гомдлын дуудлага дундаас "
          />
          <HorizontalLine />
          <Text type="title2">year</Text>
        </Stack>
        {width > 600 && <VerticalLine />}
        <Stack gap="10px" flexDirection="column" justifyContent="left">
          <Card
            type="small"
            image="https://m0.her.ie/wp-content/uploads/2018/01/07093633/GettyImages-887815620.jpg"
            header="Цахим орчинд таны хүүхдэд"
            text="Хүүхдийн утас 108-д орж ирдэг гомдлын дуудлага дундаас "
          />
          <HorizontalLine />
          <Text>year</Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default News;
