declare global {
	interface Window {
		twttr: object;
	}
}

// https://blog.codepen.io/documentation/embedded-pens/
export interface ICodePenSettings {
	/** html/css/js/result */
	defaultTab?: string;
	/** height in pixels. */
	height?: number;
	/** run/stop-after-5 */
	animation?: string;
	/** none/thin/thick */
	border?: string;
	/** Hex Color Code. */
	borderColor?: string;
	/** Hex Color Code */
	tabBarColor?: string;
	/** Hex Color Code. */
	tabLinkColor?: string;
	/** Hex Color Code. */
	activeTabColor?: string;
	/** Hex Color Code. */
	activeLinkColor?: string;
	linkLogoColor?: string;
	/** Added to <iframe> of embed. */
	class?: string;
	customCSSUrl?: string;
	preview?: boolean;
	/** Can be 1, 0.5, or 0.25 */
	zoom?: number;
}

// https://codesandbox.io/docs/embedding#generate-an-embed-url
export interface ICodeSandboxSettings {
	/**
	 * Automatically resize the embed to the content (only works on Medium).
	 *
	 * The default value is 0 (false).
	 */
	autoresize?: boolean;
	/**
	 * Use CodeMirror editor instead of Monaco (decreases embed size significantly).
	 *
	 * The default value is 0 (false).
	 */
	codemirror?: boolean;
	/**
	 * Size in percentage of editor.
	 *
	 * The default value is 50.
	 */
	editorsize?: number;
	/**
	 * Use eslint (increases embed size significantly).
	 *
	 * The default value is 0 (false).
	 */
	eslint?: boolean;
	/**
	 * Start with the devtools (console) open.
	 *
	 * The default value is 0 (false).
	 */
	expanddevtools?: boolean;
	/**
	 * Hide the DevTools bar of the preview.
	 *
	 * The default value is 0 (false).
	 */
	hidedevtools?: boolean;
	/**
	 * Font size (in px) of editor.
	 *
	 * The default value is 0 (false).
	 */
	fontsize?: number;
	/**
	 * Force a full refresh of frame after every edit.
	 *
	 * The default value is 0 (false).
	 */
	forcerefresh?: boolean;
	/**
	 * Hide the navigation bar of the preview.
	 *
	 * The default value is 0 (false).
	 */
	hidenavigation?: boolean;
	/**
	 * Which lines to highlight (only works in CodeMirror).
	 * Comma separated list of line numbers.
	 */
	highlights?: string;
	/**
	 * Which url to initially load in address bar.
	 *
	 * The default value is 0 (false).
	 */
	initialpath?: string;
	/**
	 * Which module to open by default. Multiple paths comma separated are allowed,
	 * in that case we show them as tabs.
	 *
	 * The default value is entry path.
	 */
	module?: string;
	/**
	 * Evaluate the file that is open in the editor.
	 *
	 * The default value is 0 (false).
	 */
	moduleview?: boolean;
	/**
	 * Which preview window to open by default.
	 *
	 * Supported values are console, test or browser.
	 * The default value is browser.
	 */
	previewwindow?: string;
	/**
	 * Only load the preview when the user says so.
	 *
	 * The default value is 0 (false).
	 */
	runonclick?: boolean;
	/**
	 * Which view to open by default.
	 *
	 * Supported values are editor, split or preview.
	 * The default value is split (preview for small screens).
	 */
	view?: string;
	/**
	 * Which theme to show for the embed.
	 *
	 * Supported values are dark or light.
	 * The default value is dark.
	 */
	theme?: string;
}

// https://developers.facebook.com/docs/plugins/embedded-posts
export interface IFacebookSettings {
	/**
	 * The browser does not render the plugin if it's not close to the viewport and might never be seen
	 *
	 * The default value is 0 (false).
	 */
	lazy?: boolean;
	/**
	 * The width of the container.
	 *
	 * For Post: min. 350 pixel; max. 750 pixel. Leave empty to use fluid width.
	 * For Videos: min. 220px. The default value is auto.
	 */
	width?: number;
	/**
	 * Applied to photo post. Set to true to include the text from the Facebook post, if any.
	 *
	 * The default value is 0 (false).
	 * */
	showText?: boolean;
}

