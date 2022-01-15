import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import PrevNextButtons from '../components/PrevNextButtons.svelte';
import { previous, next } from './__fixtures__/data.test.js';

describe('PrevNextButtons', () => {
	it('should be in the document', async () => {
		const { container } = render(PrevNextButtons, {
			props: {
				previous: previous,
				next: next
			}
		});
		expect(container).toBeInTheDocument();
	});
});

describe('PrevNextButtons - Previous', () => {
	it('should have the link to the previous item', async () => {
		const { getByTestId } = render(PrevNextButtons, {
			props: {
				previous: previous,
				next: next
			}
		});
		expect(getByTestId('link-to-previous')).toBeDefined;
	});

	it('should have the link to the previous item with an accessible name (alt)', async () => {
		const { getByTestId } = render(PrevNextButtons, {
			props: {
				previous: previous,
				next: next
			}
		});

		const link = getByTestId('link-to-previous');
		expect(link).toHaveAccessibleName();
	});

	it('should have the a link to the previous item with an accessible description (title)', async () => {
		const { getByTestId } = render(PrevNextButtons, {
			props: {
				previous: previous,
				next: next
			}
		});

		const link = getByTestId('link-to-previous');
		expect(link).toHaveAccessibleDescription();
	});

	it('should have "Why" as text', async () => {
		const { getByTestId } = render(PrevNextButtons, {
			props: {
				previous: previous,
				next: next
			}
		});
		const messageText = getByTestId('previous-message-text');
		expect(messageText.innerHTML).toBe('« Why');
	});

	it('should have the link to the previous item with aria-label "Why"', async () => {
		render(PrevNextButtons, {
			props: {
				previous: previous,
				next: next
			}
		});
		const linkNode = screen.getByLabelText('link to Why');
		expect(linkNode).not.toBeNull();
	});
});

describe('PrevNextButtons - Next', () => {
	it('should have the link to the next item', async () => {
		const { getByTestId } = render(PrevNextButtons, {
			props: {
				previous: previous,
				next: next
			}
		});
		expect(getByTestId('link-to-next')).toBeDefined;
	});

	it('should have the link to the next item with an accessible name (alt)', async () => {
		const { getByTestId } = render(PrevNextButtons, {
			props: {
				previous: previous,
				next: next
			}
		});

		const link = getByTestId('link-to-next');
		expect(link).toHaveAccessibleName();
	});

	it('should have the a link to the next item with an accessible description (title)', async () => {
		const { getByTestId } = render(PrevNextButtons, {
			props: {
				previous: previous,
				next: next
			}
		});

		const link = getByTestId('link-to-next');
		expect(link).toHaveAccessibleDescription();
	});

	it('should have "Getting Started" as text', async () => {
		const { getByTestId } = render(PrevNextButtons, {
			props: {
				previous: previous,
				next: next
			}
		});
		const messageText = getByTestId('next-message-text');
		expect(messageText.innerHTML).toBe('Getting Started »');
	});

	it('should have the link to the next item with aria-label "Getting Started"', async () => {
		render(PrevNextButtons, {
			props: {
				previous: previous,
				next: next
			}
		});
		const linkNode = screen.getByLabelText('link to Getting Started');
		expect(linkNode).not.toBeNull();
	});

	it('should have the link with href "posts/getting-started"', async () => {
		render(PrevNextButtons, {
			props: {
				previous: previous,
				next: next
			}
		});
		const linkNode = screen.getByLabelText('link to Getting Started');
		expect(linkNode).toHaveAttribute('href', '/posts/getting-started');
	});
});
