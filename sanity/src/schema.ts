import schemaTypes from 'all:part:@sanity/base/schema-type';
import createSchema from 'part:@sanity/base/schema-creator';

import { Release } from './documents/release';
import { ReleaseLink } from './objects/release-link';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // OBJECTS
    ReleaseLink,

    // DOCUMENTS
    Release,
  ]),
});
