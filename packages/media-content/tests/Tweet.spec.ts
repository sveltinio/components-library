import '@testing-library/jest-dom';
import { describe, it, expect, beforeEach } from 'vitest';
import { render } from '@testing-library/svelte';
import { Tweet } from '../src/lib/index.js';
import { getScriptsByTestId } from './test-utils.js';

beforeEach(() => {
	render(Tweet, {
		props: {
			id: '1494008909585125381'
		}
	});
});

describe('Tweet', () => {
	it('should have a script tag with id twitter-lib-script', async () => {
		const scriptTag = getScriptsByTestId('twitter_lib_script');
		expect(scriptTag).toBeDefined();
	});

	it('should have a script src to umami instance', async () => {
		const scriptTag = getScriptsByTestId('twitter_lib_script');
		expect(scriptTag?.getAttribute('src')).toBe('https://platform.twitter.com/widgets.js');
	});

	it('should have a script with async and defer to true', async () => {
		const scriptTag = getScriptsByTestId('twitter_lib_script');
		expect(scriptTag?.async).toBe(true);
	});
});
