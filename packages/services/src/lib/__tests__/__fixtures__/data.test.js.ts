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

export { externals };
