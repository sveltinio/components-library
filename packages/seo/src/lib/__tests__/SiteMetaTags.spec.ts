import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import { website } from './__fixtures__/data.test.js';
import { SiteMetaTags } from '..';

function getTitle() {
	const titles = document.getElementsByTagName('title');
	return titles[0].textContent;
}

function getCanonical() {
	const links = document.getElementsByTagName('link');
	return links[0].getAttribute('href');
}

function getMeta(metaName: string) {
	const metas = document.getElementsByTagName('meta');
	for (let i = 0; i < metas.length; i += 1) {
		if (
			metas[i].getAttribute('name') === metaName ||
			metas[i].getAttribute('itemprop') === metaName ||
			metas[i].getAttribute('property') === metaName
		) {
			return metas[i].getAttribute('content');
		}
	}
	return '';
}

beforeEach(() => {
	render(SiteMetaTags, {
		props: {
			websiteData: website
		}
	});
});

describe('SiteMetaTags', () => {
	it('it should have title', async () => {
		expect(getTitle()).toBe('example');
	});

	it('should have canonical', async () => {
		expect(getCanonical()).toBe('https://example.com');
	});

	it('should have meta props to HTML markup', async () => {
		expect(getMeta('description')).toBe('Sample enhanced text for SEO purpose');
		expect(getMeta('keywords')).toBe('sveltekit, components, tests, jest');
		expect(getMeta('googlebot')).toBe(
			'index,follow,max-snippet:-1,max-image-preview:large,noarchive,max-video-preview:-1'
		);
		expect(getMeta('robots')).toBe(
			'index,follow,max-snippet:-1,max-image-preview:large,noarchive,max-video-preview:-1'
		);
	});

	it('should have opengraph tags', async () => {
		expect(getMeta('og:type')).toBe('website');
		expect(getMeta('og:url')).toBe('https://example.com');
		expect(getMeta('og:title')).toBe('example');
		expect(getMeta('og:description')).toBe('Sample enhanced text for SEO purpose');
		expect(getMeta('og:image')).toBe('https://example.com/logo.png');
	});

	it('should have twitter tags', async () => {
		expect(getMeta('twitter:card')).toBe('summary_large_image');
		expect(getMeta('twitter:url')).toBe('https://example.com');
		expect(getMeta('twitter:title')).toBe('example');
		expect(getMeta('twitter:description')).toBe('Sample enhanced text for SEO purpose');
		expect(getMeta('twitter:image')).toBe('https://example.com/logo.png');
	});
});
