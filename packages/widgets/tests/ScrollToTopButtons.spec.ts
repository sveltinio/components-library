import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/svelte';
import { ScrollToTopButton } from '../src/lib/index.js';

describe('ScrollToTopButton', () => {
	it('should be in the document', async () => {
		const { container } = render(ScrollToTopButton, {});
		expect(container).toBeInTheDocument();
	});

	it('should be not visible at the begining', async () => {
		const { getByTestId } = render(ScrollToTopButton, {});
		vi.fn(() => window.scrollTo);

		const scrollBtn = getByTestId('bounce_btn');
		expect(scrollBtn).toHaveClass('animate-bounce', 'hide');
	});

	it('page should scroll to top when clicked', async () => {
		const { getByTestId } = render(ScrollToTopButton, {});
		vi.fn(() => window.scrollTo);
		window.HTMLElement.prototype.scrollIntoView = vi.fn();

		const scrollBtn = getByTestId('bounce_btn');
		await fireEvent.click(scrollBtn);
		expect(document.body.scrollIntoView).toBeCalled();
	});
});
