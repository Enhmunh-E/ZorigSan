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
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
      <Button type='primary'> Pororo </Button>
      <Button type='primary-outlined'> Pororo </Button>
      <Button type='secondary'> Pororo </Button>
      <Button type='secondary-outlined'> Pororo </Button>
      <Button type='tertiary'> Pororo </Button>
      <Button type='tertiary-outlined'> Pororo </Button>
    </div>
  );
};

export default IndexPage;