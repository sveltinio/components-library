import type {
	ICodePenSettings,
	ICodeSandboxSettings,
	IFacebookSettings,
	IFacebookVideoSettings,
	IStackBlitzSettings,
	ITweetSettings,
	IVimeoSettings,
	IYouTubeSettings
} from '../../src/lib/types';

// CODEPEN
export const codepenSampleOne: Record<string, string> = {
	user: 'alipanick',
	id: 'bGavKeE',
	title: 'Test Embed'
};

export const codepenSampleTwo: Record<string, string> = {
	user: 'alipanick',
	id: 'YzZYmoJ'
};

export const codepenSettings: ICodePenSettings = {
	height: 600,
	defaultTab: 'result',
	borderColor: '#325E83',
	tabBarColor: '#074f66',
	activeTabColor: '#007482'
};

// CODESANDBOX
export const codeSandboxSampleID = 'j0y0vpz59';
export const codesandboxSettings: ICodeSandboxSettings = {
	hidedevtools: true,
	theme: 'light'
};

// FACEBOOK
export const facebookSamplePostOne = '20531316728/posts/10154009990506729/';
export const facebookSamplePostTwo =
	'https://www.facebook.com/lanavediteseoed/photos/a.1527098160943297/3207916826194747/';
export const facebookSampleVideoOne = 'FacebookDevelopers/videos/10152454700553553/';
export const facebookSampleVideoTwo = 'moonhooch/videos/699899998042014';

export const facebookPostSettings: IFacebookSettings = {
	lazy: true,
	width: 400,
	showText: true
};

export const facebookVideoSettings: IFacebookVideoSettings = {
	allowfullscreen: false,
	width: 500,
	autoplay: false,
	showCaptions: true
};

// SLIDESHARE
export const slideShareSample: Record<string, string> = {
	id: 'exvMftSyV7yRQR',
	title: 'Digital 2020 Global Digital Overview (January 2020) v01',
	user: 'DataReportal'
};

// STACKBLITZ
export const stackblitzSample: Record<string, string> = {
	id: 'vitejs-vite-z3ukcq',
	title: 'Sample Vite + Svelte + TypeScript project'
};

export const stackblitzSettings: IStackBlitzSettings = {
	file: 'svelte.config.js',
	embed: true,
	theme: 'light',
	ctl: true,
	devtoolsheight: 200
};

// TWITTER
export const tweetSampleOneId = '1494008909585125381';
export const tweetSampleTwoId = '1509121535830896641';
export const tweetSettings: ITweetSettings = {
	cards: 'visible',
	theme: 'dark'
};

// VIMEO
export const vimeoSample: Record<string, string> = {
	user: 'newyorker',
	id: '692371260',
	title: 'The Panola Project',
	description:
		'The Panola Project,&rdquo; a film by Jeremy Levine and Rachael DeCruz, follows Dorothy, a convenience-store owner, as she goes door to door in order to convince her neighbors to get their COVID-19 vaccines'
};

export const vimeoSettings: IVimeoSettings = {
	autoplay: true,
	muted: true,
	portrait: false
};

// YOUTUBE
export const youtubeSampleOne: Record<string, string> = {
	id: 'uQntFkK8Z54',
	title: 'The Future of Svelte'
};
export const youtubeSampleTwo: Record<string, string> = {
	id: '1Df-9EKvZr0',
	title: 'Svelte Summit Fall 2021'
};
export const youtubeSampleVideoSettings: IYouTubeSettings = {
	autoplay: false,
	ccLangPref: 'it',
	color: 'white',
	controls: true
};

export const youtubeSampleVideoSettingsWithAutoplay: IYouTubeSettings = {
	autoplay: true,
	color: 'white',
	controls: true
};

export const youtubeSamplePlayList: Record<string, string> = {
	id: 'PL4cUxeGkcC9hlbrVO_2QFVqVPhlZmz7tO',
	title: 'Svelte Tutorial for Beginners'
};

export const youtubeSamplePlaylistSettings: IYouTubeSettings = {
	autoplay: false,
	ccLangPref: 'it',
	color: 'white',
	controls: true
};

export const youtubeLoopSingleSample: IYouTubeSettings = {
	autoplay: true,
	color: 'white',
	loop: true
};
