import path, { resolve } from 'node:path';
import { defineConfig } from 'vite';
import { globSync } from 'glob';
import htmlPurge from 'vite-plugin-purgecss';
import handlebars from 'vite-plugin-handlebars';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import { getPageContext } from './data/index.js';

const obtenerEntradas = () => {
  const entradas = globSync('./*.html', {
    ignore: ['./dist/**', './node_modules/**']
  });

  const result = Object.fromEntries(
    entradas.map(fileData => [
      fileData.slice(0, fileData.length - path.extname(fileData).length),
      resolve(__dirname, fileData)
    ])
  );

  console.log('✅ Archivos HTML encontrados:', result);
  return result;
};

export default defineConfig({
    appType: 'mpa',
    base: process.env.DEPLOY_BASE_URL,
    build: {
        rollupOptions: {
            input: obtenerEntradas()
        },
        minify: true
    },
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'partials'),
            context : getPageContext
        }),
        htmlPurge({}),
        ViteMinifyPlugin()
    ]
});

