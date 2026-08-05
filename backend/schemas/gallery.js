// schema.js

const CURRENT_YEAR = 2026;
const EARLIEST_YEAR = 2013;
const LATEST_YEAR = 2035;

const yearOptions = Array.from(
  { length: LATEST_YEAR - EARLIEST_YEAR + 1 },
  (_, index) => {
    const year = String(LATEST_YEAR - index);
    return { value: year, title: year };
  }
);

export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      name: 'year',
      title: 'Year',
      type: 'string',
      options: {
        list: yearOptions,
      },
      initialValue: String(CURRENT_YEAR),
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      description: 'Optional label for the occasion, e.g. "Annual retreat"',
      type: 'string',
    },
    {
      name: 'photos',
      title: 'Photos',
      description: 'Upload or drag in as many photos as you like',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'year',
      subtitle: 'title',
      media: 'photos.0',
    },
  },
};
