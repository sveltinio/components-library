import '@testing-library/jest-dom';
import { describe, it, expect, beforeEach } from 'vitest';
import { render } from '@testing-library/svelte';
import { sampleArticle } from '../src/data/sample.js';
import { TwitterCard } from '../src/lib/components/metadata/twittercard/index.js';

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
	render(TwitterCard, {
		props: {
			data: sampleArticle
		}
	});
});

describe('TwitterCard ', () => {
	it('should have meta props to HTML markup', async () => {
		expect(getMeta('twitter:card')).toBe('summary_large_image');
		expect(getMeta('twitter:site')).toBe(sampleArticle.twitter?.site);
		expect(getMeta('twitter:title')).toBe(sampleArticle.title);
		expect(getMeta('twitter:description')).toBe(sampleArticle.description);
	});
});
