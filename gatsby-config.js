require("dotenv").config({
  path: `.env`,
})
module.exports = {
  siteMetadata: {
    title: `Zorig`,
      siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
      spaceId: process.env.GATSBY_SPACE_ID,
      accessToken: process.env.GATSBY_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
// yarn , npm
// yarn add 