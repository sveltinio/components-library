import '@testing-library/jest-dom';
import { describe, it, expect, beforeEach } from 'vitest';
import { render } from '@testing-library/svelte';
import { homePage, sampleArticle } from '../src/data/sample.js';
import { PageMetaTags } from '../src/lib/index.js';

function getTitle() {
	const titles = document.getElementsByTagName('title');
	return titles[0].textContent;
}

function getCanonical() {
	const links = document.getElementsByTagName('link');

	for (let i = 0; i < links.length; i += 1) {
		if (links[i].getAttribute('rel') === 'canonical') {
			return links[i].getAttribute('href');
		}
	}
	return '';
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

describe('PageMetaTags - HomePage', () => {
	beforeEach(() => {
		render(PageMetaTags, {
			props: {
				data: homePage
			}
		});
	});

	it('it should have title', async () => {
		expect(getTitle()).toBe('Home Page');
	});

	it('should have canonical', async () => {
		expect(getCanonical()).toBe('https://example.com');
	});

	it('should have meta props to HTML markup', async () => {
		expect(getMeta('description')).toBe('This is the description for the Home Page');
		expect(getMeta('keywords')).toBe('sveltekit, components, tests, jest');
	});
});

describe('PageMetaTags - Article', () => {
	beforeEach(() => {
		render(PageMetaTags, {
			props: {
				data: sampleArticle
			}
		});
	});

	it('it should have title', async () => {
		expect(getTitle()).toBe('Getting Started Article');
	});

	it('should have canonical', async () => {
		expect(getCanonical()).toBe('https://example.com/posts/getting-started');
	});

	it('should have meta props to HTML markup', async () => {
		expect(getMeta('description')).toBe('This is the description for the Getting Started Article');
		expect(getMeta('keywords')).toBe('sveltekit, components, tests, jest');
	});

	it('should have meta for OpenGraph', async () => {
		expect(getMeta('og:type')).toBe('article');
		expect(getMeta('og:url')).toBe('https://example.com/posts/getting-started');
		expect(getMeta('og:title')).toBe(sampleArticle.title);
		expect(getMeta('og:description')).toBe(sampleArticle.description);
		expect(getMeta('article:author')).toBe(sampleArticle.author);
		expect(getMeta('article:published_at')).toBe(sampleArticle.opengraph?.article?.published_at);
		expect(getMeta('article:modified_at')).toBe(sampleArticle.opengraph?.article?.modified_at);
		expect(getMeta('article:tag')).toBe('sveltekit');
	});

	it('should have meta for TwitterCard', async () => {
		expect(getMeta('twitter:card')).toBe('summary_large_image');
		expect(getMeta('twitter:site')).toBe(sampleArticle.twitter?.site);
		expect(getMeta('twitter:title')).toBe(sampleArticle.title);
		expect(getMeta('twitter:description')).toBe(sampleArticle.description);
	});
});
