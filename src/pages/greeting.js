/* eslint no-use-before-define: 0 */
import React from "react";
import { Header } from "../components/core";
import { Stack, Text } from "../components/core";
import { Footer } from "../components/footer";
import styled from "styled-components";
import Pic from "../assets/images/chairWomen.png";
import useWindowDimensions from "../functions/useWindowDimensions";
export const WholeContainer = styled(Stack)`
  width: 1320px;
  height: 700px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  align-items: center;
  overflow: hidden;
  // padding: 200px 20px 140px 20px;
  padding-top: 200px;
  padding-bottom: 140px;
  @media only screen and (min-width: 0px) and (max-width: 960px) {
    display: flex;
    width: 100%;
    flex-direction: column-reverse;
    height: 100%;
    justify-content: center;
    oveflow: hidden;
  }
`;

export const InfoContainer = styled(Stack)`
  max-width: 700px;
  height: 100%;
  // padding-left: 50px;
  padding: 50px;
  text-align: justify;
  @media only screen and (min-width: 0px) and (max-width: 540px) {
    oveflow: hidden;
    padding: 20px;
  }
`;
export const ImageText = styled(Stack)`
  position: absolute;
  z-index: 1;
  bottom: 30px;
  padding: 0px 70px 0px 70px;

  @media only screen and (min-width: 0px) and (max-width: 540px) {
    padding: 40px;
  }
`;
export const PicContainer = styled.img`
  object-fit: cover;
  z-index: 0;
  @media only screen and (min-width: 0px) and (max-width: 540px) {
    padding-bottom: 30px;
  }
`;

export const DesktopShown = styled(Text)`
  @media only screen and (min-width: 0px) and (max-width: 540px) {
    display: none;
  }
`;
export const DesktopHidden = styled(Text)`
  display: flex;
  text-align: center;
  @media only screen and (min-width: 541px) {
    display: none;
  }
`;

export const PicWholeContainer = styled.div``;

const Greeting = () => {
  const { width } = useWindowDimensions();
  return (
    <Stack flexDirection="column">
      <Header color={"primary-blue"} />

      <WholeContainer gap={width > 540 ? "50px" : "20px"}>
        <InfoContainer
          gap={width > 540 ? "74px" : "20px"}
          flexDirection="column"
          justifyContent="center"
        >
          <DesktopShown type="Quote" color="#0C265C">
            Тэргүүний мэндчилгээ
          </DesktopShown>
          <Text type="H3" color="#0C265C">
            Зориг сан ардчиллын үнэт зүйлс, үзэл санааг түгээн дэлгэрүүлэх
            зорилгын дор сайн засаглал, залуус ба боловсрол, нийгмийн хөгжил
            гэсэн гурван үндсэн чиглэлээр үйл ажиллагаа явуулаад хорь гаруй жил
            болж байна.
          </Text>
          <Text type="H2" color="#0C265C">
            -Санжаасүрэнгийн Оюун - Зориг сангийн Тэргүүн
          </Text>
        </InfoContainer>
        <PicWholeContainer
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            width: "100%",
          }}
        >
          <PicContainer src={Pic}></PicContainer>
          <ImageText flexDirection="column">
            <Text
              type="H4"
              color="#FFFFFF"
              style={{
                alignSelf: "start",
                display: "flex",
                width: "60%",
              }}
            >
              “President (2009-2017), PM (1998,2004) of Mongolia, Commissioner
              of the ICDP, Patron”
            </Text>
            <Text
              type="H4"
              color="#FFFFFF"
              style={{ alignSelf: "end", display: "flex", width: "40%" }}
            >
              {" "}
              -Санжаасүрэнгийн Оюун Зориг сангийн Тэргүүн
            </Text>
          </ImageText>
        </PicWholeContainer>
        <DesktopHidden type="Quote" color="#0C265C">
          Тэргүүний мэндчилгээ
        </DesktopHidden>
      </WholeContainer>

      <Footer />
    </Stack>
  );
};

export default Greeting;
