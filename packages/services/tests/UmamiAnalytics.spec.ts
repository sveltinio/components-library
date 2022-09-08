import '@testing-library/jest-dom';
import { describe, it, expect, beforeEach } from 'vitest';
import { render } from '@testing-library/svelte';
import {
	getFullScriptTagbyId,
	getScriptSrcById,
	getScriptTagById
} from './__fixtures__/test-utils';
import { UmamiAnalytics } from '../src/lib';
import type { IUmamiTrackerSettings } from '../src/lib/types';

beforeEach(() => {
	render(UmamiAnalytics, {
		props: {
			websiteID: 'd1e3da9d-5deb-4af7-93c1-e7aabc592d19',
			srcURL: 'https://umami.sveltin.io/umami.js',
			settings: <IUmamiTrackerSettings>{
				hostURL: '',
				autoTrack: true,
				doNotTrack: false,
				enableCache: false,
				domains: ''
			}
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
