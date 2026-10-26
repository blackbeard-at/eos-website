// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Unterseiten als ueber-uns.html statt ueber-uns/index.html bauen:
  // Cloudflare liefert sie dann direkt unter /ueber-uns aus (ohne
  // Weiterleitung auf /ueber-uns/).
  trailingSlash: 'never',
  build: {
    format: 'file',
    // CSS direkt in die Seite einbetten (spart render-blockierende Requests)
    inlineStylesheets: 'always',
  },
});
