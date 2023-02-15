import '@testing-library/jest-dom';
import { describe, it, expect, beforeEach } from 'vitest';
import { render } from '@testing-library/svelte';
import { GoogleAnalytics } from '../src/lib';
import { getRelLinks, getScriptsByTestId } from './test-utils.js';
import { gaPropertyID } from '../src/data/sample.js';

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
		const scriptTag = getScriptsByTestId('google_analytics_script');
		expect(scriptTag).toBeTruthy();
	});

	it('should have a script src to google analytics', async () => {
		const scriptTag = getScriptsByTestId('google_analytics_script');
		expect(scriptTag?.getAttribute('src')).toBe(
			'https://www.googletagmanager.com/gtag/js?id=1234567890&l=dataLayer'
		);
	});

	it('should have a script with async sets to true', async () => {
		const scriptTag = getScriptsByTestId('google_analytics_script');
		expect(scriptTag?.async).toBe(true);
	});
});
