import '@testing-library/jest-dom';
import { describe, it, expect, beforeEach } from 'vitest';
import { render } from '@testing-library/svelte';
import { GoogleFonts } from '../src/lib';
import { googleFonts } from './__fixtures__/data.test.js';
import { getGoogleFontLinks, getRelLinks } from './__fixtures__/test-utils';

beforeEach(() => {
	render(GoogleFonts, {
		props: {
			fonts: googleFonts
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
