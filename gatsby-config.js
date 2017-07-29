const config = require('./data/siteConfig')

module.exports = {
  siteMetadata: {
    author: config.siteAuthor,
    title: config.siteTitle
  },
  plugins: [
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/blog`,
        name: 'pages'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 690
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID
      }
    }
  ]
}
