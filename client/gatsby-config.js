/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Welcome to Gatsby Site',
    description: 'Gatsby Demo',
  },
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-typography`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      }
    },
    `gatsby-transformer-remark`,
  ],
}
