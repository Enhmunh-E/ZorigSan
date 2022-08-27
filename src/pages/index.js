import React, { useMemo } from "react";
import { graphql } from "gatsby";
import { createGlobalStyle } from "styled-components";
import moment from "moment";
import {
  Banner,
  Carousel,
  Donation,
  Events,
  NewsCarousel,
  ProgramOngoing,
  Sponsors,
} from "../components/body";
import Analytic from "../components/body/Analytic";
import CircleCarousel from "../components/body/CircleCarousel";
import { Footer } from "../components/footer";
import { Margin } from "../components/core";

export const query = graphql`
  query IndexPage {
    allContentfulBanner {
      nodes {
        title
        description {
          description
        }
        image {
          file {
            url
          }
        }
      }
    }
    allContentfulSponsor {
      nodes {
        name
        image {
          file {
            url
          }
        }
      }
    }
    allContentfulProgramTypes {
      nodes {
        contentful_id
        image {
          file {
            url
          }
        }
        longDescription {
          longDescription
        }
        shortDescription
        title
      }
    }
    allContentfulAlumni {
      nodes {
        image {
          file {
            url
          }
        }
        name
        word {
          word
        }
        program {
          name
        }
        testimonial
      }
    }
    allContentfulProgramPage {
      nodes {
        description
        programTypes {
          contentful_id
          image {
            file {
              url
            }
          }
          longDescription {
            longDescription
          }
          shortDescription
          title
          program {
            contentful_id
            description {
              description
            }
            endDate
            image {
              file {
                url
              }
            }
            name
            projectNames
            startDate
            logo {
              file {
                url
              }
            }
          }
        }
        title
      }
    }
  }
`;

const isPastDate = (currDate, date2) => {
  return moment(currDate).isBefore(date2);
};

const IndexPage = ({ data }) => {
  const ongoingpros = [
    {
      date: "2022.04.20",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do iusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Сурагч солилцооны хөтөлбөр 2022",
    },
    {
      date: "2022.06.09",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do iusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Young Leap Program",
    },
    {
      date: "2022.07.21",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do iusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Random Program",
    },
  ];
  const OngoingPrograms = useMemo(() => {
    let currentDate = new Date();
    let programs = [];
    data.allContentfulProgramPage.nodes.forEach((program) => {
      program.programTypes.forEach((programType) => {
        programType.program.forEach((program) => {
          if (isPastDate(currentDate, new Date(program.endDate))) {
            programs.push({
              ...program,
              url: `/${programType.contentful_id}/${program.contentful_id}`,
            });
          }
        });
      });
    });
    return programs;
  }, [data]);

  const BannerData = useMemo(() => {
    return data.allContentfulBanner.nodes[0];
  }, [data]);
  const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
    body {
      margin: 0;
      padding: 0;
      overflow-x: hidden;
    }
  `;

  const events = data.allContentfulProgramTypes.nodes || [];
  const alumni = data.allContentfulAlumni?.nodes || [];
  const sponsors = data?.allContentfulSponsor.nodes;
  return (
    <div>
      <GlobalStyle />
      <Banner
        description={BannerData.description?.description}
        image={BannerData.image?.file.url}
        title={BannerData.title}
      />
      {OngoingPrograms.length !== 0 && (
        <Carousel arr={OngoingPrograms} WrapperWidth={"100vw"}>
          {OngoingPrograms.map((el, i) => (
            <div key={i}>
              <ProgramOngoing
                name={el.name}
                desc={el.description.description.slice(0, 200) + "..."}
                date={
                  new Date(el.endDate).getFullYear() +
                  "." +
                  new Date(el.endDate).getMonth() +
                  "." +
                  new Date(el.endDate).getDay()
                }
                url={el.url}
              />
            </div>
          ))}
        </Carousel>
      )}

      <Analytic />
      <Margin size={[100, 0, 100, 0]}>
        <NewsCarousel />
      </Margin>
      <Events events={events} />
      <CircleCarousel
        arr={alumni.filter((el) => el.testimonial == true)}
        topTittle={"ЗОРИГ САНГИЙН АМЖИЛТТАЙ ТӨГСӨГЧИД"}
      ></CircleCarousel>
      <Sponsors arr={sponsors} />
      <Donation />
      <Footer />
    </div>
  );
};

export default IndexPage;
