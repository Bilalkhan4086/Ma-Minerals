/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-tawk.to`,
      options: {
        tawkId: "62db1e6f37898912e95f30d1",
        tawkKey: "1g8kuim1g",
        // get this from the tawk script widget
        // https://tawk.to/chat/YOUR_TAWK_ID/YOUR_TAWK_KEY
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "gem",
        path: `${__dirname}/content/gem`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `pages`,
        // Path to the directory
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        name: "gem",
        path: `${__dirname}/content/gem`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
