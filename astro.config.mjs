import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    output: 'static',
    vite: {
        plugins: [
            tailwindcss()
        ]
    },
    integrations: [vue()]
});