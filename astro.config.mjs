// @ts-check
import { defineConfig, envField } from 'astro/config';
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
    site: 'https://bizaarkq.github.io',
    base: '/conteo-navidad',
    integrations: [react()],
});
