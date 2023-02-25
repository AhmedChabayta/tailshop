export default {
  name: 'products',
  title: 'Products',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the product.',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'The slug for the product URL.',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'A short description of the product.',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      description: 'The price of the product in USD.',
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'The main image of the product.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      type: 'reference',
      to: [{type: 'category'}],
      title: 'Category',
      description: 'The category that the product belongs to.',
    },
    {
      name: 'features',
      type: 'array',
      title: 'Features',
      description: 'A list of features for the product.',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'feature',
              type: 'string',
              title: 'Feature',
              description: 'The name of the feature.',
            },
            {
              name: 'value',
              type: 'string',
              title: 'Value',
              description: 'The value of the feature.',
            },
          ],
        },
      ],
    },
  ],
}
