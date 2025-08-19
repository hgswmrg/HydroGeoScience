// schema.js

export default {
    name: 'news',
    title: 'News',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'longdescription',
        title: 'longDescription',
        type: 'text',
      },
      {
        name: 'link',
        title: 'Link',
        type: 'url',
      },
      {
        name: "newsImage",
        title: "newsImage",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
        options: {
          dateFormat: 'YYYY-MM-DD',
          timeFormat: 'HH:mm',
          timeStep: 15,
          calendarTodayLabel: 'Today'
        },
        validation: (Rule) => Rule.required()
      }
    ],
  };
  