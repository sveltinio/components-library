import '@testing-library/jest-dom';
import { beforeEach, describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import { website } from '../src/data/sample.js';
import { JsonLdWebSite } from '../src/lib/index.js';

function getScripts(scriptType: string, dataTestId: string): string {
	const scripts = document.getElementsByTagName('script');
	for (let i = 0; i < scripts.length; i += 1) {
		if (
			scripts[i].getAttribute('type') === scriptType &&
			scripts[i].getAttribute('data-testid') === dataTestId
		) {
			return scripts[i].text;
		}
	}
	return '';
}

beforeEach(() => {
	render(JsonLdWebSite, {
		props: {
			data: website
		}
	});
});

describe('JsonLdWebSite', () => {
	it('should have jsonld WebSite object with props', async () => {
		const jsonLdScript = getScripts('application/ld+json', 'jsonld-website');
		const jsonLdString = JSON.parse(jsonLdScript);
		expect(jsonLdString['@type']).toBe('WebSite');
		expect(jsonLdString['@id']).toBe('https://example.com/#website');
		expect(jsonLdString.name).toBe('example.com');
		expect(jsonLdString.url).toBe('https://example.com');
		expect(jsonLdString.description).toBe('Sample enhanced text for SEO purpose');
		expect(jsonLdString.inLanguage).toBe('en-GB');
	});
});
