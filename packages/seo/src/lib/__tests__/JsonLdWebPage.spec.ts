import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import { homePage, sampleArticle } from './__fixtures__/data.test.js';
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

describe('JsonLdWebPage', () => {
	it('should have jsonld WebPage object with name and description only', async () => {
		render(JsonLdWebPage, {
			props: {
				data: homePage
			}
		});
		const jsonLdScript = getScripts('application/ld+json');
		const jsonLdString = JSON.parse(jsonLdScript);
		expect(jsonLdString['@type']).toBe('WebPage');
		expect(jsonLdString.name).toBe(homePage.title);
		expect(jsonLdString.description).toBe(homePage.description);
	});

	it('should have jsonld WebPage object with name and description and author', async () => {
		render(JsonLdWebPage, {
			props: {
				data: sampleArticle
			}
		});
		const jsonLdScript = getScripts('application/ld+json');
		const jsonLdString = JSON.parse(jsonLdScript);
		expect(jsonLdString['@type']).toBe('WebPage');
		expect(jsonLdString.name).toBe(sampleArticle.title);
		expect(jsonLdString.description).toBe(sampleArticle.description);
		expect(jsonLdString.author).toBe(sampleArticle.author);
	});
});
