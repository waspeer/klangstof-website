export const General = {
  name: 'general',
  title: 'General Settings',
  type: 'document',
  fields: [
    {
      name: 'songkickUrl',
      title: 'Songkick URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
  ],
};
