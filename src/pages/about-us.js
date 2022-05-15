import React, { useRef, useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { Header } from "../components/core";
import { Image, Stack } from "../components/core";
import { AboutCarts, ZahiralCart } from "../components/body/AboutCarts";
import { Footer } from "../components/footer";
import useWindowDimensions from "../functions/useWindowDimensions";
import { Donation } from "../components/body";
import { graphql, useStaticQuery } from "gatsby";
import { Text } from "../components/core";
/* eslint-disable */
/* eslint-disable react/prop-types */
/* eslint-disable complexity */
const Container = styled.div`
  width: 100vw;
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
const Block = styled.div`
  width: 100vw;
  height: 133px;
`;
const Con = styled(Stack)`
  width: ${(props) => (props.width ? props.width : "")};
  height: ${(props) => (props.height ? props.height : "")};

  justify-content: center;
  align-items: center;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "")};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "")};
`;

const Flex = styled.div`
  width: ${(props) => (props.width ? props.width : "")};
  padding-top: ${(props) => (props.PaddingTop ? props.PaddingTop : "")};
  padding-bottom: ${(props) =>
    props.PaddingBottom ? props.PaddingBottom : ""};
  padding-left: ${(props) => (props.PaddingLeft ? props.PaddingLeft : "")};
  padding-right: ${(props) => (props.PaddingRight ? props.PaddingRight : "")};
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : ""};
`;
const BlueText = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  letter-spacing: 0.001em;
  color: #4fade0;
  font-family: "Montserrat";
  text-align: center;
`;
const BigText = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: ${(props) => (props.FontSize ? props.FontSize : "")};
  line-height: 49px;
  text-transform: uppercase;
  font-feature-settings: "case" on;
  color: ${(props) => (props.color ? props.color : "#0c265c")};
  display: flex;
  justify-content: center;
  padding-top: ${(props) => (props.PaddingTop ? props.PaddingTop : "")};
  text-align: center;
`;
const SmallText = styled.div`
  width: ${(props) => (props.width ? props.width : "")};
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #000000;
  opacity: 0.6;
  text-align: ${(props) => (props.TextAlign ? props.TextAlign : "normal")};
  padding-top: ${(props) => (props.PaddingTop ? props.PaddingTop : "")};
`;
const TitleSmallText = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #000000;
  opacity: 0.6;
  text-align: ${(props) => (props.TextAlign ? props.TextAlign : "normal")};
  padding-top: ${(props) => (props.PaddingTop ? props.PaddingTop : "")};
`;
const AboutUsPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulAboutUs(sort: { order: ASC, fields: staffs___level }) {
        edges {
          node {
            staffs {
              name
              img {
                url
              }
              level
              position
              description
            }
            title
            description
            title1
            zorigFoundation
          }
        }
      }
    }
  `);
  const Handler = data.allContentfulAboutUs.edges[0].node;
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
  const Zahiral = useMemo(() => {
    let z = null;
    data.allContentfulAboutUs.edges[0].node.staffs.forEach((staff) => {
      if (staff.level == 0) {
        z = staff;
      }
    });
    return z;
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
            <Text type="H1">{Handler.title}</Text>
          </BlueText>
          <BigText PaddingTop="16px" FontSize="40px" color="#0c265c">
            <Text type="T0">{Handler.title1}</Text>
          </BigText>
          <TitleSmallText PaddingTop="24px">
            {Handler.description}
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
            <Image
              width={"287"}
              height={"430"}
              src={Zahiral && Zahiral.img.url}
            />
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
                  <Text type="T0"> {Handler.ZorigFoundation}</Text>
                </BigText>
                <SmallText TextAlign="left">
                  {Zahiral && Zahiral.description}
                </SmallText>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <BigText FontSize="34px" color="black">
                  <Text type="T0"> {Zahiral && Zahiral.name}</Text>
                </BigText>
                <SmallText>Гүйцэтгэх захирал</SmallText>
              </div>
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
            <ZahiralCart zahiral={Zahiral} />
            <AboutCarts
              events={data.allContentfulAboutUs.edges[0].node.staffs}
            />
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
            <AboutCarts
              events={data.allContentfulAboutUs.edges[0].node.staffs}
            />
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
