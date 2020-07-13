/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}`,
        name: `blog`,
      },
  },
    `gatsby-transformer-remark`,

    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        enableIdentityWidget: false,
      }
    }
  ],
}
