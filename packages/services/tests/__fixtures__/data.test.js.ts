import type { IGoogleFont, IUmamiTrackerSettings } from '../../src/lib/types';

export const googleFonts: Array<IGoogleFont> = [
	{
		name: 'IBM+Plex+Sans',
		weights: [200, 300, 400, 500, 600, 700]
	},
	{
		name: 'IBM+Plex+Mono',
		weights: [100, 200, 300, 400]
	}
];

export const gaPropertyID = '1234567890';

export const umamiSample: Record<string, string> = {
	websiteID: '4fb7fa4c-5b46-438d-94b3-3a8fb9bc2e8b',
	srcURL: 'your-umami-app.com/umami.js'
};
export const umamiTrackerSettings: IUmamiTrackerSettings = {
	hostURL: '',
	autoTrack: true,
	doNotTrack: false,
	enableCache: false,
	domains: ''
};
