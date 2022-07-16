import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { queryByTestId, render } from '@testing-library/svelte';
import { Facebook } from '../src/lib';
import {
	facebookPostSettings,
	facebookSamplePostOne,
	facebookSampleVideoOne,
	facebookVideoSettings
} from './__fixtures__/data.test.js';
import {
	getFullScriptTagById,
	getScriptSrcById,
	getScriptTagById
} from './__fixtures__/test-utils';

describe('Facebook Container', () => {
	it('should be in the document', async () => {
		const { container } = render(Facebook, {
			props: {
				id: facebookSamplePostOne
			}
		});
		expect(container).toBeInTheDocument();
	});
});

describe('Facebook script loader', () => {
	it('should have a script tag with id facebook-lib-script', async () => {
		expect(getScriptTagById('facebook-lib-script')).toBe(true);
	});

	it('should have a script tag src to the facebook lib', async () => {
		expect(getScriptSrcById('facebook-lib-script')).toBe(
			'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v13.0'
		);
	});

	it('should have a script tag with async and defer', async () => {
		const scriptTag = getFullScriptTagById('facebook-lib-script');
		expect(scriptTag.async).toBe(true);
		expect(scriptTag.defer).toBe(true);
	});
});

describe('Facebook post content', () => {
	it('should have fb-post element and not fb-video', async () => {
		const { getByTestId } = render(Facebook, {
			props: {
				id: facebookSamplePostOne
			}
		});
		const fbPost = getByTestId('fb-post');
		expect(fbPost).toBeDefined();
		const wrapper = getByTestId('wrapper');
		expect(queryByTestId(wrapper, /fb-video/i)).toBeNull();
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
		const fbPost = getByTestId('fb-video');
		expect(fbPost).toBeDefined();
		const wrapper = getByTestId('wrapper');
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
		const fbPost = getByTestId('fb-post');
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
		const fbPost = getByTestId('fb-post');
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
		const fbPost = getByTestId('fb-video');
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
		const fbPost = getByTestId('fb-video');
		expect(fbPost).toHaveClass('fb-video');
		expect(fbPost).toHaveAttribute('data-allowfullscreen', 'false');
		expect(fbPost).toHaveAttribute('data-autoplay', 'false');
		expect(fbPost).toHaveAttribute('data-width', '500');
		expect(fbPost).toHaveAttribute('data-show-captions', 'true');
	});
});
