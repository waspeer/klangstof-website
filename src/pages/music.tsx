import { graphql } from 'gatsby';
import React from 'react';

import Layout from '#components/Layout';
import SEO from '#components/Seo';
import { Music } from '#lib/types/__generated__/Music';

interface Props {
  data: Music;
}

const IndexPage = ({ data }: Props) => {
  console.log(data);

  return (
    <Layout currentPage="MUSIC">
      <SEO title="music" />
    </Layout>
  );
};

export const query = graphql`
  query Music {
    allMusicYaml {
      edges {
        node {
          id
          links {
            platform
            url
          }
          date
          description
          image
          title
          type
        }
      }
    }
  }
`;

export default IndexPage;
