import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { fireEvent, queryByTestId, render } from '@testing-library/svelte';
import { YouTube } from '../src/lib';
import {
	youtubeLoopSingleSample,
	youtubeSampleOne,
	youtubeSampleVideoSettingsWithAutoplay,
	youtubeSampleVideoSettings,
	youtubeSamplePlayList,
	youtubeSamplePlaylistSettings
} from './__fixtures__/data.test.js';

describe('YouTube', () => {
	it('should be in the document', async () => {
		const { container } = render(YouTube, {
			props: {
				id: youtubeSampleOne.id,
				title: youtubeSampleOne.title
			}
		});
		expect(container).toBeInTheDocument();
	});
});

describe('YouTube video thumbnail', () => {
	it('should have the thumbnail visible only', async () => {
		const { getByTestId } = render(YouTube, {
			props: {
				id: youtubeSampleOne.id,
				title: youtubeSampleOne.title
			}
		});
		const thumbnailWrapper = getByTestId('thumbnail-wrapper');
		expect(thumbnailWrapper).toBeInTheDocument();
		const wrapper = getByTestId('content-section');
		expect(queryByTestId(wrapper, /video-wrapper/i)).toBeNull();
	});

	it('should have an image with src to https://i.ytimg.com', async () => {
		const { getByTestId } = render(YouTube, {
			props: {
				id: youtubeSampleOne.id,
				title: youtubeSampleOne.title
			}
		});
		const thumbnail = getByTestId('thumbnail');
		expect(thumbnail.getAttribute('src')).toBe(
			'https://i.ytimg.com/vi/uQntFkK8Z54/maxresdefault.jpg'
		);
	});

	it('should have an accessible name (alt prop defined)', async () => {
		const { getByTestId } = render(YouTube, {
			props: {
				id: youtubeSampleOne.id,
				title: youtubeSampleOne.title
			}
		});
		const thumbnail = getByTestId('thumbnail');
		expect(thumbnail).toHaveAccessibleName();
	});

	it('should have the play button', async () => {
		const { getByTestId } = render(YouTube, {
			props: {
				id: youtubeSampleOne.id,
				title: youtubeSampleOne.title
			}
		});
		const playButton = getByTestId('play-button');
		expect(playButton).toBeInTheDocument();
		expect(playButton).not.toBeEmptyDOMElement();
		const playIcon = getByTestId('play-icon');
		expect(playButton).toContainElement(playIcon);
	});
});

describe('YouTube click play button on thumbnail when settings are provided', () => {
	it('should have the thumbnail visible only', async () => {
		const { getByTestId } = render(YouTube, {
			props: {
				id: youtubeSampleOne.id,
				title: youtubeSampleOne.title
			}
		});

		const wrapper = getByTestId('content-section');
		expect(getByTestId('thumbnail-wrapper')).toBeInTheDocument();
		expect(queryByTestId(wrapper, /video-wrapper/i)).toBeNull();
		const playButton = getByTestId('play-button');
		await fireEvent.click(playButton);

		expect(queryByTestId(wrapper, /thumbnail-wrapper/i)).toBeNull();
		const iframeWrapper = getByTestId('frame-wrapper');
		expect(wrapper).toContainElement(iframeWrapper);
	});

	it('should have autoplay and mute to true on the iframe url', async () => {
		const { getByTestId } = render(YouTube, {
			props: {
				id: youtubeSampleOne.id,
				title: youtubeSampleOne.title
			}
		});

		const playButton = getByTestId('play-button');
		await fireEvent.click(playButton);
		const iframeWrapper = getByTestId('iframe');
		expect(iframeWrapper.getAttribute('src')).toBe(
			'https://www.youtube.com/embed/uQntFkK8Z54?autoplay=1&mute=1'
		);
	});
});

describe('YouTube click play button on thumbnail when no settings are provided', () => {
	it('should have autoplay and mute to true on the iframe url in addition to other settings', async () => {
		const { getByTestId } = render(YouTube, {
			props: {
				id: youtubeSampleOne.id,
				title: youtubeSampleOne.title,
				settings: youtubeSampleVideoSettings
			}
		});

		const playButton = getByTestId('play-button');
		await fireEvent.click(playButton);
		const iframeWrapper = getByTestId('iframe');
		expect(iframeWrapper.getAttribute('src')).toBe(
			'https://www.youtube.com/embed/uQntFkK8Z54?autoplay=1&cc_lang_pref=it&color=white&controls=1&mute=1'
		);
	});

	it('should have autoplay and mute to true on the iframe url in addition to other settings', async () => {
		const { getByTestId } = render(YouTube, {
			props: {
				id: youtubeSampleOne.id,
				title: youtubeSampleOne.title,
				settings: {
					controls: true
				}
			}
		});

		const playButton = getByTestId('play-button');
		await fireEvent.click(playButton);
		const iframeWrapper = getByTestId('iframe');
		expect(iframeWrapper.getAttribute('src')).toBe(
			'https://www.youtube.com/embed/uQntFkK8Z54?controls=1&autoplay=1&mute=1'
		);
	});
});

