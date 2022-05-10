import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { createGlobalStyle } from "styled-components";
import { Banner, Donation, Events, ProgramOngoing, Sponsors } from '../components/body';
import Analytic from "../components/body/Analytic";
import CircleCarousel from "../components/body/CircleCarousel";
import { Footer } from "../components/footer";
const IndexPage = () => {
  const [bannerData, setBannerData] = useState({});
  const data = useStaticQuery(graphql`
    query {
      allContentfulBanner {
        edges {
          node {
            contentful_id
            description {
              description
            }
            image {
              file {
                url
              }
            }
            title
          }
        }
      }
      allContentfulPrograms {
        nodes {
          image {
            file {
              url
            }
          }
          title
        }
      }
      allContentfulAlumni {
        nodes {
          word {
            internal {
              content
            }
          }
          image {
            file {
              url
            }
          }
          name
          program
        }
      }
      allContentfulSponsor {
        nodes {
          image {
            file {
              url
            }
          }
        }
      }
    }
  `);
  useEffect(() => {
    data.allContentfulBanner.edges.map((el) => setBannerData(el.node));
  }, [data]);
  const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      overflow-x: hidden;
    }
  `;

  const events = data.allContentfulPrograms.nodes;
  const alumni = data.allContentfulAlumni.nodes;
  const sponsors = data.allContentfulSponsor.nodes;
  return (
    <div>
      <GlobalStyle />
      <Banner
        description={bannerData.description?.description}
        image={bannerData.image?.file.url}
        title={bannerData.title}
      />
      <ProgramOngoing
        name={'Сурагч солилцооны хөтөлбөр 2022'}
        desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do iusmod tempor incididunt ut labore et dolore magna aliqua.'}
        date={'2022.04.20'}
      />
      <Analytic/>
      <Events events={events} />
      <CircleCarousel arr={alumni} topTittle={'ЗОРИГ САНГИЙН АМЖИЛТТАЙ ТӨГСӨГЧИД'}></CircleCarousel>
      <Sponsors arr={sponsors}/>
      <Donation text={"ЗОРИГ САН-д хандив өгөөрэй"} />
      <Footer/>
    </div>
  );
};

export default IndexPage;