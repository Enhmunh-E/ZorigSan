import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import {Padding,Header} from "../components/index"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
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
      <Padding size={[10000,10000,1000000,100000]} >
        <h1>Hello World</h1>
      </Padding>
    </div>
  )
}

export default IndexPage