// https://developers.facebook.com/docs/plugins/embedded-video-player
export interface IFacebookVideoSettings extends IFacebookSettings {
	/**
	 * Allow the video to be played in fullscreen mode.
	 *
	 * The default value is 0 (false).
	 */
	allowfullscreen?: boolean;
	/**
	 * Automatically start playing the video when the page loads. The video will be played without sound (muted).
	 * People can turn on sound via the video player controls. This setting does not apply to mobile devices.
	 *
	 * The default value is 0 (false).
	 */
	autoplay?: boolean;
	/**
	 * To show captions (if available) by default. Captions are only available on desktop.
	 *
	 * The default value is 0 (false).
	 */
	showCaptions?: boolean;
}

// https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference
export interface ITweetSettings {
	/**
	 * When set to hidden, links in a Tweet are not expanded to photo,
	 * video, or link previews.
	 *
	 * Supported values are visible or hidden.
	 */
	cards?: string;
	/**
	 * When set to none, only the cited Tweet will be displayed even if
	 * it is in reply to another Tweet.
	 *
	 * Supported values are all or none.
	 */
	conversation?: string;
	/**
	 * When set to dark, displays Tweet with light text over a dark background.
	 *
	 * Supported values are dark or light.
	 */
	theme?: string;
}

// https://vimeo.zendesk.com/hc/en-us/articles/360001494447-Player-parameters-overview
export interface IVimeoSettings {
	/** The Vimeo player is designed to play only one Vimeo video at a time. */
	autopause?: boolean;
	/** Automatically start playback of the video. */
	autoplay?: boolean;
	/** Show the author of the video. only if video owner allows. */
	byline?: boolean;
	/**
	 * Specify the color of the video controls. Colors may be overridden
	 * by the embed settings of the video.
	 * Video must be hosted by a Plus account or higher.
	 */
	color?: string;
	/**
	 * This parameter will hide all elements in the player
	 * (play bar, sharing buttons, etc) for a chromeless experience.
	 * Video must be hosted by a Plus account or higher.
	 */
	controls?: boolean;
	/**
	 * Setting this parameter to "true" will block the player from
	 * tracking any session data, including all cookies and analytics.
	 */
	dnt?: boolean;
	/**
	 * Allows for keyboard input to trigger player events.
	 * If false, the player will ignore keyboard input.
	 * Tabbing will still be supported in either mode.
	 */
	keyboard?: boolean;
	/** Play the video again when it reaches the end, infinitely. */
	loop?: boolean;
	/**
	 * Set video to mute on load.
	 * Viewers can still adjust the volume preferences in the player.
	 */
	muted?: boolean;
	/**
	 * Show the picture-in-picture button in the control bar and enable the
	 * picture-in-picture API.
	 */
	pip?: boolean;
	/**
	 * Play video inline on mobile devices instead of automatically going
	 * into fullscreen mode.
	 * Inline playback is enabled for all videos by default.
	 */
	playsinline?: boolean;
	/** Show the author’s profile image (portrait) */
	portrait?: boolean;
	/**
	 * 240p, 360p, 540p, 720p, 1080p, 2k, 4k, auto.
	 * By default, the Vimeo player is set to "Auto" mode, which means it
	 * chooses the highest video quality possible, depending on the viewer's
	 * bandwidth and other factors in the playback environment.
	 * */
	quality?: string;
	/**
	 * Show speed controls in the preference menu of the player and enable
	 * playback rate API. Video must be hosted by a PRO account or higher.
	 * */
	speed?: boolean;
	/** Show the video’s title, only if video owner allows. */
	title?: boolean;
	/** By default, the background of the player iframe is transparent on Vimeo. */
	transparent?: boolean;
}

// https://developers.google.com/youtube/player_parameters
export interface IYouTubeSettings {
	/**
	 * This parameter specifies whether the initial video will automatically start
	 * to play when the player loads.
	 *
	 * The default value is 0.
	 */
	autoplay?: boolean;

