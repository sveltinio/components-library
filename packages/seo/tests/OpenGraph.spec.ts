import '@testing-library/jest-dom';
import { describe, it, expect, beforeEach } from 'vitest';
import { render } from '@testing-library/svelte/svelte5';
import { sampleArticle } from '../src/data/sample.js';
import { OpenGraph } from '../src/lib/components/metadata/opengraph/index.js';

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
	render(OpenGraph, {
		props: {
			data: sampleArticle
		}
	});
});

describe('OpenGraph - Article', () => {
	it('should have meta props to HTML markup', async () => {
		expect(getMeta('og:type')).toBe('article');
		expect(getMeta('og:url')).toBe('https://example.com/posts/getting-started');
		expect(getMeta('og:title')).toBe(sampleArticle.title);
		expect(getMeta('og:description')).toBe(sampleArticle.description);
		expect(getMeta('article:author')).toBe(sampleArticle.author);
		expect(getMeta('article:tag')).toBe('sveltekit');
	});
});
