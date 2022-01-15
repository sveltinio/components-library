import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import { website } from './__fixtures__/data.test.js';
import { JsonLdWebPage } from '..';

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
	render(JsonLdWebPage, {
		props: {
			websiteData: website
		}
	});
});

describe('JsonLdWebPage', () => {
	it('should have jsonld WebPage object with props', async () => {
		const jsonLdScript = getScripts('application/ld+json');
		const jsonLdString = JSON.parse(jsonLdScript);
		expect(jsonLdString['@type']).toBe('WebPage');
		expect(jsonLdString.name).toBe('example.com');
		expect(jsonLdString.description).toBe('Sample enhanced text for SEO purpose');
		expect(jsonLdString.publisher.name).toBe('indaco');
	});
});
