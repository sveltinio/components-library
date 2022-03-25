import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import { umamiConf } from './__fixtures__/data.test.js';
import { getFullScriptTagbyId, getScriptSrcById, getScriptTagById } from './__fixtures__/utils';
import { UmamiAnalytics } from '..';

beforeEach(() => {
	render(UmamiAnalytics, {
		props: {
			websiteID: umamiConf.websiteID,
			srcURL: umamiConf.srcURL
		}
	});
});

describe('UmamiAnalytics', () => {
	it('should have a script tag with id umami-analytics-script', async () => {
		expect(getScriptTagById('umami-analytics-script')).toBe(true);
	});

	it('should have a script src to umami instance', async () => {
		expect(getScriptSrcById('umami-analytics-script')).toBe('https://umami.sveltin.io/umami.js');
	});

	it('should have a script with async and defer to true', async () => {
		const scriptTag = getFullScriptTagbyId('umami-analytics-script');
		expect(scriptTag.async).toBe(true);
		expect(scriptTag.defer).toBe(true);
	});
});
