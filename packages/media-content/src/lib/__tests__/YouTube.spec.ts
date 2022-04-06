import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import { YouTube } from '..';
import {
	youtubeLoopSingleSample,
	youtubeSampleOne,
	youtubeSamplePlayList,
	youtubeSamplePlaylistSettings,
	youtubeSampleVideoSettings
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

	it('should contain the iframe', async () => {
		const { getByTestId } = render(YouTube, {
			props: {
				id: youtubeSampleOne.id,
				title: youtubeSampleOne.title
			}
		});
		expect(getByTestId('wrapper')).toContainElement(getByTestId('iframe'));
	});

	it('should have the iframe url defined', async () => {
		const { getByTestId } = render(YouTube, {
			props: {
				id: youtubeSampleOne.id,
				title: youtubeSampleOne.title
			}
		});
		const iframe = getByTestId('iframe');
		expect(iframe['src']).toBeDefined();
	});

	it('should have a valid url to YouTube video', async () => {
		const { getByTestId } = render(YouTube, {
			props: {
				id: youtubeSampleOne.id,
				title: youtubeSampleOne.title
			}
		});
		const iframe = getByTestId('iframe');
		console.log(iframe);
		expect(iframe['src']).toBe('https://www.youtube.com/embed/uQntFkK8Z54');
	});

	it('should have an accessible description (title)', async () => {
		const { getByTestId } = render(YouTube, {
			props: {
				id: youtubeSampleOne.id,
				title: youtubeSampleOne.title
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
				settings: youtubeSampleVideoSettings
			}
		});
		const iframe = getByTestId('iframe');
		expect(iframe['src']).toBe(
			'https://www.youtube.com/embed/uQntFkK8Z54?autoplay=0&cc_lang_pref=it&color=white&controls=1'
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
		expect(iframe['src']).toBe(
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
		expect(iframe['src']).toBe(
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
		expect(iframe['src']).toBe(
			'https://www.youtube.com/embed?listType=playlist&list=PL4cUxeGkcC9hlbrVO_2QFVqVPhlZmz7tO&autoplay=0&cc_lang_pref=it&color=white&controls=1'
		);
	});
});
