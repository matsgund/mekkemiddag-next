
// This is the schema definition for the ingredients
const ingredients = {
    name: 'ingredients',
    type: 'document',
    title: 'Ingredients',
    icon: () => '🍅',
    fields: [
        {
            title: "Name",
            name: "name",
            type: "string",
          },
          {
            title: "Image",
            name: "image",
            type: "image",
            option: {
              hotspot: true,
            },
          },
          {
            title: "Notes",
            name: "notes",
            type: "text",
          },
    ]
}

export default ingredients;
