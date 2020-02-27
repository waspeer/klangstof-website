/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Music
// ====================================================

export interface Music_allMarkdownRemark_edges_node_frontmatter_links {
  __typename: "MarkdownRemarkFrontmatterLinks";
  platform: string;
  url: string;
}

export interface Music_allMarkdownRemark_edges_node_frontmatter_image_childImageSharp_fluid {
  __typename: "ImageSharpFluid";
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp: string | null;
  srcSetWebp: string | null;
  sizes: string;
}

export interface Music_allMarkdownRemark_edges_node_frontmatter_image_childImageSharp {
  __typename: "ImageSharp";
  fluid: Music_allMarkdownRemark_edges_node_frontmatter_image_childImageSharp_fluid | null;
}

export interface Music_allMarkdownRemark_edges_node_frontmatter_image {
  __typename: "File";
  childImageSharp: Music_allMarkdownRemark_edges_node_frontmatter_image_childImageSharp | null;
}

export interface Music_allMarkdownRemark_edges_node_frontmatter {
  __typename: "MarkdownRemarkFrontmatter";
  date: string;
  description: string;
  title: string;
  type: string;
  links: Music_allMarkdownRemark_edges_node_frontmatter_links[];
  image: Music_allMarkdownRemark_edges_node_frontmatter_image;
}

export interface Music_allMarkdownRemark_edges_node {
  __typename: "MarkdownRemark";
  id: string;
  frontmatter: Music_allMarkdownRemark_edges_node_frontmatter;
}

export interface Music_allMarkdownRemark_edges {
  __typename: "MarkdownRemarkEdge";
  node: Music_allMarkdownRemark_edges_node;
}

export interface Music_allMarkdownRemark {
  __typename: "MarkdownRemarkConnection";
  edges: Music_allMarkdownRemark_edges[];
}

export interface Music {
  allMarkdownRemark: Music_allMarkdownRemark;
}
