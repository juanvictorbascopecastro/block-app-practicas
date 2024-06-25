import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    base: 'https://juanvictorbascopecastro.github.io/block-app-practicas',
    define: {
        'process.env': process.env,
    },
    plugins: [vue()],
    resolve: {
        alias: [
            {
                find: /^~.+/,
                replacement: (val) => {
                    return val.replace(/^~/, '')
                },
            },
        ],
    },
    build: {
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },
})
