import React from 'react';

import Collage from '#components/Collage';
import Layout from '#components/Layout';
import SEO from '#components/Seo';

const IndexPage = () => (
  <Layout currentPage="HOME">
    <SEO title="the noise you make is silent" />
    <Collage />
  </Layout>
);

export default IndexPage;
