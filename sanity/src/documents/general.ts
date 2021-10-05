export const General = {
  name: 'general',
  title: 'General Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'title',
      type: 'string',
      hidden: true,
    },
    {
      name: 'photo',
      title: 'Main Photo',
      description: 'This photo will be used as the photo in the header of the website',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'songkickUrl',
      title: 'Songkick URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
  ],
};
