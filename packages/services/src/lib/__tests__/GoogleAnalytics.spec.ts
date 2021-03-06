import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import { GoogleAnalytics } from '..';
import { getRelLinks, getScriptSrcById, getScriptTagById } from './__fixtures__/test-utils';
import { gaPropertyID } from './__fixtures__/data.test.js';

beforeEach(() => {
	render(GoogleAnalytics, {
		props: {
			propertyID: gaPropertyID
		}
	});
});

describe('GoogleAnalytics', () => {
	it('should have preconnect defined in the document', async () => {
		expect(getRelLinks()).toBe('https://www.googletagmanager.com');
	});

	it('should have a script tag with id google-analytics-script', async () => {
		expect(getScriptTagById('google-analytics-script')).toBe(true);
	});

	it('should have a script src to google analytics', async () => {
		expect(getScriptSrcById('google-analytics-script')).toBe(
			'https://www.googletagmanager.com/gtag/js?id=1234567890&l=dataLayer'
		);
	});
});
