import type { IWebSite } from '@sveltinio/seo/dist/types';

const website: IWebSite = {
	name: 'components.sveltin.io',
	baseURL: 'https://components.sveltin.io',
	language: 'en-GB',
	title: 'components.sveltin.io',
	slogan: '',
	description: '',
	seoDescription: '',
	favicon: 'favicon.ico',
	logo: 'logo.png',
	copyright: '2022, ',
	keywords: '',
	contactEmail: 'github@sveltin.io',
	sitemap: {
		changefreq: 'weekly',
		priority: 0.5
	},
	socials: {
		linkedin: '',
		twitter: '',
		github: 'https://github.com/sveltinio/components-library',
		facebook: '',
		instagram: '',
		youtube: ''
	},
	webmaster: {
		name: 'sveltinio',
		address: 'Somewhere, World (Milky Way)',
		contactEmail: 'github@sveltin.io'
	}
};

export { website };
