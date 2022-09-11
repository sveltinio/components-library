import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import { homePage } from '../src/data/sample.js';
import { JsonLdWebPage } from '../src/lib/index.js';

function getScripts(scriptType: string, testID: string): string {
	const scripts = document.getElementsByTagName('script');
	for (let i = 0; i < scripts.length; i += 1) {
		if (
			scripts[i].getAttribute('type') === scriptType &&
			scripts[i].getAttribute('data-testid') == testID
		) {
			return scripts[i].innerText;
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
		const jsonLdScript = getScripts('application/ld+json', 'jsonld-webpage');
		const jsonLdString = JSON.parse(jsonLdScript);
		expect(jsonLdString['@type']).toBe('WebPage');
		expect(jsonLdString.name).toBe(homePage.title);
		expect(jsonLdString.description).toBe(homePage.description);
	});
});
