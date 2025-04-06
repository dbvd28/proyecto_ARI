import path, {resolve} from 'node:path'
import { defineConfig } from 'vite'
import * as glob from 'glob'
import htmlPurge from 'vite-plugin-purgecss'
import handlebars from 'vite-plugin-handlebars'
import {ViteMinifyPlugin} from 'vite-plugin-minify'
import { getPageContext } from './data/index'


export default defineConfig({
    appType: 'mpa',
    base: process.env.DEPLOY_BASE_URL,
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'partials'),
        }),
        htmlPurge({}),
        ViteMinifyPlugin()
    ]
});