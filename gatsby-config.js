module.exports = {
  siteMetadata: {
    title: `Gatsby`,
    siteUrl: `https://www.gatsbyjs.org`,
    description: `Blazing fast modern site generator for React`,
  },
  plugins: [
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-93349937-5`,
      },
    },
    // `gatsby-plugin-offline`,
  ],
}
