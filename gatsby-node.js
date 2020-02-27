/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
    type MusicYamlLinks {
      platform: String!
      url: String!
    }

    type MusicYaml implements Node {
      id: ID!
      image: String!
      date: Date!
      description: String!
      title: String!
      type: String!
      links: [MusicYamlLinks]!
    }
  `;

  createTypes(typeDefs);
};
