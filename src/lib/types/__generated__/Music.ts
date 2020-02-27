/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Music
// ====================================================

export interface Music_allMusicYaml_edges_node_links {
  __typename: "MusicYamlLinks";
  platform: string;
  url: string;
}

export interface Music_allMusicYaml_edges_node {
  __typename: "MusicYaml";
  id: string;
  image: string;
  date: any;
  description: string;
  title: string;
  type: string;
  links: (Music_allMusicYaml_edges_node_links | null)[];
}

export interface Music_allMusicYaml_edges {
  __typename: "MusicYamlEdge";
  node: Music_allMusicYaml_edges_node;
}

export interface Music_allMusicYaml {
  __typename: "MusicYamlConnection";
  edges: Music_allMusicYaml_edges[];
}

export interface Music {
  allMusicYaml: Music_allMusicYaml;
}
