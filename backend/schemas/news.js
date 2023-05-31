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
      }
    ],
  };
  