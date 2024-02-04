import {defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import schemas from '../sanity/schemas/schemas'

const config = defineConfig({
    projectId: 'zk0fkiye',
    dataset: 'production',
    title: 'Mekkemiddag studio',
    apiVersion: '2024-02-03',
    basePath: '/admin',
    useCdn: true,
    plugins: [     
        structureTool()
    ],
     schema: {
        types: 
            schemas
     },

})


export default config