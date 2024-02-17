import { SiSpeedtest  } from "react-icons/si";
// This is the schema definition for the Difficulty type
const difficulty = {
    name: 'difficulty',
    type: 'document',
    title: 'Difficulty',
    icon: SiSpeedtest,
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description',
        }
    ]
}

export default difficulty;
