import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import { website } from './__fixtures__/data.test.js';
import { JsonLdWebSite } from '../src/lib';

function getScripts(scriptType: string): string {
	const scripts = document.getElementsByTagName('script');
	for (let i = 0; i < scripts.length; i += 1) {
		if (scripts[i].getAttribute('type') === scriptType) {
			return scripts[i].innerText;
		}
	}
	return '';
}

describe('JsonLdWebSite', () => {
	it('should have jsonld WebSite object with props', async () => {
		render(JsonLdWebSite, {
			props: {
				websiteData: website
			}
		});
		const jsonLdScript = getScripts('application/ld+json');
		const jsonLdString = JSON.parse(jsonLdScript);
		expect(jsonLdString['@type']).toBe('WebSite');
		expect(jsonLdString['@id']).toBe('https://example.com/#website');
		expect(jsonLdString.name).toBe('example.com');
		expect(jsonLdString.url).toBe('https://example.com');
		expect(jsonLdString.description).toBe('Sample enhanced text for SEO purpose');
		expect(jsonLdString.inLanguage).toBe('en-GB');
	});
});
