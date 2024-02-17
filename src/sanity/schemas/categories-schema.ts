// This is the schema definition for the "Categories" collection in Sanity
import { BiLayer } from "react-icons/bi";

const categories = {
  name: 'categories',
  type: 'document',
  title: 'Categories',
  icon: BiLayer,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
  ]
}

export default categories;
