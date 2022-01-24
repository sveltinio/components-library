import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import { menu, website } from './__fixtures__/data.test.js';
import { JsonLdBreadcrumbs } from '..';

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
	render(JsonLdBreadcrumbs, {
		props: {
			websiteData: website,
			menuData: menu
		}
	});
});

describe('JsonLdBreadcrumbs', () => {
	it('should have jsonld BreadcrumbList object with props', async () => {
		const jsonLdScript = getScripts('application/ld+json');
		const jsonLdString = JSON.parse(jsonLdScript);

		expect(jsonLdString['@type']).toBe('BreadcrumbList');
		expect(jsonLdString.itemListElement.length).toBe(3);
	});

	it('should have home element', async () => {
		const jsonLdScript = getScripts('application/ld+json');
		const jsonLdString = JSON.parse(jsonLdScript);

		const homeElement = jsonLdString.itemListElement[0];
		expect(homeElement['@type']).toBe('ListItem');
		expect(homeElement.position).toBe(1);
		expect(homeElement.name).toBe('Home');
		expect(homeElement.item).toBe('https://example.com/');
	});

	it('should have about element', async () => {
		const jsonLdScript = getScripts('application/ld+json');
		const jsonLdString = JSON.parse(jsonLdScript);

		const aboutElement = jsonLdString.itemListElement[1];
		expect(aboutElement['@type']).toBe('ListItem');
		expect(aboutElement.position).toBe(2);
		expect(aboutElement.name).toBe('About');
		expect(aboutElement.item).toBe('https://example.com/about');
	});

	it('should have github element', async () => {
		const jsonLdScript = getScripts('application/ld+json');
		const jsonLdString = JSON.parse(jsonLdScript);

		const githubElement = jsonLdString.itemListElement[2];
		expect(githubElement['@type']).toBe('ListItem');
		expect(githubElement.position).toBe(3);
		expect(githubElement.name).toBe('GitHub');
		expect(githubElement.item).toBe('https://github.com/sveltinio');
	});
});
