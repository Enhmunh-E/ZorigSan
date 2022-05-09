import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect, useState } from "react";
import { Banner } from "../components/body/banner";

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
    }
  `);
  useEffect(() => {
    data.allContentfulBanner.edges.map((el) => setBannerData(el.node));
  }, [data]);

  return (
    <div>
      <Banner
        description={bannerData.description?.description}
        image={bannerData.image?.file.url}
        title={bannerData.title}
      />
    </div>
  );
};

export default IndexPage;