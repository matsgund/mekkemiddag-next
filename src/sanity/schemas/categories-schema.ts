// This is the schema definition for the "Categories" collection in Sanity
const categories = {
  name: 'categories',
  type: 'document',
  title: 'Categories',
  icon: () => '🍲',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
  ]
}

export default categories;
