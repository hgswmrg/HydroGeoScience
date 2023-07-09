// schema.js

export default {
    name: 'publications',
    title: 'Publications',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'topic',
        title: 'Topic',
        type: 'string',
        options:{
            list:[
                {value:"water", title:"water"},
                {value:"forest", title:"forest"},
                {value:"chemistry", title:"chemistry"},
            ]
        }
      },
      {
        name: 'link',
        title: 'Link',
        type: 'url',
      },
      {
        name: "year",
        title: "Year",
        type: "string",
        options: {
            list: [
                {value: "2027", title:"2027"},
                {value: "2026", title:"2026"},
                {value: "2025", title:"2025"},
                {value: "2024", title:"2024"},
                {value: "2023", title:"2023"},
                {value: "2022", title:"2022"},
                {value: "2021", title:"2021"},
                {value: "2020", title:"2020"},
                {value: "2019", title:"2019"},
                {value: "2018", title:"2018"},
                {value: "2017", title:"2017"},
                {value: "2016", title:"2016"},
                {value: "2015", title:"2015"},
                {value: "2014", title:"2014"},
                {value: "2013", title:"2013"},
            ],
          hotspot: true,
        },
      },
    ],
  };
  