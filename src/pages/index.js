import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Input } from "../components/input";
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulPost {
        nodes {
          description {
            raw
          }
          header
        }
      }
    }
  `);
  console.log(data);
  return (
    <div>
      {/* <div
          dangerouslySetInnerHTML={{
            __html: data.allContentfulPost.nodes[0].description.raw,
          }}
        /> */}
      <h1>Hello World</h1>
      <Input />
    </div>
  );
};

export default IndexPage;