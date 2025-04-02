import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import { ToggleList } from '../src/lib/components/list/index.js';
import { contentForToggleList } from '../src/data/sample';
import { ToggleListSlotTest } from './slot';

describe('Link', () => {
	it('should be in the document', async () => {
		const { container } = render(ToggleList, {
			props: {
				title: 'My Toggle List',
				items: contentForToggleList
			}
		});
		expect(container).toBeInTheDocument();
	});

	it('should have list title text', async () => {
		const { getByTestId } = render(ToggleList, {
			props: {
				title: 'My Toggle List',
				items: contentForToggleList
			}
		});

		const listTitle = getByTestId('list_toggle_btn');
		expect(listTitle).not.toBeNull();
		expect(listTitle.textContent?.trim()).toBe('My Toggle List');
	});

	it('should have default icons', async () => {
		const { getByTestId } = render(ToggleList, {
			props: {
				title: 'My Toggle List',
				items: contentForToggleList
			}
		});

		const rightSideIconSlot = getByTestId('right_side_icon');
		expect(rightSideIconSlot).not.toBeNull();
	});

	it('should have 2 items', async () => {
		const { getAllByRole } = render(ToggleList, {
			props: {
				title: 'My Toggle List',
				items: contentForToggleList
			}
		});

		const list = getAllByRole('listitem');
		expect(list).toHaveLength(2);
	});

	it('should have links defined', async () => {
		const { getAllByRole } = render(ToggleList, {
			props: {
				title: 'My Toggle List',
				items: contentForToggleList
			}
		});

		const links = getAllByRole('menuitem');
		expect(links).toHaveLength(2);

		expect(links[0].textContent?.trim()).toBe('First');
		expect(links[0]).toHaveAttribute('href', '#first');

		expect(links[1].textContent?.trim()).toBe('Second');
		expect(links[1]).toHaveAttribute('href', '#second');
	});

	it('should have custom styles', async () => {
		const { getByTestId } = render(ToggleList, {
			props: {
				title: 'My Toggle List',
				items: contentForToggleList,
				styles: {
					'title-color-hover': 'red',
					'item-border-width': '3px'
				}
			}
		});

		const wrapper = getByTestId('list_wrapper');
		expect(wrapper).not.toBeNull();
		expect(wrapper).toBeTruthy();
		expect(wrapper).toHaveAttribute('style', '--title-color-hover: red; --item-border-width: 3px;');
	});

	it('should render custom icons through slots', async () => {
		const { getByTestId } = render(ToggleListSlotTest, {
			props: { Component: ToggleList }
		});

		const rightSideIconSlot = getByTestId('right_side_icon');
		expect(rightSideIconSlot).not.toBeNull();
	});
});
