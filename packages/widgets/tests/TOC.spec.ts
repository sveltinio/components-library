import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/svelte';
import { TOC } from '../src/lib/index.js';
import { tocEntries } from '../src/data/sample.js';

describe('TOC', () => {
	it('should have 4 items', async () => {
		expect(tocEntries.length).toBe(4);
	});

	it('should be in the document', async () => {
		const { container } = render(TOC, {
			props: {
				data: tocEntries
			}
		});
		expect(container).toBeInTheDocument();
	});

	it('should contain the toggle button', async () => {
		const { getByTestId } = render(TOC, {
			props: {
				data: tocEntries
			}
		});

		expect(getByTestId('toc_main')).toContainElement(getByTestId('toc_btn'));
	});

	it('should have a 2 list', async () => {
		const { getAllByTestId } = render(TOC, {
			props: {
				data: tocEntries
			}
		});

		const lists = getAllByTestId('toc_list');
		expect(lists.length).toBe(2);
	});

	it('should have first ul with class visible when open', async () => {
		const { getByTestId, getAllByTestId } = render(TOC, {
			props: {
				data: tocEntries
			}
		});

		const lists = getAllByTestId('toc_list');
		expect(lists[0]).toHaveClass('list hidden');

		const button = getByTestId('toc_btn');
		await fireEvent.click(button);

		expect(lists[0]).toHaveClass('list visible');
	});
});
