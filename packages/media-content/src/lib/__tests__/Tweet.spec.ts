import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import { Tweet } from '..';

import {
	getFullScriptTagById,
	getScriptSrcById,
	getScriptTagById
} from './__fixtures__/test-utils';

beforeEach(() => {
	render(Tweet, {
		props: {
			id: '1494008909585125381'
		}
	});
});

describe('Tweet', () => {
	it('should have a script tag with id twitter-lib-script', async () => {
		expect(getScriptTagById('twitter-lib-script')).toBe(true);
	});

	it('should have a script src to umami instance', async () => {
		expect(getScriptSrcById('twitter-lib-script')).toBe('https://platform.twitter.com/widgets.js');
	});

	it('should have a script with async and defer to true', async () => {
		const scriptTag = getFullScriptTagById('twitter-lib-script');
		expect(scriptTag.async).toBe(true);
	});
});
