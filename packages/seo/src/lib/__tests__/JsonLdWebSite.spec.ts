import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import { website } from './__fixtures__/data.test.js';
import { JsonLdWebSite } from '..';

function getScripts(scriptType: string): string {
	const scripts = document.getElementsByTagName('script');
	for (let i = 0; i < scripts.length; i += 1) {
		if (scripts[i].getAttribute('type') === scriptType) {
			return scripts[i].innerHTML;
		}
	}
	return '';
}

beforeEach(() => {
	render(JsonLdWebSite, {
		props: {
			websiteData: website
		}
	});
});

describe('JsonLdWebSite', () => {
	it('should have jsonld WebSite object with props', async () => {
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
