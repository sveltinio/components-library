import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { queryByTestId, render } from '@testing-library/svelte';
import { SlideShare } from '../src/lib/index.js';
import { slideShareSample } from '../src/data/sample.js';

describe('SlideShare', () => {
	it('should be in the document', async () => {
		const { container } = render(SlideShare, {
			props: {
				id: slideShareSample.id,
				user: slideShareSample.user,
				title: slideShareSample.title
			}
		});
		expect(container).toBeInTheDocument();
	});
});

describe('SlideShare - wrapper dom', () => {
	it('should not have the text box div in the dom', async () => {
		const { getByTestId } = render(SlideShare, {
			props: {
				id: slideShareSample.id,
				user: slideShareSample.user,
				title: slideShareSample.title,
				withText: false
			}
		});

		const wrapper = getByTestId('slideshare_wrapper');
		expect(queryByTestId(wrapper, /text-box/i)).toBeNull();
	});

	it('should have the text box div in the dom', async () => {
		const { getByTestId } = render(SlideShare, {
			props: {
				id: slideShareSample.id,
				user: slideShareSample.user,
				title: slideShareSample.title
			}
		});
		const textBox = getByTestId('slideshare_text_box');
		expect(textBox).toBeDefined();
	});

	it('should have the text box div in the dom with accessible links ', async () => {
		const { getByTestId } = render(SlideShare, {
			props: {
				id: slideShareSample.id,
				user: slideShareSample.user,
				title: slideShareSample.title
			}
		});
		const videoLink = getByTestId('slideshare_link_to_the_video');
		expect(videoLink).toHaveAccessibleName('Click to open the video on the Vimeo website');

		const userPageLink = getByTestId('slideshare_link_to_the_user_page');
		expect(userPageLink).toHaveAccessibleName('Link to the user page on Vimeo website');
	});

	it('should have the text box div in the dom with links to the video and user page defined', async () => {
		const { getByTestId } = render(SlideShare, {
			props: {
				id: slideShareSample.id,
				user: slideShareSample.user,
				title: slideShareSample.title
			}
		});
		const videoLink = getByTestId('slideshare_link_to_the_video');

		expect(videoLink).toHaveAttribute(
			'href',
			`https://www.slideshare.net/${slideShareSample.user}/${slideShareSample.title}`
		);
		const userPageLink = getByTestId('slideshare_link_to_the_user_page');
		expect(userPageLink).toHaveAttribute(
			'href',
			`https://www.slideshare.net/${slideShareSample.user}`
		);
	});
});

describe('SlideShare - iframe', () => {
	it('should have a defined const url', async () => {
		const { getByTestId } = render(SlideShare, {
			props: {
				id: slideShareSample.id,
				user: slideShareSample.user,
				title: slideShareSample.title
			}
		});
		const iframe = getByTestId('slideshare_iframe');
		expect(iframe['src']).toBeDefined();
	});
});
