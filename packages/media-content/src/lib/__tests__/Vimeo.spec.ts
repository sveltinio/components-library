import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import { Vimeo } from '..';
import { vimeoSettings, vimeoSample } from './__fixtures__/data.test.js.js';
import {
	getFullScriptTagById,
	getScriptSrcById,
	getScriptTagById
} from './__fixtures__/test-utils';

describe('Vimeo Container', () => {
	it('should be in the document', async () => {
		const { container } = render(Vimeo, {
			props: {
				id: vimeoSample.id,
				user: vimeoSample.user,
				title: vimeoSample.title,
				description: vimeoSample.description
			}
		});
		expect(container).toBeInTheDocument();
	});
});

describe('Vimeo script loader', () => {
	it('should have a script tag with id vimeo-lib-script', async () => {
		expect(getScriptTagById('vimeo-lib-script')).toBe(true);
	});

	it('should have a script src to the vimeo player lib', async () => {
		expect(getScriptSrcById('vimeo-lib-script')).toBe('https://player.vimeo.com/api/player.js');
	});

	it('should have a script with async true', async () => {
		const scriptTag = getFullScriptTagById('vimeo-lib-script');
		expect(scriptTag.async).toBe(true);
	});
});

describe('CodeSandbox - wrapper', () => {
	it('should contain iframe', async () => {
		const { getByTestId } = render(Vimeo, {
			props: {
				id: vimeoSample.id,
				user: vimeoSample.user,
				title: vimeoSample.title,
				description: vimeoSample.description
			}
		});
		expect(getByTestId('wrapper')).toContainElement(getByTestId('iframe'));
	});
});

describe('Vimeo - iframe', () => {
	it('should have a defined const url', async () => {
		const { getByTestId } = render(Vimeo, {
			props: {
				id: vimeoSample.id,
				user: vimeoSample.user,
				title: vimeoSample.title,
				description: vimeoSample.description
			}
		});
		const iframe = getByTestId('iframe');
		expect(iframe['src']).toBeDefined();
	});

	it('should have a valid url to a CodeSandbox', async () => {
		const { getByTestId } = render(Vimeo, {
			props: {
				id: vimeoSample.id,
				user: vimeoSample.user,
				title: vimeoSample.title,
				description: vimeoSample.description
			}
		});
		const iframe = getByTestId('iframe');
		expect(iframe['src']).toContain('https://player.vimeo.com/video/');
	});

	it('should have an accessible description (title)', async () => {
		const { getByTestId } = render(Vimeo, {
			props: {
				id: vimeoSample.id,
				user: vimeoSample.user,
				title: vimeoSample.title,
				description: vimeoSample.description
			}
		});
		expect(getByTestId('iframe')).toHaveAccessibleDescription();
	});
});

describe('Vimeo - options', () => {
	it('should have a props defined for iframe url', async () => {
		const { getByTestId } = render(Vimeo, {
			props: {
				id: vimeoSample.id,
				user: vimeoSample.user,
				title: vimeoSample.title,
				description: vimeoSample.description,
				settings: vimeoSettings
			}
		});
		const iframe = getByTestId('iframe');
		expect(iframe['src']).toBe(
			'https://player.vimeo.com/video/692371260?autoplay=0&muted=1&portrait=0'
		);
	});
});
