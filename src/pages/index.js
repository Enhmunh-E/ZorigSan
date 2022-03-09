import { graphql, useStaticQuery } from "gatsby";
import { Button } from "../components/Button";
import * as React from "react";
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
      <h1>Hello World</h1>
      <Button type="primary">asdf</Button>
    </div>
  );
};

export default IndexPage;