	/**
	 * This parameter specifies the default language that the player will use to
	 * display captions. Set the parameter's value to an ISO 639-1 two-letter language code.
	 */
	ccLangPref?: string;

	/**
	 * Setting the parameter's value to 1 causes closed captions to be shown by default,
	 * even if the user has turned captions off. The default behavior is based on user preference.
	 */
	ccLoadPolicy?: boolean;

	/**
	 * This parameter specifies the color that will be used in the player's video
	 * progress bar to highlight the amount of the video that the viewer has already
	 * seen.
	 *
	 * Supported values are red and white.
	 * The default value is red.
	 */
	color?: string;

	/**
	 * This parameter indicates whether the video player controls are displayed.
	 *
	 * controls=0 – Player controls do not display in the player.
	 * controls=1 (default) – Player controls display in the player.
	 */
	controls?: boolean;
	/**
	 * Setting the parameter's value to 1 causes the player to not respond to
	 * keyboard controls.
	 *
	 * The default value is 0, which means that keyboard controls are enabled.
	 */
	disablekb?: boolean;
	/**
	 * This parameter specifies the time, measured in seconds from the start
	 * of the video, when the player should stop playing the video.
	 * The parameter value is a positive integer.
	 */
	end?: number;
	/**
	 * Setting this parameter to 0 prevents the fullscreen button from displaying
	 * in the player.
	 *
	 * The default value is 1, which causes the fullscreen button to display.
	 */
	fs?: boolean;
	/**
	 * Sets the player's interface language.
	 * The parameter value is an ISO 639-1 two-letter language code or a fully specified locale.
	 */
	hl?: string;
	/**
	 * Setting the parameter's value to 1 causes video annotations to be shown by default,
	 * whereas setting to 3 causes video annotations to not be shown by default.
	 *
	 * The default value is 1.
	 */
	ivLoadPolicy?: number;
	/** Play the video again when it reaches the end, infinitely. */
	loop?: boolean;
	/**
	 * This parameter lets you use a YouTube player that does not show a YouTube logo.
	 * Set the parameter value to 1 to prevent the YouTube logo from displaying in the control bar.
	 *
	 * Note that a small YouTube text label will still display in the upper-right corner of a paused
	 * video when the user's mouse pointer hovers over the player.
	 */
	modestbranding?: boolean;
	/**
	 * This parameter provides an extra security measure for the IFrame API and is only supported for IFrame embeds.
	 */
	origin?: string;
	/**
	 * This parameter specifies a comma-separated list of video IDs to play.
	 * If you specify a value, the first video that plays will be the VIDEO_ID specified in the URL
	 * path, and the videos specified in the playlist parameter will play thereafter.
	 */
	playlist?: string;
	/**
	 * This parameter controls whether videos play inline or fullscreen on iOS.
	 *
	 * - 0: Results in fullscreen playback. This is currently the default value, though the default is subject to change.
	 * - 1: Results in inline playback for mobile browsers and for WebViews created with the allowsInlineMediaPlayback property set to YES.
	 */
	playsinline?: boolean;
	/**
	 * Show related videos when playback of the initial video ends.
	 *
	 * - 0: related videos will come from the same channel as the video that was just played.
	 * - 1: the player does show related videos.
	 *
	 * The default value is 1.
	 */
	rel?: boolean;
	/**
	 * This parameter causes the player to begin playing the video at the given
	 * number of seconds from the start of the video.
	 * The parameter value is a positive integer.
	 */
	start?: boolean;
	/**
	 * This parameter identifies the URL where the player is embedded. This value is used in YouTube Analytics reporting
	 * when the YouTube player is embedded in a widget, and that widget is then embedded in a web page or application.
	 *
	 * In that scenario, the origin parameter identifies the widget provider's domain, but YouTube Analytics should not
	 * identify the widget provider as the actual traffic source. Instead, YouTube Analytics uses the widget_referrer
	 * parameter value to identify the domain associated with the traffic source.
	 */
	widgetReferrer?: string;
}

export interface callBackTwoParameters<typeOne, typeTwo = void> {
	(param1: typeOne, param2: typeOne): typeTwo;
}
