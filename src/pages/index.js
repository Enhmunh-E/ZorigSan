import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { Input } from "../components";
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
    <div style={{ display: "grid", gap: "20px" }}>
      <Input
        placeholder="Placeholder"
        border="gray"
        label="Email"
        hint="hint"
      />
      <Input placeholder="Placeholder" border="lightblue" type="search" />
      <Input placeholder="Placeholder" border="red" label="Email" type="send" />
      <Input
        placeholder="Placeholder"
        border="red"
        optional="Optional Message"
      />
    </div>
  );
};

export default IndexPage;