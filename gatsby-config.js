const path = require("path");
require("dotenv").config({
  path: ".env",
});

const gatsbyRequiredRules = path.join(
  process.cwd(),
  "node_modules",
  "gatsby",
  "dist",
  "utils",
  "eslint-rules"
);

module.exports = {
  plugins: [
    {
      options: {
        accessToken: process.env.GATSBY_ACCESS_TOKEN,
        spaceId: process.env.GATSBY_SPACE_ID,
      },
      resolve: "gatsby-source-contentful",
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    {
      options: {
        exclude: ["node_modules", "bower_components", ".cache", "public"],
        extensions: ["js", "jsx", "ts", "tsx"],
        rulePaths: [gatsbyRequiredRules],
        stages: ["develop"],
      },
      resolve: "gatsby-plugin-eslint",
    },
  ],
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Zorig",
  },
};
// yarn , npm
// yarn add