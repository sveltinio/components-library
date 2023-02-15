import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { queryByTestId, render } from '@testing-library/svelte';
import { Facebook } from '../src/lib/index.js';
import {
	facebookPostSettings,
	facebookSamplePostOne,
	facebookSampleVideoOne,
	facebookVideoSettings
} from '../src/data/sample.js';
import { getScriptsByTestId } from './test-utils.js';

describe('Facebook Container', () => {
	it('should be in the document with a well defined script tag', async () => {
		const { container } = render(Facebook, {
			props: {
				id: facebookSamplePostOne
			}
		});
		expect(container).toBeInTheDocument();

		const scriptTag = getScriptsByTestId('facebook_lib_script');
		expect(scriptTag).toBeDefined();

		expect(scriptTag?.getAttribute('id')).toBe('facebook-lib-script');
		expect(scriptTag?.getAttribute('src')).toBe(
			'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0'
		);
		expect(scriptTag?.async).toBe(true);
		expect(scriptTag?.defer).toBe(true);
		expect(scriptTag?.crossOrigin).toBe('anonymous');
	});
});

describe('Facebook post content', () => {
	it('should have fb-post element and not fb-video', async () => {
		const { getByTestId } = render(Facebook, {
			props: {
				id: facebookSamplePostOne
			}
		});
		const fbPost = getByTestId('fb_post');
		expect(fbPost).toBeDefined();
		const wrapper = getByTestId('fb_wrapper');
		expect(queryByTestId(wrapper, /fb_video/i)).toBeNull();
	});
});

describe('Facebook video content', () => {
	it('should have fb-video element and not fb-post', async () => {
		const { getByTestId } = render(Facebook, {
			props: {
				type: 'video',
				id: facebookSampleVideoOne
			}
		});
		const fbPost = getByTestId('fb_video');
		expect(fbPost).toBeDefined();
		const wrapper = getByTestId('fb_wrapper');
		expect(queryByTestId(wrapper, /fb-post/i)).toBeNull();
	});
});

describe('Facebook post content default props', () => {
	it('should have a defined props', async () => {
		const { getByTestId } = render(Facebook, {
			props: {
				id: facebookSamplePostOne
			}
		});

		const baseURL = `https://www.facebook.com/${facebookSamplePostOne}`;
		const fbPost = getByTestId('fb_post');
		expect(fbPost).toHaveClass('fb-post');
		expect(fbPost).toHaveAttribute('data-href', baseURL);
	});
});

describe('Facebook post content custom props', () => {
	it('should have a defined custom props', async () => {
		const { getByTestId } = render(Facebook, {
			props: {
				id: facebookSamplePostOne,
				settings: facebookPostSettings
			}
		});
		const fbPost = getByTestId('fb_post');
		expect(fbPost).toHaveClass('fb-post');
		expect(fbPost).toHaveAttribute('data-lazy', 'true');
		expect(fbPost).toHaveAttribute('data-width', '400');
		expect(fbPost).toHaveAttribute('data-show-text', 'true');
	});
});

describe('Facebook video content default props', () => {
	it('should have a defined props', async () => {
		const { getByTestId } = render(Facebook, {
			props: {
				type: 'video',
				id: facebookSampleVideoOne
			}
		});

		const baseURL = `https://www.facebook.com/${facebookSampleVideoOne}`;
		const fbPost = getByTestId('fb_video');
		expect(fbPost).toHaveClass('fb-video');
		expect(fbPost).toHaveAttribute('data-href', baseURL);
	});
});

describe('Facebook video content custom props', () => {
	it('should have a defined custom props', async () => {
		const { getByTestId } = render(Facebook, {
			props: {
				type: 'video',
				id: facebookSampleVideoOne,
				settings: facebookVideoSettings
			}
		});

		const fbPost = getByTestId('fb_video');
		expect(fbPost).toHaveClass('fb-video');
		expect(fbPost).toHaveAttribute('data-allowfullscreen', 'false');
		expect(fbPost).toHaveAttribute('data-autoplay', 'false');
		expect(fbPost).toHaveAttribute('data-width', '500');
		expect(fbPost).toHaveAttribute('data-show-captions', 'true');
	});
});
