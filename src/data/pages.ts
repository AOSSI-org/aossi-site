// Titles and descriptions. Titles mirror the live aossi.org tabs; descriptions are
// the approved lead sentence of each page, word for word.
export const PAGES = {
	home: {
		title: 'AOSSI | Open-source space hardware',
		ogTitle: "The designs are free. The builders shouldn't be.",
		description: 'AOSSI will publish open space hardware designs for anyone to use. Builders will be contractors, paid only from net revenue, if there is any.',
	},
	about: {
		title: 'About | AOSSI',
		ogTitle: 'Make space hardware cheaper. Make open contribution a real career.',
		description: 'AOSSI will publish its designs openly, so space hardware gets cheaper and easier to reach. It will pay contributors a share of net revenue, if there is any, so contributing can be a real career.',
	},
	contribute: {
		title: 'Contribute | AOSSI',
		ogTitle: 'Bring what you can build.',
		description: "Engineers, machinists, A&P mechanics, programmers, technical writers, self-taught builders. A degree is optional. The work isn't.",
	},
	roadmap: {
		title: 'Roadmap | AOSSI',
		ogTitle: 'Roadmap',
		description: "Dates go up when they're real. Not before.",
	},
	sponsor: {
		title: 'Sponsor | AOSSI',
		ogTitle: 'Fund open space hardware.',
		description: 'Your support will pay for open designs anyone can use.',
	},
	contact: {
		title: 'Contact | AOSSI',
		ogTitle: 'Talk to AOSSI.',
		description: 'Contributors, sponsors, press. Also anyone with a better idea, or proof AOSSI is wrong.',
	},
	credits: {
		title: 'Credits | AOSSI',
		ogTitle: 'Credits',
		description: 'Image, font and icon credits.',
	},
	notfound: {
		title: 'Lost signal | AOSSI',
		ogTitle: 'Lost signal',
		description: "This page isn't here.",
	},
} as const;

export type PageKey = keyof typeof PAGES;
