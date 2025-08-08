import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import mkcert from 'vite-plugin-mkcert'
import tailwindcssNesting from 'tailwindcss/nesting';
import vercelStatic from '@astrojs/vercel/static';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    output: 'static',
    adapter: vercelStatic(),
    vite: {
        plugins: [
            mkcert(),
            tailwindcss()
        ],
        server: {
            https: true
        },
        css: {
            postcss: {
                plugins: [tailwindcssNesting()]
            }
        }
    },
    integrations: [vue()]
});