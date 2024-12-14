// @ts-check
import { defineConfig, envField } from 'astro/config';
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
    site: 'https://bizaarkq.github.io',
    base: 'conteo-navidad',
    integrations: [react()],
    env: {
        schema: {
            PUBLIC_SPOTIFY_CLIENT_ID: envField.string({
                context: "client", access: "public", optional: false
            }),
            SPOTIFY_CLIENT_SECRET: envField.string({
                context: "server", access: "secret"
            }),
        }
    }
});
