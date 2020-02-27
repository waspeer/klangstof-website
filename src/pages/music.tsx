import { graphql } from 'gatsby';
import React from 'react';

import Layout from '#components/Layout';
import MusicList from '#components/MusicList';
import SEO from '#components/Seo';
import { Music } from '#lib/types/__generated__/Music';
import Release from '#lib/types/Release';

interface Props {
  data: Music;
}

function normalizeMusicData(data: Music): Release[] {
  return data.allMarkdownRemark.edges.map(({ node: release }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { __typename, ...frontmatter } = release.frontmatter;

    return {
      id: release.id,
      ...frontmatter,
    };
  });
}

const IndexPage = ({ data }: Props) => {
  const releases = normalizeMusicData(data);

  return (
    <Layout currentPage="MUSIC">
      <SEO title="music" />
      <MusicList releases={releases} />
    </Layout>
  );
};

export const query = graphql`
  query Music {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
            type
            links {
              platform
              url
            }
            image {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
