import SelectInput from '@sanity/form-builder/lib/inputs/SelectInput';
import { Stack, Text } from '@sanity/ui';
import { sentenceCase } from 'change-case';
import { withDocument } from 'part:@sanity/form-builder';
import * as React from 'react';
import { BiImage, BiDisc, BiCalendarStar, BiError } from 'react-icons/bi';
import type { IconType } from 'react-icons/lib';

import { SliceType } from '../lib/types';

// SLICE ICONS
// -----------

const sliceIcons: Record<SliceType, IconType> = {
  HEADER: BiImage,
  RELEASES: BiDisc,
  SHOWS: BiCalendarStar,
};

// SLICE PICKER
// ------------

const SlicePicker = withDocument(
  React.forwardRef((properties: any, reference) => {
    const value = properties.value as SliceType;

    return (
      <Stack space={4}>
        <SelectInput {...properties} ref={reference} />

        {value === SliceType.HEADER && (
          <Text size={1} muted>
            This slice shows an illustrative header containing the band's logo and the photo
            uploaded in 'General Settings'
          </Text>
        )}

        {value === SliceType.RELEASES && (
          <Text size={1} muted>
            This slice shows a list of Klangstof's releases. This list can be edited by editing
            'Releases' in the main menu on the left.
          </Text>
        )}

        {value === SliceType.SHOWS && (
          <Text size={1} muted>
            This slice shows a Songkick widget with the upcoming shows.
          </Text>
        )}
      </Stack>
    );
  }),
);

// SCHEMA
// ------

export const PageSlice = {
  name: 'pageSlice',
  title: 'Slice',
  type: 'object',
  fields: [
    {
      name: 'type',
      title: 'Type of slice',
      type: 'string',
      inputComponent: SlicePicker,
      options: {
        list: [SliceType.HEADER, SliceType.RELEASES, SliceType.SHOWS].map((type) => ({
          title: (
            <>
              {sliceIcons[type]({})} {sentenceCase(type)}
            </>
          ),
          value: type,
        })),
        layout: 'radio',
      },
    },

    // HEADER
    // ------
  ],
  preview: {
    select: {
      type: 'type',
    },
    prepare({ type }: { type: SliceType }) {
      if (!type) {
        return {
          media: BiError,
          title: 'No slice type selected',
          subtitle: 'Click on this slice to select a type',
        };
      }

      const Icon = sliceIcons[type];

      return {
        media: Icon,
        title: sentenceCase(type),
      };
    },
  },
};
