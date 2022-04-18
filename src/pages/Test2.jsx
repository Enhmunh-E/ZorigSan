import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Test2 = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulBanner {
        edges {
          node {
            contentful_id
            title
            image {
              file {
                url
              }
            }
            createdAt
          }
        }
      }
    }
  `);
  return (
    <div>
      {data.allContentfulBanner.edges.map((el, index) => (
        <div key={index}>
          <div>{el.node.title}</div>
          <img style={{ height: "400px" }} src={el.node.image.file.url} />
        </div>
      ))}
    </div>
  );
};

export default Test2;
