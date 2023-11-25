import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'brandingpage',
  title: 'BrandingPage',
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
    defineField({
      name: 'title4',
      title: 'Title4',
      type: 'string',
    }),
    defineField({
      name: 'subtitle4',
      title: 'Subtitle4',
      type: 'string',
    }),
    defineField({
      name: 'sectiontwoMainText',
      title: 'SectionTwoMainText',
      type: 'string',
    }),
    defineField({
      name: 'SectionTwosubtitle',
      title: 'SectionTwoSubtitle',
      type: 'string',
    }),
    defineField({
      name: 'advantage1',
      title: 'Advantage1',
      type: 'string',
    }),
    defineField({
      name: 'advantage2',
      title: 'advantage2',
      type: 'string',
    }),
    defineField({
      name: 'advantage3',
      title: 'advantage3',
      type: 'string',
    }),
    defineField({
      name: 'sectionThreeMainText',
      title: 'SectionThreeMainText',
      type: 'string',
    }),
    defineField({
      name: 'SectionThreesubtitle',
      title: 'SectionThreeSubtitle',
      type: 'string',
    }),
    defineField({
      name: 'advantage4',
      title: 'Advantage4',
      type: 'string',
    }),
    defineField({
      name: 'advantage5',
      title: 'advantage5',
      type: 'string',
    }),
    defineField({
      name: 'advantage6',
      title: 'advantage6',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
  ],
})
