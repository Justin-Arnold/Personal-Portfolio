import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    vite: {
        plugins: [
            tailwindcss()
        ],
        preview: {
            allowedHosts: ['localhost', 'justin-arnold.com']
        },
    },
    integrations: [vue()]
});