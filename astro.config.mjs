// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE is the canonical production origin (aossi.org; aossi.info will redirect there). A preview build sets PREVIEW=1,
// which adds noindex everywhere (see src/consts.ts and scripts/postbuild.mjs).
export default defineConfig({
	site: process.env.SITE || 'https://aossi.org',
	trailingSlash: 'always',
	build: { format: 'directory', inlineStylesheets: 'never' },
	integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
	markdown: { smartypants: false },
	image: { responsiveStyles: false },
	devToolbar: { enabled: false },
	// Never inline fonts or images as data: URIs (keeps the CSP strict: font-src 'self').
	vite: { build: { assetsInlineLimit: 0 } },
});
