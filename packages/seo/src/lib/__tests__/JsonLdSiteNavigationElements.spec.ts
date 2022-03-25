import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import { menu, website } from './__fixtures__/data.test.js';
import { JsonLdSiteNavigationElements } from '..';

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
	render(JsonLdSiteNavigationElements, {
		props: {
			websiteData: website,
			menuData: menu
		}
	});
});

describe('JsonLdSiteNavigationElements', () => {
	it('should have jsonld ItemList object with props', async () => {
		const jsonLdScript = getScripts('application/ld+json');
		const jsonLdString = JSON.parse(jsonLdScript);

		expect(jsonLdString['@type']).toBe('ItemList');
		expect(jsonLdString.itemListElement.length).toBe(3);
	});

	it('should have home element', async () => {
		const jsonLdScript = getScripts('application/ld+json');
		const jsonLdString = JSON.parse(jsonLdScript);

		const homeElement = jsonLdString.itemListElement[0];
		expect(homeElement.position).toBe(1);
		expect(homeElement.name).toBe('home');
		expect(homeElement.url).toBe('https://example.com/');
	});

	it('should have about element', async () => {
		const jsonLdScript = getScripts('application/ld+json');
		const jsonLdString = JSON.parse(jsonLdScript);

		const aboutElement = jsonLdString.itemListElement[1];
		expect(aboutElement.position).toBe(2);
		expect(aboutElement.name).toBe('about');
		expect(aboutElement.url).toBe('https://example.com/about');
	});

	it('should have element with external link', async () => {
		const jsonLdScript = getScripts('application/ld+json');
		const jsonLdString = JSON.parse(jsonLdScript);

		const githubElement = jsonLdString.itemListElement[2];
		expect(githubElement.position).toBe(3);
		expect(githubElement.name).toBe('github');
		expect(githubElement.url).toBe('https://github.com/sveltinio');
	});
});
