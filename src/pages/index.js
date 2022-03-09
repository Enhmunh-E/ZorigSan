import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { Button } from "../components/Button";

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
    <div style={{display: 'flex', flexDirection: 'column', gap: '50px'} }>
      <Button type="primary">asdf</Button>
      <Button type="primary-outline">asdf</Button>
      <Button type="secondary">asdf</Button>
      <Button type="secondary-outline">asdf</Button>
      <Button type="tertiary">asdf</Button>
      <Button type="tertiary-outline">asdf</Button>
    </div>
  );
};

export default IndexPage;