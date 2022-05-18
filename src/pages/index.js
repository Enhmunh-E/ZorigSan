import React, { useMemo } from "react";
import { graphql } from "gatsby";
import { createGlobalStyle } from "styled-components";
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
  }
`;
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
  const BannerData = useMemo(() => {
    return data.allContentfulBanner.nodes[0];
  }, [data]);
  const GlobalStyle = createGlobalStyle`
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
      <Carousel arr={ongoingpros} WrapperWidth={"100vw"}>
        {ongoingpros.map((el, i) => (
          <div key={i}>
            <ProgramOngoing name={el.name} desc={el.desc} date={el.date} />
          </div>
        ))}
      </Carousel>
      <Analytic />
      <Margin size={[100, 0, 100, 0]}>
        <NewsCarousel
          title="СОНИН САЙХАН"
          data={[
            {
              date: "2025.5.28",
              header: "Pray to god",
              image:
                "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            {
              date: "2025.5.28",
              header: "Pray to god",
              image:
                "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            {
              date: "2025.5.28",
              header: "Pray to god",
              image:
                "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            {
              date: "2025.5.28",
              header: "Pray to god",
              image:
                "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            {
              date: "2025.5.28",
              header: "Pray to god",
              image:
                "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
          ]}
        />
      </Margin>
      <Events events={events} />
      <CircleCarousel
        arr={alumni}
        topTittle={"ЗОРИГ САНГИЙН АМЖИЛТТАЙ ТӨГСӨГЧИД"}
      ></CircleCarousel>
      <Sponsors arr={sponsors} />
      <Donation/>
      <Footer />
    </div>
  );
};

export default IndexPage;