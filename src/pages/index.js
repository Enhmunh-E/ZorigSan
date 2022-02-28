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
        <h1>Hello World</h1>
    </div>
  )
}

export default IndexPage
