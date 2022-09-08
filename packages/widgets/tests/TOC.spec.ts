import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/svelte';
import { TOC } from '../src/lib';
import { headings } from './__fixtures__/data.test.js';

describe('TOC', () => {
	it('should be in the document', async () => {
		const { container } = render(TOC, {
			props: {
				resource: 'uQntFkK8Z54',
				slug: 'The Future of Svelte',
				headings: [],
				withChildren: false
			}
		});
		expect(container).toBeInTheDocument();
	});

	it('should have 8 items', async () => {
		expect(headings.length).toBe(8);
	});

	it('should contain the toggle button', async () => {
		const { getByTestId } = render(TOC, {
			props: {
				resource: 'posts',
				slug: 'welcome',
				headings: headings,
				withChildren: false
			}
		});

		expect(getByTestId('toc_container')).toContainElement(getByTestId('toggle_btn'));
	});

	it('should have a list with toc items when open', async () => {
		const { getByTestId } = render(TOC, {
			props: {
				resource: 'posts',
				slug: 'welcome',
				headings: headings,
				withChildren: false
			}
		});

		const button = getByTestId('toggle_btn');
		await fireEvent.click(button);
		expect(getByTestId('toc_container')).toContainElement(getByTestId('toc_list'));
	});

	it('should have a link item to tables', async () => {
		const { getByTestId } = render(TOC, {
			props: {
				resource: 'posts',
				slug: 'welcome',
				headings: headings,
				withChildren: false
			}
		});

		const button = getByTestId('toggle_btn');
		await fireEvent.click(button);
		expect(getByTestId('toc_container')).toContainElement(getByTestId('toc_list'));
		expect(getByTestId('toc_item_tables')).toContainElement(getByTestId('toc_link_tables'));
	});

	it('should have a child link item to blockquotes', async () => {
		const { getByTestId } = render(TOC, {
			props: {
				resource: 'posts',
				slug: 'welcome',
				headings: headings,
				withChildren: true
			}
		});

		const button = getByTestId('toggle_btn');
		await fireEvent.click(button);
		expect(getByTestId('toc_children_list_blockquotes')).toContainElement(
			getByTestId('toc_child_link_w-attribution')
		);
	});
});
