import type { APIRoute } from 'astro';
import { IS_PREVIEW } from '../consts';

export const GET: APIRoute = ({ site }) => {
	const body = IS_PREVIEW
		? '# Preview build: not for indexing.\nUser-agent: *\nDisallow: /\n'
		: `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap-index.xml', site)}\n`;
	return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
