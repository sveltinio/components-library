import type { ExternalServices } from '../../types';

const externals: ExternalServices = {
	googleFonts: [
		{
			name: 'IBM+Plex+Sans',
			weights: [200, 300, 400, 500, 600, 700]
		},
		{
			name: 'IBM+Plex+Mono',
			weights: [100, 200, 300, 400]
		}
	],
	googleAnalytics: {
		propertyID: '1234567890'
	}
};

const umamiConf: Record<string, string> = {
	websiteID: 'd1e3da9d-5deb-4af7-93c1-e7aabc592d19',
	srcURL: 'https://umami.sveltin.io/umami.js'
};

export { externals, umamiConf };
