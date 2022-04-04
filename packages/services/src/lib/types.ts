declare global {
	interface Window {
		dataLayer: object[];
	}
}

export interface IGoogleFont {
	name: string;
	weights: Array<number>;
}

//Umami tracker configurations: https://umami.is/docs/tracker-config
export interface IUmamiTrackerSettings {
	hostURL?: string;
	autoTrack?: boolean;
	doNotTrack?: boolean;
	enableCache?: boolean;
	domains?: string;
}
