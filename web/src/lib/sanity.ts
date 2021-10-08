import createImageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import mem from 'mem';
import * as fetch from 'node-fetch';

import { SliceType } from './types';

const projectId = import.meta.env.SNOWPACK_PUBLIC_SANITY_PROJECT;
const dataset = import.meta.env.SNOWPACK_PUBLIC_SANITY_DATASET;
const baseUrl = `https://${projectId}.api.sanity.io/v2021-09-03/data/query/${dataset}`;

// FRAGMENTS
// ---------

const fragments = (() => {
  const image = /* groq */ `
    alt,
    asset,
    caption,
    crop,
    hotspot,
    ...asset-> {
      "dimensions": metadata.dimensions,
      "dominantColor": metadata.palette.dominant.background,
    },
  `;

  const release = /* groq */ `
    name,
  `;

  const page = /* groq */ `
    slices[] {
      type
    }
  `;

  return { image, page, release };
})();

// IMAGE URL
// ---------

const imageUrlBuilder = createImageUrlBuilder({ dataset, projectId });

function imageUrl(source: SanityImageSource) {
  return imageUrlBuilder.image(source);
}

// QUERY
// -----

const query = mem(
  async <TData = any>(query: string, parameters?: Record<string, any>): Promise<TData> => {
    const url = new URL(baseUrl);

    url.searchParams.append('query', query);

    if (parameters) {
      Object.entries(parameters).forEach(([key, value]) => {
        url.searchParams.append(`$${key}`, value);
      });
    }

    const result = await (fetch as unknown as typeof fetch.default)(url.toString(), {
      method: 'GET',
      // headers: {
      //   Authorization: `Bearer ${import.meta.env.SNOWPACK_PUBLIC_SANITY_TOKEN}`,
      // },
    })
      .then((response) => response.json() as any)
      .then((response) => {
        if (response.error) {
          console.error(response.error);
          throw new Error(response.error.description);
        }

        return response.result;
      });

    return result;
  },
);

export { fragments, imageUrl, query };
