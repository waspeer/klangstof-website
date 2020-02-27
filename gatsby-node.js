/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node);
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
    type MarkdownRemarkFrontmatterLinks {
      platform: String!
      url: String!
    }

    type MarkdownRemarkFrontmatter {
      date: String!
      description: String!
      title: String!
      type: String!
      links: [MarkdownRemarkFrontmatterLinks!]!
    }

    type MarkdownRemark implements Node {
      id: ID!
      frontmatter: MarkdownRemarkFrontmatter!
    }
  `;

  createTypes(typeDefs);
};
