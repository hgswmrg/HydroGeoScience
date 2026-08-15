export default {
    name: 'products',
    title: 'Products',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Product Name',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Product Image',
        description:
          'Cover photo: landscape 16:9, ideally 1600 x 900 px (minimum 1200 x 675). PNG or JPG. Anything else still displays, but is centered with blank space on the sides.',
        type: 'image',
        options: {
          hotspot: true, // Enables image cropping and focal point selection
        },
      },
      {
        name: 'description',
        title: 'Product Description',
        type: 'text',
      },
      {
        name: 'link',
        title: 'Product Link',
        type: 'url',
      },
      {
        name: 'displayDate',
        title: 'Date',
        description: 'Newest products appear first. Leave blank to use the date the product was created.',
        type: 'date',
        options: {
          dateFormat: 'YYYY-MM-DD',
          calendarTodayLabel: 'Today',
        },
      },
    ],
  };
