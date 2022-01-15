import type { MenuItem, WebSite } from '../../types';

const website: WebSite = {
	name: 'example.com',
	baseURL: 'https://example.com',
	language: 'en-GB',
	logo: 'logo.png',
	title: 'example',
	slogan: '',
	description: 'Example.com is your perfect fit.',
	seoDescription: 'Sample enhanced text for SEO purpose',
	favicon: 'favicon.ico',
	copyright: 'MIT License @ 2021-present example.com',
	keywords: 'sveltekit, components, tests, jest',
	contactEmail: '',
	sitemap: {
		changefreq: 'monthly',
		priority: 0.5
	},
	socials: {
		linkedin: '',
		twitter: '',
		github: 'https://github.com/sveltinio',
		facebook: '',
		instagram: '',
		youtube: ''
	},
	webmaster: {
		name: 'indaco',
		address: 'Somewhere, World (Milky Way)',
		contactEmail: 'github@mircoveltri.me'
	}
};

const menu: Array<MenuItem> = [
	{
		identifier: 'home',
		name: 'Home',
		url: '/',
		weight: 1
	},
	{
		identifier: 'about',
		name: 'About',
		url: '/about',
		weight: 2
	},
	{
		identifier: 'github',
		name: 'GitHub',
		url: 'https://github.com/sveltinio',
		weight: 3,
		external: true
	}
];

export { website, menu };
