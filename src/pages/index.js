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
  }
`;
const IndexPage = ({ data }) => {
  console.log(data);
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
  console.log(BannerData);
  const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
      overflow-x: hidden;
    }
  `;

  const events = data.allContentfulPrograms?.nodes || [];
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
      <Margin size={[100, 0, 100, 0]}>
        <NewsCarousel />
      </Margin>
      <Analytic />
      <Events events={events} />
      <CircleCarousel
        arr={alumni}
        topTittle={"ЗОРИГ САНГИЙН АМЖИЛТТАЙ ТӨГСӨГЧИД"}
      ></CircleCarousel>
      <Sponsors arr={sponsors} />
      <Donation text={"ЗОРИГ САН-д хандив өгөөрэй"} />
      <Footer />
    </div>
  );
};

export default IndexPage;
