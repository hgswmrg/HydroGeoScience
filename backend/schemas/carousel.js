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
    ],
  };
  