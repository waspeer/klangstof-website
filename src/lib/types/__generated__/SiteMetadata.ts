/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SiteMetadata
// ====================================================

export interface SiteMetadata_site_siteMetadata {
  __typename: "SiteSiteMetadata";
  title: string | null;
  description: string | null;
  author: string | null;
}

export interface SiteMetadata_site {
  __typename: "Site";
  siteMetadata: SiteMetadata_site_siteMetadata | null;
}

export interface SiteMetadata {
  site: SiteMetadata_site | null;
}
