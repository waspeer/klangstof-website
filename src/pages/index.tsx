import React from 'react';

import Collage from '#components/Collage';
import Layout from '#components/Layout';
import SEO from '#components/Seo';

const IndexPage = () => (
  <Layout currentPage="HOME">
    <SEO title="Home" />
    <Collage />
  </Layout>
);

export default IndexPage;
