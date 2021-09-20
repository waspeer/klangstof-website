export const Release = {
  name: 'release',
  title: 'Release',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'artwork',
      title: 'Artwork',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          { title: 'Album', value: 'ALBUM' },
          { title: 'EP', value: 'EP' },
          { title: 'Single', value: 'SINGLE' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ type: 'releaseLink' }],
    },
  ],
};
