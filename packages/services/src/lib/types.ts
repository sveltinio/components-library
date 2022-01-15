declare global {
	interface Window {
		dataLayer: Array<IArguments>;
	}
}

export interface ExternalServices {
	googleFonts: Array<GoogleFont>;
	googleAnalytics: GoogleAnalytics;
}

export interface GoogleFont {
	name: string;
	weights: Array<number>;
}

export interface GoogleAnalytics {
	propertyID: string;
}
