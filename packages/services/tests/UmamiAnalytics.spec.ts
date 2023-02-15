import '@testing-library/jest-dom';
import { describe, it, expect, beforeEach } from 'vitest';
import { render } from '@testing-library/svelte';
import { getScriptsByTestId } from './test-utils.js';
import { UmamiAnalytics } from '../src/lib/index.js';
import { umamiSample, umamiTrackerSettings } from '../src/data/sample.js';

beforeEach(() => {
	render(UmamiAnalytics, {
		props: {
			websiteID: umamiSample.websiteID,
			srcURL: umamiSample.srcURL,
			settings: umamiTrackerSettings
		}
	});
});

describe('UmamiAnalytics', () => {
	it('should have a script tag with id umami-analytics-script', async () => {
		expect(getScriptsByTestId('umami_analytics_script')).toBeTruthy();
	});

	it('should have a script src to umami instance', async () => {
		const scriptTag = getScriptsByTestId('umami_analytics_script');
		expect(scriptTag?.getAttribute('src')).toBe('https://your-umami-app.com/umami.js');
	});

	it('should have a script with async and defer set to true', async () => {
		const scriptTag = getScriptsByTestId('umami_analytics_script');
		expect(scriptTag?.async).toBe(true);
		expect(scriptTag?.defer).toBe(true);
	});
});
