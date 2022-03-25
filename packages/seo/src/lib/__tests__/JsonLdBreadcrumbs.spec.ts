import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import { website } from './__fixtures__/data.test.js';
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

describe('JsonLdBreadcrumbs', () => {
	it('should have jsonld BreadcrumbList object with props', async () => {
		render(JsonLdBreadcrumbs, {
			props: {
				baseURL: website.baseURL,
				parent: '',
				currentTitle: 'Home'
			}
		});

		const jsonLdScript = getScripts('application/ld+json');
		const jsonLdString = JSON.parse(jsonLdScript);

		expect(jsonLdString['@type']).toBe('BreadcrumbList');
		expect(jsonLdString.itemListElement.length).toBe(2);
	});

	it('should have home element', async () => {
		render(JsonLdBreadcrumbs, {
			props: {
				baseURL: website.baseURL,
				parent: '',
				currentTitle: 'Home'
			}
		});
		const jsonLdScript = getScripts('application/ld+json');
		const jsonLdString = JSON.parse(jsonLdScript);

		const homeElement = jsonLdString.itemListElement[0];
		expect(homeElement['@type']).toBe('ListItem');
		expect(homeElement.position).toBe(1);
		expect(homeElement.name).toBe('Home');
		expect(homeElement.item).toBe('https://example.com');
	});

	it('should have about element', async () => {
		render(JsonLdBreadcrumbs, {
			props: {
				baseURL: website.baseURL,
				parent: '',
				currentTitle: 'About'
			}
		});
		const jsonLdScript = getScripts('application/ld+json');
		const jsonLdString = JSON.parse(jsonLdScript);

		const aboutElement = jsonLdString.itemListElement[1];
		expect(aboutElement['@type']).toBe('ListItem');
		expect(aboutElement['position']).toBe(2);
		expect(aboutElement['name']).toBe('About');
	});

	it('should have reference to posts resource and to getting starterd page', async () => {
		render(JsonLdBreadcrumbs, {
			props: {
				baseURL: website.baseURL,
				parent: 'posts',
				currentTitle: 'Getting Started'
			}
		});
		const jsonLdScript = getScripts('application/ld+json');
		const jsonLdString = JSON.parse(jsonLdScript);

		const postsElement = jsonLdString.itemListElement[1];
		expect(postsElement['@type']).toBe('ListItem');
		expect(postsElement.position).toBe(2);
		expect(postsElement.name).toBe('POSTS');
		expect(postsElement.item).toBe(website.baseURL + '/posts');

		const gettingStartedElement = jsonLdString.itemListElement[2];
		expect(gettingStartedElement['@type']).toBe('ListItem');
		expect(gettingStartedElement.position).toBe(3);
		expect(gettingStartedElement.name).toBe('Getting Started');
	});
});
