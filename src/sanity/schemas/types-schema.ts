// This is the schema definition for the "types" collection in Sanity

import { TbListSearch } from "react-icons/tb";

const types = {
  name: 'types',
  type: 'document',
  title: 'Recipe Types',
  icon: TbListSearch,
  fields: [
    {
      name: 'type',
      type: 'string',
      title: 'Name of type',
    },
  ]
}

export default types;
