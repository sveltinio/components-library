import { it, describe, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/svelte';
import { CollapsibleList } from '..';

describe('CollapsibleList', () => {
	it('should be in the document', async () => {
		const { container } = render(CollapsibleList, {
			props: {
				headerText: 'Expand Me'
			}
		});
		expect(container).toBeInTheDocument();
	});

	it('should have Expand Me as header Text', async () => {
		const { getByTestId } = render(CollapsibleList, {
			props: {
				headerText: 'Expand Me'
			}
		});
		const text = getByTestId('headerText');
		expect(text).toHaveTextContent('Expand Me');
	});

	it('should have the items wrapper visibility changed after the click', async () => {
		const { getByTestId } = render(CollapsibleList, {
			props: {
				headerText: 'Expand Me'
			}
		});
		const wrapper = getByTestId('itemsWrapper');
		expect(wrapper).toHaveClass('hidden');

		const toggleBtn = getByTestId('toggleBtn');
		await fireEvent.click(toggleBtn);
		expect(wrapper).not.toHaveClass('hideen');
	});
});

describe('CollapsibleList - nav-arrow-up', () => {
	it('should be not visible before clicking', async () => {
		const { getByTestId } = render(CollapsibleList, {
			props: {
				headerText: 'Expand Me'
			}
		});

		const navArrowUp = getByTestId('arrowUp');
		expect(navArrowUp).toHaveClass('hidden');
	});
});

describe('CollapsibleList - nav-arrow-down', () => {
	it('should be not visible after clicking', async () => {
		const { getByTestId } = render(CollapsibleList, {
			props: {
				headerText: 'Expand Me'
			}
		});

		const toggleBtn = getByTestId('toggleBtn');
		const navArrowDown = getByTestId('arrowDown');
		expect(navArrowDown).toHaveClass('block');

		await fireEvent.click(toggleBtn);
		expect(navArrowDown).toHaveClass('hidden');
	});
});
