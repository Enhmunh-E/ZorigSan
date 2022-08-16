import React, { useRef, useState, useEffect, useMemo } from "react";
import { Header, Image, Text } from "../components/core";
import {
  StaffCart,
  CEOCart,
  Container,
  Con,
  Block,
  BlueText,
  Flex,
  BigText,
  TitleSmallText,
  SmallText,
} from "../components/body/about-us";
import { Footer } from "../components/footer";
import useWindowDimensions from "../functions/useWindowDimensions";
import { Donation } from "../components/body";
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
/* eslint-disable */
/* eslint-disable react/prop-types */
/* eslint-disable complexity */

export const query = graphql`
  query AboutUsPage {
    allContentfulAboutUsPage {
      nodes {
        title
        subTitle
        description
        staffs {
          position
          testimonial {
            raw
          }
          name
          level
          img {
            file {
              url
            }
          }
        }
      }
    }
  }
`;
const richTextRenderOptions = {
  renderMark: {
    [MARKS.BOLD]: (text) => (
      <Text type="T1Bold" color="#0C265C">
        {text}
      </Text>
    ),
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data;
      return (
        <a href={uri} className="underline">
          {children}
        </a>
      );
    },
    [BLOCKS.HEADING_1]: (text) => {
      return (
        <>
          <h1>{text}</h1>
        </>
      );
    },
    [BLOCKS.HEADING_5]: (text) => {
      return (
        <>
          <h5>{text}</h5>
        </>
      );
    },
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, text) => {
      return (
        <Text type="T2">
          <p style={{ whiteSpace: "pre-line" }}>{text}</p>
        </Text>
      );
    },
  },
};
const AboutUsPage = ({ data }) => {
  // console.log(data);
  const aboutUsPageData = data.allContentfulAboutUsPage.nodes[0];
  const divRef = useRef(null);
  4;
  const { width } = useWindowDimensions();
  const [DisWidth, setwidth] = useState(false);
  const [textHeight, setTextHeight] = useState(divRef?.current?.offsetHeight);
  useEffect(() => {
    if (width <= "650") {
      setwidth(true);
    } else {
      setwidth(false);
    }
    setTextHeight(divRef?.current?.offsetHeight);
  }, [width]);
  const CEO = useMemo(() => {
    const test = aboutUsPageData.staffs.filter((staff) => staff.level == 0);
    return test[0];
  }, [data]);
  return (
    <Container>
      <Header color={"primary-blue"} />
      <Block />
      <Con AlignTtems="center" width="100%">
        <Flex
          width="1031px"
          flexDirection="column"
          PaddingLeft="100px"
          PaddingRight="100px"
          PaddingBottom="88px"
          PaddingTop="80px"
        >
          <BlueText>
            <Text type="H1">{aboutUsPageData.title}</Text>
          </BlueText>
          <BigText PaddingTop="16px" FontSize="40px" color="#0c265c">
            <Text type="T0">{aboutUsPageData.subTitle}</Text>
          </BigText>
          <TitleSmallText PaddingTop="24px">
            {aboutUsPageData.description}
          </TitleSmallText>
        </Flex>
      </Con>
      {DisWidth == false ? (
        <Con width="100%" style={{ background: "rgba(12, 38, 92, 0.05)" }}>
          <Flex
            width="1320px"
            PaddingTop="55px"
            PaddingBottom="54px"
            style={{ justifyContent: "space-evenly" }}
          >
            <Image width={"287"} height={"430"} src={CEO && CEO.img.file.url} />
            <div
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <BigText FontSize="34px" color="#0C265C">
                  <Text type="T0"> Zorig Foundation</Text>
                </BigText>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <BigText FontSize="34px" color="black">
                  <Text type="T0"> {CEO && CEO.name}</Text>
                </BigText>
                <SmallText>Гүйцэтгэх захирал</SmallText>
              </div>
              <SmallText TextAlign="left">
                {CEO && renderRichText(CEO.testimonial, richTextRenderOptions)}
              </SmallText>
            </div>
          </Flex>
        </Con>
      ) : (
        <Con
          width="100%"
          marginBottom="40px"
          style={{ background: "rgba(12, 38, 92, 0.05)" }}
        >
          <Flex style={{ overflow: "auto" }}>
            <CEOCart ceo={CEO} />
            <StaffCart staffs={aboutUsPageData.staffs} />
          </Flex>
        </Con>
      )}
      {DisWidth === false ? (
        <Con width="100%">
          <Flex
            width="1320px"
            marginTop="93px"
            PaddingTop="93px"
            PaddingBottom="124px"
          >
            <StaffCart staffs={aboutUsPageData.staffs} />
          </Flex>
        </Con>
      ) : (
        <></>
      )}
      <Donation text={"Зориг сангийн хүслийг биелүүлээрэй"} />
      <Footer />
    </Container>
  );
};

export default AboutUsPage;
