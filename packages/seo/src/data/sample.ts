import { OpenGraphType, TwitterCardType } from '$lib/types.js';
import type { SEOWebPageMetadata, SEOMenuItem, SEOWebSite } from '$lib/types.js';

const website: SEOWebSite = {
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
	socials: {
		github: 'https://github.com/sveltinio'
	},
	webmaster: {
		name: 'indaco',
		address: 'Somewhere, World (Milky Way)',
		contactEmail: 'github@mircoveltri.me'
	}
};

const homePage: SEOWebPageMetadata = {
	url: website.baseURL,
	title: 'Home Page',
	description: 'This is the description for the Home Page',
	keywords: 'sveltekit, components, tests, jest',
	opengraph: {
		type: OpenGraphType.Website
	},
	twitter: {
		type: TwitterCardType.Summary
	}
};

const sampleArticle: SEOWebPageMetadata = {
	url: website.baseURL + '/posts/' + 'getting-started',
	title: 'Getting Started Article',
	description: 'This is the description for the Getting Started Article',
	author: 'Mirco Veltri',
	keywords: 'sveltekit, components, tests, jest',
	opengraph: {
		type: OpenGraphType.Article,
		article: {
			published_at: '23-01-2022',
			modified_at: '24-01-2022'
		}
	},
	twitter: {
		type: TwitterCardType.Large,
		site: '@indaco'
	}
};

const menu: Array<SEOMenuItem> = [
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

export { website, homePage, sampleArticle, menu };
