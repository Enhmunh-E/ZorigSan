import React from "react";
import { Header, Padding, Stack, Text } from "../components/core";
import { graphql, useStaticQuery } from "gatsby";
import {
  FullContainer,
  AnotherBS,
  MainBody,
  RightSide,
  ZorigInformationContainer,
  ZorigInformation,
  ZorigName,
  ZorigBirthInfo,
  ZorigBirthDate,
  ZorigBirthPlace,
  ZorigLine,
  TimeEvent,
} from "../components/body/about-zorig";

const AboutZorigPage = () => {
  const data = useStaticQuery(graphql`
    query AboutZorigQuery {
      allContentfulAboutZorigPage {
        edges {
          node {
            coverPhoto {
              file {
                url
              }
            }
            historyText {
              raw
            }
            historyTitle
            timelines {
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
    }
  `);

  const timelineData = data.allContentfulAboutZorigPage.edges[0].node.timelines;

  return (
    <FullContainer gap="50px" flexDirection="column">
      <Header color={"primary-blue"} />

      <AnotherBS>
        <MainBody>
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
              <Padding size={[0, 0, 0, 50]}>
                {timelineData.map((edge, index) => {
                  return (
                    <TimeEvent
                      key={index}
                      year={edge.timelineDate}
                      event={edge.timelineEvent}
                      image={edge.timelineImage.file.url}
                      last={
                        index ===
                        data.allContentfulAboutZorigPage.edges[0].node.timelines
                          .length -
                          1
                      }
                    />
                  );
                })}
              </Padding>
            </Stack>
          </RightSide>
        </MainBody>
      </AnotherBS>
    </FullContainer>
  );
};

export default AboutZorigPage;
