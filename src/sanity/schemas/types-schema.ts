// This is the schema definition for the "types" collection in Sanity
const types = {
  name: 'types',
  type: 'document',
  title: 'Types',
  icon: () => '🍅',
  fields: [
    {
      name: 'type',
      type: 'string',
      title: 'Name of type',
    },
  ]
}

export default types;
