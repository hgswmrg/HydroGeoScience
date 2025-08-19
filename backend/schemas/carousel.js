// schema.js

export default {
    name: 'carousel',
    title: 'Carousel',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
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
        name: 'displayDate',
        title: 'Display Date',
        type: 'date',
        options: {
          dateFormat: 'YYYY-MM-DD',
          calendarTodayLabel: 'Today'
        }
      },
    ],
  };
  