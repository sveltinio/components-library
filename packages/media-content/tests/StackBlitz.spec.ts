import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import { StackBlitz } from '../src/lib/index.js';
import { stackblitzSample, stackblitzSettings } from '../src/data/sample.js';

describe('StackBlitz', () => {
	it('should be in the document', async () => {
		const { container } = render(StackBlitz, {
			props: {
				id: stackblitzSample.id,
				title: stackblitzSample.title
			}
		});
		expect(container).toBeInTheDocument();
	});

	it('should contain the iframe', async () => {
		const { getByTestId } = render(StackBlitz, {
			props: {
				id: stackblitzSample.id,
				title: stackblitzSample.title
			}
		});
		expect(getByTestId('wrapper')).toContainElement(getByTestId('iframe'));
	});

	it('should have the iframe url defined', async () => {
		const { getByTestId } = render(StackBlitz, {
			props: {
				id: stackblitzSample.id,
				title: stackblitzSample.title
			}
		});
		const iframe = getByTestId('iframe');
		expect(iframe['src']).toBeDefined();
	});

	it('should have a valid url to a StackBlitz project', async () => {
		const { getByTestId } = render(StackBlitz, {
			props: {
				id: stackblitzSample.id,
				title: stackblitzSample.title
			}
		});
		const iframe = getByTestId('iframe');
		console.log(iframe);
		expect(iframe['src']).toBe('https://stackblitz.com/edit/vitejs-vite-z3ukcq');
	});

	it('should have an accessible description (title)', async () => {
		const { getByTestId } = render(StackBlitz, {
			props: {
				id: stackblitzSample.id,
				title: stackblitzSample.title
			}
		});
		expect(getByTestId('iframe')).toHaveAccessibleDescription();
	});
});

describe('StackBlitz - options', () => {
	it('should have a props defined for iframe url', async () => {
		const { getByTestId } = render(StackBlitz, {
			props: {
				id: stackblitzSample.id,
				title: stackblitzSample.title,
				settings: stackblitzSettings
			}
		});
		const iframe = getByTestId('iframe');
		expect(iframe['src']).toBe(
			'https://stackblitz.com/edit/vitejs-vite-z3ukcq?file=svelte.config.js&embed=1&theme=light&ctl=1&devtoolsheight=200'
		);
	});
});
