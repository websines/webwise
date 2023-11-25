import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featureslist',
  title: 'FeaturesList',
  type: 'document',
  fields: [
    defineField({
      name: 'mainTitle',
      title: 'MainTitle',
      type: 'string',
    }),
    defineField({
      name: 'subtitleMain',
      title: 'SubtitleMain',
      type: 'string',
    }),
    defineField({
      name: 'title1',
      title: 'Title1',
      type: 'string',
    }),
    defineField({
      name: 'subtitle1',
      title: 'Subtitle1',
      type: 'string',
    }),
    defineField({
      name: 'title2',
      title: 'Title2',
      type: 'string',
    }),
    defineField({
      name: 'subtitle2',
      title: 'Subtitle2',
      type: 'string',
    }),
    defineField({
      name: 'title3',
      title: 'Title3',
      type: 'string',
    }),
    defineField({
      name: 'subtitle3',
      title: 'Subtitle3',
      type: 'string',
    }),
  ],
})
