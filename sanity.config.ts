import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import {schemaTypes} from "./backend/schemas"

const config = defineConfig({
  projectId: process.env.PROJECT_ID,
  dataset: "production",
  title: "HydroGeoScience",
  apiVersion: "2023-03-09",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemaTypes }
})

export default config