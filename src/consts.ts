import { execSync } from 'node:child_process';

export const SITE_NAME = 'AOSSI';
export const IS_PREVIEW = process.env.PREVIEW === '1';
export const BLOG_URL = 'https://blog.aossi.org/';
export const GITHUB_URL = 'https://github.com/AOSSI-org';
// No AOSSI email address is published yet, so contact goes to the live form.
export const CONTACT_URL = 'https://aossi.org/contact';

/** Date of the last commit, so "Last updated" reflects real edits, not build time. */
export const LAST_UPDATED = (() => {
	try {
		return new Date(execSync('git log -1 --format=%cI', { encoding: 'utf8' }).trim());
	} catch {
		return new Date();
	}
})();

export const NAV = [
	{ href: '/about/', label: 'About' },
	{ href: '/contribute/', label: 'Contribute' },
	{ href: '/roadmap/', label: 'Roadmap' },
	{ href: '/sponsor/', label: 'Sponsor' },
	{ href: '/contact/', label: 'Contact' },
];
