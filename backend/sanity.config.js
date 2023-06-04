import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'hgswmrg',

  projectId: 'wefrxt7t',
  dataset: 'production',
  basePath: "/admin",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
