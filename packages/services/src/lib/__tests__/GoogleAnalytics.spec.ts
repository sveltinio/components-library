import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import { externals } from './__fixtures__/data.test.js';
import { GoogleAnalytics } from '..';

function getRelLinks(): string {
	const links = document.getElementsByTagName('link');
	for (let i = 0; i < links.length; i += 1) {
		if (links[i].getAttribute('rel') === 'preconnect') {
			return links[i].getAttribute('href');
		}
	}
	return '';
}

function getScriptTagById(scriptType: string): boolean {
	const scripts = document.getElementsByTagName('script');
	for (let i = 0; i < scripts.length; i += 1) {
		if (scripts[i].getAttribute('id') === scriptType) {
			return true;
		}
	}
	return false;
}

function getScriptSrcById(scriptType: string): string {
	const scripts = document.getElementsByTagName('script');
	for (let i = 0; i < scripts.length; i += 1) {
		if (scripts[i].getAttribute('id') === scriptType) {
			return scripts[i].getAttribute('src');
		}
	}
	return '';
}

beforeEach(() => {
	render(GoogleAnalytics, {
		props: {
			trackingId: externals.googleAnalytics.propertyID
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
