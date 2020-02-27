import { graphql } from 'gatsby';
import React from 'react';

import Layout from '#components/Layout';
import MusicList from '#components/MusicList';
import SEO from '#components/Seo';
import { Music } from '#lib/types/__generated__/Music';

interface Props {
  data: Music;
}

const IndexPage = ({ data }: Props) => {
  const releases = data.allMusicYaml.edges;

  return (
    <Layout currentPage="MUSIC">
      <SEO title="music" />
      <MusicList releases={releases} />
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
