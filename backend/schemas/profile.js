// schema.js

export default {
    name: 'profile',
    title: 'Profile',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'position',
        title: 'Position',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'linkedIn',
        title: 'LinkedIn',
        type: 'url',
      },
      {
        name: "profileImage",
        title: "profileImage",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "profileType",
        title: "Profile type",
        type: "string",
        options: {
          list: [
            { value: "affiliated", title: "Affiliated" },
            { value: "postdoctor", title: "Postdoctor" },
            { value: "graduate", title: "Graduate" },
            { value: "undergraduate", title: "Undergraduate" },
            { value: "alumni", title: "Alumni" },
            { value: "director", title: "Director" }
          ],
          hotspot: true,
        },
      },
    ],
  };
  