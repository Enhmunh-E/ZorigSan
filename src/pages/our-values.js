import * as React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { Footer } from "../components/footer";
import { Header, Margin, Stack, Text } from "../components/core";
import { createGlobalStyle } from "styled-components";
import useWindowDimentions from "../functions/useWindowDimensions";
import {
  PuzzleIcon,
  WheatIcon,
  TractorIcon,
  TabletIcon,
} from "../assets/icons";
import { Donation } from "../components/body";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  overflow-x: hidden;
}
`;

const RectangleBox = styled.div`
  box-shadow: 0px 0px 28px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  @media screen and (max-width: 960px) {
    width: 86vw;
  }
  @media not screen and (max-width: 960px) {
    width: 41.5vw;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 180px;
    @media not screen and (max-width: 1500px) {
      height: 150px;
    }
  }
  @media screen and (max-width: 1200px) {
    gap: 6px;
    padding: 20px 20px 40px 20px;
  }
  @media not screen and (max-width: 1200px) {
    gap: 16px;
    padding: 24px 24px 48px 24px;
  }
  overflow: hidden;
`;

const Rectangle = ({ icon, text, header, width }) => {
  return (
    <RectangleBox>
      <Stack
        alignItems="center"
        gap={width > 1000 ? "16px" : "8px"}
        flexDirection="row"
        style={{ height: "35px" }}
      >
        {icon === "PuzzleIcon" ? (
          <PuzzleIcon />
        ) : icon === "TractorIcon" ? (
          <TractorIcon />
        ) : icon === "TabletIcon" ? (
          <TabletIcon />
        ) : (
          <WheatIcon />
        )}
        <Text type={width > 1000 ? "T0" : "H2Semi"} color="#0C265C">
          {header}
        </Text>
      </Stack>
      <Margin size={[3, 0, 0, 0]}>
        <Text type="T2" color="#0C265C">
          {text}
        </Text>
      </Margin>
    </RectangleBox>
  );
};
const OurValuesText = styled.h1`
  @media screen and (max-width: 960px) {
    font-size: 14px;
    line-height: 18px;
    width: 86vw;
  }
  @media not screen and (max-width: 960px) {
    @media screen and (max-width: 1200px) {
      width: 65vw;
    }
    @media not screen and (max-width: 1200px) {
      width: 45vw;
    }
    font-size: 16px;
    line-height: 20px;
  }
  text-align: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  color: #0c265c;
`;

const OurValuesPage = () => {
  const contentful_data = useStaticQuery(graphql`
    query {
      allContentfulOurValuesPage {
        nodes {
          header
          subtitle
          title
          values {
            description {
              raw
            }
            header
            icon {
              file {
                url
              }
            }
          }
        }
      }
    }
  `);

  const data = contentful_data.allContentfulOurValuesPage.nodes[0];
  const { width } = useWindowDimentions();

  return (
    <div>
      <GlobalStyle />
      <Margin size={[0, 0, 175, 0]}>
        <Header color={"primary-blue"} />
      </Margin>
      <Stack
        gap={width > 540 ? (width > 1200 ? "100px" : "50px") : "30px"}
        flexDirection="column"
        alignItems="center"
      >
        <Stack gap="16px" flexDirection="column" alignItems="center">
          <Text
            style={{
              textAlign: "center",
            }}
            type="H1"
            color="#4FADE0"
          >
            {data.header}
          </Text>
          <Text
            style={{
              textAlign: "center",
            }}
            type="Quote"
            color="#0c265c"
          >
            {data.title}
          </Text>
          <OurValuesText>{data.subtitle}</OurValuesText>
        </Stack>
        <Stack
          style={{ maxWidth: "1320px" }}
          gap={width > 1200 ? "48px" : "24px"}
          flexDirection="column"
          alignItems="center"
        >
          <Stack
            gap={width > 1200 ? "12px" : width < 960 ? "36px" : "12px"}
            flexDirection={width > 960 ? "row" : "column"}
            alignItems="center"
            justifyContent="space-around"
          >
            <Rectangle
              width={width}
              icon={"PuzzleIcon"}
              text={
                JSON.parse(data.values[0].description.raw).content[0].content[0]
                  .value
              }
              header={data.values[0].header}
            />
            <Rectangle
              width={width}
              icon={"TractorIcon"}
              text={
                JSON.parse(data.values[1].description.raw).content[0].content[0]
                  .value
              }
              header={data.values[1].header}
            />
          </Stack>
          <Stack
            gap={width > 1200 ? "12px" : width < 960 ? "36px" : "12px"}
            flexDirection={width > 960 ? "row" : "column"}
            alignItems="center"
          >
            <Rectangle
              width={width}
              icon={"TabletIcon"}
              text={
                JSON.parse(data.values[2].description.raw).content[0].content[0]
                  .value
              }
              header={data.values[2].header}
            />
            <Rectangle
              width={width}
              icon={"WheatIcon"}
              text={
                JSON.parse(data.values[3].description.raw).content[0].content[0]
                  .value
              }
              header={data.values[3].header}
            />
          </Stack>
        </Stack>
      </Stack>
      <Margin size={[80, 0, 0, 0]}>
        <Donation text={"ЗОРИГ САН-д хандив өгөөрэй"} />
        <Footer />
      </Margin>
    </div>
  );
};

export default OurValuesPage;