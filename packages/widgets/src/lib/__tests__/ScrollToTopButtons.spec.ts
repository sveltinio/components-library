import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/svelte';
import ScrollToTopButton from '../components/ScrollToTopButton.svelte';

describe('ScrollToTopButton', () => {
	it('should be in the document', async () => {
		const { container } = render(ScrollToTopButton, {});
		expect(container).toBeInTheDocument();
	});

	it('should be not visible at the begining', async () => {
		const { getByTestId } = render(ScrollToTopButton, {});
		window.scrollTo = jest.fn();

		const scrollBtn = getByTestId('scrollBtn');
		expect(scrollBtn).toHaveClass('animate-bounce', 'hide');
	});

	it('page should scroll to top when clicked', async () => {
		const { getByTestId } = render(ScrollToTopButton, {});
		window.scrollTo = jest.fn();

		const scrollBtn = getByTestId('scrollBtn');
		await fireEvent.click(scrollBtn);
		expect(document.body.scrollIntoView).toBeCalled();
	});
});
