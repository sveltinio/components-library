import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { fireEvent, queryByTestId, render } from '@testing-library/svelte';
import { Vimeo } from '../src/lib';
import { vimeoSettings, vimeoSample } from './__fixtures__/data.test.js.js';
import {
	getFullScriptTagById,
	getScriptSrcById,
	getScriptTagById
} from './__fixtures__/test-utils';

describe('Vimeo Container', () => {
	it('should be in the document', async () => {
		const { container } = render(Vimeo, {
			props: {
				id: vimeoSample.id,
				user: vimeoSample.user,
				title: vimeoSample.title,
				description: vimeoSample.description
			}
		});
		expect(container).toBeInTheDocument();
	});
});

describe('Vimeo script loader', () => {
	it('should have a script tag with id vimeo-lib-script', async () => {
		expect(getScriptTagById('vimeo-lib-script')).toBe(true);
	});

	it('should have a script src to the vimeo player lib', async () => {
		expect(getScriptSrcById('vimeo-lib-script')).toBe('https://player.vimeo.com/api/player.js');
	});

	it('should have a script with async true', async () => {
		const scriptTag = getFullScriptTagById('vimeo-lib-script');
		expect(scriptTag.async).toBe(true);
	});
});

describe('Vimeo video thumbnail', () => {
	it('should have the thumbnail visible only', async () => {
		const { getByTestId } = render(Vimeo, {
			props: {
				id: vimeoSample.id,
				user: vimeoSample.user,
				title: vimeoSample.title,
				description: vimeoSample.description
			}
		});
		const thumbnailWrapper = getByTestId('thumbnail-wrapper');
		expect(thumbnailWrapper).toBeInTheDocument();
		const wrapper = getByTestId('content-section');
		expect(queryByTestId(wrapper, /video-wrapper/i)).toBeNull();
	});

	it('should have an image with src to https://vumbnail.com', async () => {
		const { getByTestId } = render(Vimeo, {
			props: {
				id: vimeoSample.id,
				user: vimeoSample.user,
				title: vimeoSample.title,
				description: vimeoSample.description
			}
		});
		const thumbnail = getByTestId('thumbnail');
		expect(thumbnail['src']).toBe('https://vumbnail.com/692371260.jpg');
	});

	it('should have an accessible name (alt prop defined)', async () => {
		const { getByTestId } = render(Vimeo, {
			props: {
				id: vimeoSample.id,
				user: vimeoSample.user,
				title: vimeoSample.title,
				description: vimeoSample.description
			}
		});
		const thumbnail = getByTestId('thumbnail');
		expect(thumbnail).toHaveAccessibleName();
	});

	it('should have the play button', async () => {
		const { getByTestId } = render(Vimeo, {
			props: {
				id: vimeoSample.id,
				user: vimeoSample.user,
				title: vimeoSample.title,
				description: vimeoSample.description
			}
		});
		const playButton = getByTestId('play-button');
		expect(playButton).toBeInTheDocument();
		expect(playButton).not.toBeEmptyDOMElement();
		const playIcon = getByTestId('play-icon');
		expect(playButton).toContainElement(playIcon);
	});
});

describe('Vimeo click play button on thumbnail when settings are provided', () => {
	it('should have the thumbnail visible only', async () => {
		const { getByTestId } = render(Vimeo, {
			props: {
				id: vimeoSample.id,
				user: vimeoSample.user,
				title: vimeoSample.title,
				description: vimeoSample.description
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
		const { getByTestId } = render(Vimeo, {
			props: {
				id: vimeoSample.id,
				user: vimeoSample.user,
				title: vimeoSample.title,
				description: vimeoSample.description
			}
		});

		const playButton = getByTestId('play-button');
		await fireEvent.click(playButton);
		const iframeWrapper = getByTestId('iframe');
		expect(iframeWrapper['src']).toBe('https://player.vimeo.com/video/692371260?autoplay=1&mute=1');
	});
});

describe('Vimeo click play button on thumbnail when no settings are provided', () => {
	it('should have autoplay and mute to true on the iframe url in addition to other settings', async () => {
		const { getByTestId } = render(Vimeo, {
			props: {
				id: vimeoSample.id,
				user: vimeoSample.user,
				title: vimeoSample.title,
				description: vimeoSample.description
			}
		});

		const playButton = getByTestId('play-button');
		await fireEvent.click(playButton);
		const iframeWrapper = getByTestId('iframe');
		expect(iframeWrapper['src']).toBe('https://player.vimeo.com/video/692371260?autoplay=1&mute=1');
	});

	it('should have autoplay and mute to true on the iframe url in addition to other settings', async () => {
		const { getByTestId } = render(Vimeo, {
			props: {
				id: vimeoSample.id,
				user: vimeoSample.user,
				title: vimeoSample.title,
				description: vimeoSample.description
			}
		});

		const playButton = getByTestId('play-button');
		await fireEvent.click(playButton);
		const iframeWrapper = getByTestId('iframe');
		expect(iframeWrapper['src']).toBe('https://player.vimeo.com/video/692371260?autoplay=1&mute=1');
	});
});

describe('Vimeo - wrapper', () => {
	it('should contain iframe', async () => {
		const { getByTestId } = render(Vimeo, {
			props: {
				id: vimeoSample.id,
				user: vimeoSample.user,
				title: vimeoSample.title,
				description: vimeoSample.description,
				settings: {
					autoplay: true
				}
			}
		});
		expect(getByTestId('frame-wrapper')).toContainElement(getByTestId('iframe'));
	});
});

describe('Vimeo - iframe', () => {
	it('should have a defined const url', async () => {
		const { getByTestId } = render(Vimeo, {
			props: {
				id: vimeoSample.id,
				user: vimeoSample.user,
				title: vimeoSample.title,
				description: vimeoSample.description,
				settings: {
					autoplay: true
				}
			}
		});
		const iframe = getByTestId('iframe');
		expect(iframe['src']).toBeDefined();
	});

	it('should have a valid url to a Vimeo', async () => {
		const { getByTestId } = render(Vimeo, {
			props: {
				id: vimeoSample.id,
				user: vimeoSample.user,
				title: vimeoSample.title,
				description: vimeoSample.description,
				settings: {
					autoplay: true
				}
			}
		});
		const iframe = getByTestId('iframe');
		expect(iframe['src']).toContain('https://player.vimeo.com/video/');
	});

	it('should have an accessible description (title)', async () => {
		const { getByTestId } = render(Vimeo, {
			props: {
				id: vimeoSample.id,
				user: vimeoSample.user,
				title: vimeoSample.title,
				description: vimeoSample.description,
				settings: {
					autoplay: true
				}
			}
		});
		expect(getByTestId('iframe')).toHaveAccessibleDescription();
	});
});

describe('Vimeo - options', () => {
	it('should have a props defined for iframe url', async () => {
		const { getByTestId } = render(Vimeo, {
			props: {
				id: vimeoSample.id,
				user: vimeoSample.user,
				title: vimeoSample.title,
				description: vimeoSample.description,
				settings: vimeoSettings
			}
		});
		const iframe = getByTestId('iframe');
		expect(iframe['src']).toBe(
			'https://player.vimeo.com/video/692371260?autoplay=1&muted=1&portrait=0'
		);
	});
});
