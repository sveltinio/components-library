import '@testing-library/jest-dom';
import { beforeEach, describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import { website } from '../src/data/sample.js';
import { JsonLdBreadcrumbs } from '../src/lib/index.js';

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
	render(JsonLdBreadcrumbs, {
		props: {
			url: `${website.baseURL}/home`
		}
	});
});

describe('JsonLdBreadcrumbs', () => {
	it('should have jsonld BreadcrumbList object with props', async () => {
		const jsonLdScript = getScripts('application/ld+json', 'jsonld-breadcrumbs');
		const jsonLdString = JSON.parse(jsonLdScript);

		expect(jsonLdString['@type']).toBe('BreadcrumbList');
		expect(jsonLdString.itemListElement.length).toBe(2);
	});

	it('should have home element', async () => {
		const jsonLdScript = getScripts('application/ld+json', 'jsonld-breadcrumbs');
		const jsonLdString = JSON.parse(jsonLdScript);

		const homeElement = jsonLdString.itemListElement[0];
		expect(homeElement['@type']).toBe('ListItem');
		expect(homeElement.position).toBe(1);
		expect(homeElement.name).toBe('Home');
		expect(homeElement.url).toBe('https://example.com');
	});

	it('should have about element', async () => {
		const jsonLdScript = getScripts('application/ld+json', 'jsonld-breadcrumbs');
		const jsonLdString = JSON.parse(jsonLdScript);

		const aboutElement = jsonLdString.itemListElement[1];
		expect(aboutElement['@type']).toBe('ListItem');
		expect(aboutElement['position']).toBe(2);
	});
});
