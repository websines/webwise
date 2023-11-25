import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'servicecard',
  title: 'ServiceCard',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
  ],
})
