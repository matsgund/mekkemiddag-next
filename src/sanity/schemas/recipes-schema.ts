// This is the schema definition for the "recipes" collection in Sanity
import { GiCook} from "react-icons/gi";

const recipes = {
    name: 'recipes',
    type: 'document',
    title: 'Recipes',
    icon: GiCook,
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100,
            },
        },
        {
            name: 'description',
            type: 'array',
            title: 'Description/Instructions',
            of: [{type: 'block'},{type:'image'}]

        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
        },

        {
            name: 'ingredientsGroups',
            type: 'array',
            title: 'Ingredients Groups',
            of: [
                { 
                    name: 'ingredientGroup',
                    type: 'object',
                    fields: [
                        {
                            name: 'groupName',
                            type: 'string',
                        },
                        {
                            name: 'ingredientsReference',
                            type: 'array',
                            title: 'Ingredients',
                            of: [
                            {
                                type: 'object',
                                fields: [
                                    {   name: 'ingredient',
                                        title: 'Ingredient',
                                        type: 'reference',
                                        to: [
                                            {type:'ingredients'}
                                        ]
                                    },
                                    {
                                        name: 'amount',
                                        type: 'number',
                                        title: 'Amount',
                                    },
                                    {
                                        name: 'unit',
                                        type: 'string',
                                        title: 'Unit',
                                        options: {
                                            list: ["g","kg", "ss", "ts.", "dl", "cl", "l", "stk",],
                                          },
                                    },
                                    {
                                        name: 'preparation',
                                        type: 'string',
                                        title: 'Preparation',
                                    }  
                                ],
                                preview: {
                                    select: {
                                      title: "ingredient.name",
                                      name: "ingredient.name",
                                      media: "ingredient.image",
                                      amount: "amount",
                                      unit: "unit",
                                    },
                                    prepare({
                                        title,
                                        subtitle,
                                        media,
                                        amount = "(No amount set)",
                                        unit = "(No unit set)",
                                    }: {
                                        title: string,
                                        subtitle: string,
                                        media: any,
                                        amount?: string,
                                        unit?: string,
                                    }) {
                                        return {
                                            title,
                                            subtitle: `${amount} ${unit}`,
                                            media,
                                        };
                                    },
                                  },
                                },
                            ],
                        }

                    ]
                    
                }
            ],
        },
        {
            name: 'categories',
            type: 'array',
            title: 'Category',
            of: [
                {type: 'reference',
                 to: [
                     {type:'categories'}
                 ]
                }
            ],
        },
        {
            name: 'type',
            type: 'array',
            title: 'Recipe types',
            of: [
                {type: 'reference',
                    to: [
                        {type:'types'}
                    ]
                }
            ],
        },
        {
            name: 'time',
            type: 'string',
            title: 'Estimated time',
        },
        {
            name: 'degrees',
            type: 'number',
            title: 'Oven Degrees',
        },
        {
            name: 'difficulty',
            title: 'Difficulty',
            type: 'reference',
            to: [{type: 'difficulty'}],
        },
        {
            name: 'date',
            type: 'datetime',
            title: 'Date',
            initialValue: (new Date()).toISOString()
        },

    ]
}

export default recipes;