describe('YouTube video with autoplay', () => {
	it('should contain the iframe', async () => {
		const { getByTestId } = render(YouTube, {
			props: {
				id: youtubeSampleOne.id,
				title: youtubeSampleOne.title,
				settings: youtubeSampleVideoSettingsWithAutoplay
			}
		});
		expect(getByTestId('frame-wrapper')).toContainElement(getByTestId('iframe'));
	});

	it('should have the iframe url defined', async () => {
		const { getByTestId } = render(YouTube, {
			props: {
				id: youtubeSampleOne.id,
				title: youtubeSampleOne.title,
				settings: youtubeSampleVideoSettingsWithAutoplay
			}
		});
		const iframe = getByTestId('iframe');
		expect(iframe.getAttribute('src')).toBeDefined();
	});

	it('should have a valid url to YouTube video', async () => {
		const { getByTestId } = render(YouTube, {
			props: {
				id: youtubeSampleOne.id,
				title: youtubeSampleOne.title,
				settings: youtubeSampleVideoSettingsWithAutoplay
			}
		});
		const iframe = getByTestId('iframe');
		console.log(iframe);
		expect(iframe.getAttribute('src')).toBe(
			'https://www.youtube.com/embed/uQntFkK8Z54?autoplay=1&color=white&controls=1'
		);
	});

	it('should have an accessible description (title)', async () => {
		const { getByTestId } = render(YouTube, {
			props: {
				id: youtubeSampleOne.id,
				title: youtubeSampleOne.title,
				settings: youtubeSampleVideoSettingsWithAutoplay
			}
		});
		expect(getByTestId('iframe')).toHaveAccessibleDescription();
	});
});

describe('YouTube - options', () => {
	it('should have a props defined for iframe url', async () => {
		const { getByTestId } = render(YouTube, {
			props: {
				id: youtubeSampleOne.id,
				title: youtubeSampleOne.title,
				settings: youtubeSampleVideoSettingsWithAutoplay
			}
		});
		const iframe = getByTestId('iframe');
		expect(iframe.getAttribute('src')).toBe(
			'https://www.youtube.com/embed/uQntFkK8Z54?autoplay=1&color=white&controls=1'
		);
	});
});

describe('YouTube - loop a single video', () => {
	it('should be a valid url to loop a single video', async () => {
		const { getByTestId } = render(YouTube, {
			props: {
				id: youtubeSampleOne.id,
				title: youtubeSampleOne.title,
				settings: youtubeLoopSingleSample
			}
		});
		const iframe = getByTestId('iframe');
		expect(iframe.getAttribute('src')).toBe(
			'https://www.youtube.com/embed/uQntFkK8Z54?autoplay=1&color=white&playlist=uQntFkK8Z54&loop=1'
		);
	});
});

describe('YouTube - playlist', () => {
	it('should have a valid iframe url for playlist', async () => {
		const { getByTestId } = render(YouTube, {
			props: {
				type: 'playlist',
				id: youtubeSamplePlayList.id,
				title: youtubeSamplePlayList.title
			}
		});
		const iframe = getByTestId('iframe');
		expect(iframe.getAttribute('src')).toBe(
			'https://www.youtube.com/embed?listType=playlist&list=PL4cUxeGkcC9hlbrVO_2QFVqVPhlZmz7tO'
		);
	});

	it('should have a valid iframe url for playlist with custom settings', async () => {
		const { getByTestId } = render(YouTube, {
			props: {
				type: 'playlist',
				id: youtubeSamplePlayList.id,
				title: youtubeSamplePlayList.title,
				settings: youtubeSamplePlaylistSettings
			}
		});
		const iframe = getByTestId('iframe');
		expect(iframe.getAttribute('src')).toBe(
			'https://www.youtube.com/embed?listType=playlist&list=PL4cUxeGkcC9hlbrVO_2QFVqVPhlZmz7tO&autoplay=0&cc_lang_pref=it&color=white&controls=1'
		);
	});
});
