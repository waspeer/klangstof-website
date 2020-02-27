/* eslint-disable import/prefer-default-export */
import { graphql } from 'gatsby';

export const fragments = graphql`
  fragment GatsbyImageSharpFluid_withWebp on ImageSharpFluid {
    base64
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`;
