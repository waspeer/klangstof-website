/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/camelcase */
const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Klangstof',
    description: 'Music, shows and merchandise.',
    author: 'Wannes Salomé',
  },
  plugins: [
    'gatsby-plugin-react-helmet-async',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Klangstof',
        short_name: 'Klangstof',
        start_url: '/',
        background_color: '#edece6',
        theme_color: '#c84f68',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '#components': path.resolve(__dirname, './src/components'),
        '#lib': path.resolve(__dirname, './src/lib'),
        '#pages': path.resolve(__dirname, './src/pages'),
        '#images': path.resolve(__dirname, './src/images'),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify-cms',
    'gatsby-transformer-yaml',
  ],
};
