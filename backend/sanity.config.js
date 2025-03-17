import { defineConfig } from 'sanity'
import {deskTool} from 'sanity/desk'

import {schemaTypes} from './schemas'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'


export default defineConfig({
  name: 'default',
  title: 'hgswmrg',
  basePath: '/studio',
  projectId: 'wefrxt7t',
  dataset: 'production',

  plugins: [deskTool(), vercelDeployTool(),],

  schema: {
    types: schemaTypes,
  },
})