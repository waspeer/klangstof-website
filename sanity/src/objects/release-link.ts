import preview from 'part:sanity-plugin-icon-picker/preview';

export const ReleaseLink = {
  name: 'releaseLink',
  title: 'Link',
  type: 'object',
  fields: [
    {
      name: 'icon',
      title: 'Icon',
      type: 'iconPicker',
      options: {
        providers: ['fa'],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.uri().required(),
    },
  ],
  preview: {
    select: {
      icon: 'icon',
      name: 'name',
      url: 'url',
    },
    prepare({ icon, name, url }) {
      return {
        title: name,
        subtitle: url,
        media: preview(icon),
      };
    },
  },
};
