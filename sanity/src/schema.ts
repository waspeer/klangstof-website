import schemaTypes from 'all:part:@sanity/base/schema-type';
import createSchema from 'part:@sanity/base/schema-creator';

import { General } from './documents/general';
import { Page } from './documents/page';
import { Release } from './documents/release';
import { PageSlice } from './objects/page-slice';
import { ReleaseLink } from './objects/release-link';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // OBJECTS
    PageSlice,
    ReleaseLink,

    // DOCUMENTS
    General,
    Page,
    Release,
  ]),
});
