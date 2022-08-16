import React, { useEffect, useState, useMemo } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Header, Margin, Text, Stack } from "../components/core";
import CircleCarousel from "../components/body/CircleCarousel";
import { Footer } from "../components/footer";
import useWindowDimensions from "../functions/useWindowDimensions";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow-x: hidden;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Container2 = styled.div`
  width: 1320px;
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  padding-right: 32px;
  @media only screen and (max-width: 1384px) {
    width: calc(100% - 64px);
    padding-left: 32px;
    padding-right: 32px;
  }
  @media only screen and (max-width: 540px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;
const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const EventDetails = ({ pageContext }) => {
  const [data, setData] = useState({});
  const { width } = useWindowDimensions();
  useEffect(async () => {
    await setData(pageContext.data);
  }, []);
  const phone = useMemo(() => {
    return width <= 540;
  }, [width]);
  return (
    <Container>
      <GlobalStyle />
      <Header color={"primary-blue"} />
      <Margin size={phone === false ? [192, 0, 48, 0] : [140, 0, 48, 0]}>
        <Container2>
          <Stack flexDirection={"column"} gap={"8px"}>
            <Text type={"H3"} color={"#0C265C"}>
              {data.startDate?.split("T")[0].split("-").join("/")} -{" "}
              {data.endDate?.split("T")[0].split("-").join("/")}
            </Text>
            <Text type={"Quote"} color={"#0C265C"}>
              {data.name}
            </Text>
          </Stack>
          <Margin size={phone === false ? [124, 0, 0, 0] : [48, 0, 0, 0]}>
            <Image src={data.image?.file.url} />
          </Margin>
          <Margin size={phone === false ? [48, 0, 0, 0] : [24, 0, 0, 0]}>
            <Text type={"H1"} color={"#0C265C"}>
              Ерөнхий мэдээлэл
            </Text>
          </Margin>
          <Margin size={phone === false ? [40, 0, 0, 0] : [16, 0, 0, 0]}>
            <Text color={"#0C265C"}>{data.description?.description}</Text>
          </Margin>
        </Container2>
      </Margin>
      <Margin size={phone === false ? [124, 32, 48, 32] : [82, 32, 48, 32]}>
        <CircleCarousel
          arr={data.alumni}
          topTittle={"энэ хөтөлбөрийн амжилттай төгсөгчид"}
        />
      </Margin>
      <Footer />
    </Container>
  );
};

export default EventDetails;
