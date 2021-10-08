import { BiDockTop } from 'react-icons/bi';

export const Page = {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      hidden: true,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slices',
      title: 'Slices',
      description: 'Add / remove slices of content to the page and determine the order of them',
      type: 'array',
      of: [{ type: 'pageSlice' }],
    },
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare: ({ name }) => ({
      title: name,
      media: BiDockTop,
    }),
  },
};
