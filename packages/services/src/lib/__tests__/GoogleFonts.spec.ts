import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import { GoogleFonts } from '..';
import { externals } from './__fixtures__/data.test.js';

function getRelLinks(): string {
	const links = document.getElementsByTagName('link');
	for (let i = 0; i < links.length; i += 1) {
		if (links[i].getAttribute('rel') === 'preconnect') {
			return links[i].getAttribute('href');
		}
	}
	return '';
}

function getGoogleFontLinks(): Array<string> {
	const links = document.getElementsByTagName('link');
	const hrefs: Array<string> = [];
	for (let i = 0; i < links.length; i += 1) {
		if (links[i].getAttribute('media') === 'print') {
			hrefs.push(links[i].getAttribute('href'));
		}
	}
	return hrefs;
}

beforeEach(() => {
	render(GoogleFonts, {
		props: {
			fonts: externals.googleFonts
		}
	});
});

describe('GoogleFonts', () => {
	it('it should have preconnect defined in the document', async () => {
		expect(getRelLinks()).toBe('https://fonts.gstatic.com');
	});

	it('should have 2 links to googleFonts', async () => {
		const links = getGoogleFontLinks();
		expect(links.length).toBe(2);
	});

	it('should use IBM Plex Sans with defined weights', async () => {
		const links = getGoogleFontLinks();
		expect(links[0]).toBe(
			'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;300;400;500;600;700&display=swap'
		);
	});

	it('should use IBM Plex Mono with defined weights', async () => {
		const links = getGoogleFontLinks();
		expect(links[1]).toBe(
			'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100;200;300;400&display=swap'
		);
	});
});
