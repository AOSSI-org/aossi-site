import type { APIRoute, GetStaticPaths } from 'astro';
import fs from 'node:fs/promises';
import { createRequire } from 'node:module';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { PAGES } from '../../data/pages';

const require = createRequire(import.meta.url);
const font = (p: string) => fs.readFile(require.resolve(p));

export const getStaticPaths: GetStaticPaths = () =>
	Object.entries(PAGES).map(([page, meta]) => ({ params: { page }, props: { title: meta.ogTitle } }));

const div = (style: Record<string, unknown>, children: unknown) => ({ type: 'div', props: { style: { display: 'flex', ...style }, children } });

export const GET: APIRoute = async ({ props }) => {
	const { title } = props as { title: string };
	const [bold, regular, mono] = await Promise.all([
		font('@fontsource/manrope/files/manrope-latin-800-normal.woff'),
		font('@fontsource/manrope/files/manrope-latin-400-normal.woff'),
		font('@fontsource/jetbrains-mono/files/jetbrains-mono-latin-500-normal.woff'),
	]);
	const svg = await satori(
		div(
			{ width: '1200px', height: '630px', flexDirection: 'column', justifyContent: 'space-between', padding: '72px', background: '#0c0d10', color: '#f3f2ee', fontFamily: 'Manrope', position: 'relative' },
			[
				div({ position: 'absolute', left: '0', right: '0', bottom: '0', height: '14px', background: '#ff7a3d' }, ''),
				div({ alignItems: 'center', gap: '18px', fontSize: 34, fontWeight: 800, letterSpacing: '0.06em' }, [
					div({ width: '44px', height: '44px', border: '3px solid #6b7079', borderRadius: '4px', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: '8px' }, div({ width: '28px', height: '12px', borderTop: '4px solid #ff7a3d', borderRadius: '50% 50% 0 0' }, '')),
					'AOSSI',
				]),
				div({ width: '1056px', fontSize: title.length > 40 ? 76 : 96, lineHeight: 1.04, fontWeight: 800, letterSpacing: '-0.03em' }, title),
				div({ fontFamily: 'JetBrains Mono', fontSize: 26, color: '#a9adb6' }, 'aossi.org · Open-source space hardware'),
			],
		) as any,
		{
			width: 1200,
			height: 630,
			fonts: [
				{ name: 'Manrope', data: bold, weight: 800, style: 'normal' },
				{ name: 'Manrope', data: regular, weight: 400, style: 'normal' },
				{ name: 'JetBrains Mono', data: mono, weight: 500, style: 'normal' },
			],
		},
	);
	const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
	return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};
