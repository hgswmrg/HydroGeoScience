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
    ],
  };
  