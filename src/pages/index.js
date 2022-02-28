import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
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
    }}`);
    console.log(data);
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

export default IndexPage
