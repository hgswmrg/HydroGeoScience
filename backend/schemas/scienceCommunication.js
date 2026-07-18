// schema.js

export default {
    name: 'scienceCommunication',
    title: 'Science Communication',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'section',
        title: 'Section',
        type: 'string',
        options: {
          list: [
            { value: 'presentation', title: 'Invited Presentation' },
            { value: 'piece', title: 'Science Communication Piece' },
          ],
          layout: 'radio',
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'citation',
        title: 'Citation',
        type: 'text',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'link',
        title: 'Link',
        type: 'url',
      },
      {
        name: 'tags',
        title: 'Tags',
        description: 'Optional labels like "presentation", "article", "podcast"',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags',
        },
      },
      {
        name: 'displayDate',
        title: 'Date',
        description: 'Used to order items (newest first)',
        type: 'date',
      },
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'section',
      },
    },
  };
