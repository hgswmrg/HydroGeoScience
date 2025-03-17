// schema.js

export default {
    name: 'jobs',
    title: 'Jobs',
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
        name: "profileType",
        title: "Profile type",
        type: "string",
        options: {
          list: [
            { value: "research-assistant", title: "Research Assistant" },
            { value: "postdoctor", title: "Postdoctor" },
            { value: "graduate", title: "Graduate" },
            { value: "undergraduate", title: "Undergraduate" },
          ],
          hotspot: true,
        },
      },
    ],
  };
  