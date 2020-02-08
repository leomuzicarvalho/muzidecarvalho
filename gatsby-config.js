require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Leonardo Front End Web Developer`,
    siteUrl: `https://muzidecarvalho-1244253271.gtsb.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
     `gatsby-plugin-sharp`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: 'ae97951fdc21a6778b739633aa1fdf',
      },
    },
  ],
}
