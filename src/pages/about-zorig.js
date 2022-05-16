import React from "react";
import Zorig from "../assets/images/zorig.svg";
import styled from "styled-components";
import { Header } from "../components/core";
import { TimeEvent } from "../components/body";
import { Stack, Text } from "../components/core";
import { graphql, useStaticQuery } from "gatsby";

const AboutZorigPage = () => {
  const FullContainer = styled(Stack)`
    width: 100vw;
    height: 100vh;
    display: flex;
    margin-top: 200px;
  `;

  const MainBody = styled.div`
    width: 100%;
    height: 90%;
  `;

  const ZorigImg = styled.div`
    height: 89%;
    width: 40%;
    position: fixed;
    left: 0;
    bottom: 0;
    @media only screen and (max-width: 960px) {
      display: none;
    }
  `;

  const RightSide = styled.div`
    width: 60%;
    @media only screen and (max-width: 960px) {
      width: 100%;
    }
  `;

  const ZorigInformationContainer = styled(Stack)`
    width: 74%;
    height: 410px;
    display: flex;
    padding-top: 60px;

    @media only screen and (max-width: 960px) {
      padding-top: 0;
    }
  `;

  const ZorigInformation = styled(Stack)`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media only screen and (max-width: 1400px) {
      flex-direction: column;
      justify-content: center;
      align-items: start;
    }
  `;

  const ZorigName = styled(Stack)`
    height: 100%;
    width: 48%;
  `;

  const ZorigBirthInfo = styled.div`
    height: 100%;
  `;

  const ZorigBirthDate = styled.div`
    width: 100%;
  `;

  const ZorigBirthPlace = styled.div`
    width: 100%;
  `;

  const ZorigLine = styled.div`
    width: 46px;
    height: 0px;
    border: 2px solid #0c265c;
  `;

  const data = useStaticQuery(graphql`
    query AboutZorigTimelineQuery {
      allContentfulAboutZorigTimeline {
        edges {
          node {
            timelineDate
            timelineEvent
            timelineImage {
              file {
                url
              }
            }
          }
        }
      }
    }
  `);

  return (
    <FullContainer gap="50px" flexDirection="column">
      <Header color={"primary-blue"} />

      <MainBody>
        <Stack flexDirection="row-reverse">
          <ZorigImg>
            <img
              style={{ height: "100%", objectFit: "cover", width: "100%" }}
              src={Zorig}
            />
          </ZorigImg>

          <RightSide>
            <Stack flexDirection="column" alignItems="center">
              <ZorigInformationContainer flexDirection="column" gap="4px">
                <ZorigLine />
                <ZorigInformation gap="20px">
                  <ZorigName flexDirection="column" gap="16px">
                    <Text
                      style={{ paddingTop: "16px" }}
                      color="#0c265c"
                      type="T0"
                    >
                      САНЖААСҮРЭН
                    </Text>

                    <Text color="#0c265c" type="Quote">
                      ЗОРИГ
                    </Text>
                  </ZorigName>

                  <ZorigBirthInfo>
                    <Stack
                      style={{ height: "100%", width: "100%" }}
                      flexDirection="column"
                      justifyContent="space-between"
                      gap="40px"
                    >
                      <ZorigBirthDate>
                        <Stack
                          style={{ height: "100%", width: "100%" }}
                          flexDirection="column"
                          justifyContent="space-between"
                          gap="16px"
                        >
                          <Text
                            type="T2"
                            color="#0c265c"
                            style={{ opacity: "0.5" }}
                          >
                            Төрсөн өдөр:
                          </Text>
                          <Text color="#0c265c" type="T1">
                            2002 оны 8-р сарын 21
                          </Text>
                        </Stack>
                      </ZorigBirthDate>

                      <ZorigBirthPlace>
                        <Stack
                          style={{ height: "100%", width: "100%" }}
                          flexDirection="column"
                          justifyContent="space-between"
                          gap="16px"
                        >
                          <Text
                            type="T2"
                            color="#0c265c"
                            style={{ opacity: "0.5" }}
                          >
                            Төрсөн Газар
                          </Text>

                          <Text color="#0c265c" type="T1">
                            Улаанбаатар хотод
                          </Text>
                        </Stack>
                      </ZorigBirthPlace>
                    </Stack>
                  </ZorigBirthInfo>
                </ZorigInformation>
              </ZorigInformationContainer>
              {data.allContentfulAboutZorigTimeline.edges.map((edge, index) => {
                console.log(edge);
                return (
                  <TimeEvent
                    key={index}
                    year={edge.node.timelineDate}
                    event={edge.node.timelineEvent}
                    image={edge.node.timelineImage.file.url}
                    last={
                      index ===
                      data.allContentfulAboutZorigTimeline.edges.length - 1
                    }
                  />
                );
              })}
            </Stack>
          </RightSide>
        </Stack>
      </MainBody>
    </FullContainer>
  );
};

export default AboutZorigPage;
