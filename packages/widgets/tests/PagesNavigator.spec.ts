import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { PagesNavigator } from '../src/lib/index.js';
import { previous, next } from '../src/data/sample.js';

const prevObj = {
	label: previous.metadata.title,
	href: '/' + previous.resource + '/' + previous.metadata.slug
};

const nextObj = {
	label: next.metadata.title,
	href: '/' + next.resource + '/' + next.metadata.slug
};

describe('PagesNavigator', () => {
	it('should be in the document', async () => {
		const { container } = render(PagesNavigator, {
			props: {
				prev: prevObj,
				next: nextObj
			}
		});
		expect(container).toBeInTheDocument();
	});
});

describe('PagesNavigator - Previous', () => {
	it('should have the link to the previous item', async () => {
		const { getByTestId } = render(PagesNavigator, {
			props: {
				prev: prevObj,
				next: nextObj
			}
		});
		expect(getByTestId('link-to-previous')).toBeDefined();
	});

	it('should have the link to the previous item with an accessible name (alt)', async () => {
		const { getByTestId } = render(PagesNavigator, {
			props: {
				prev: prevObj,
				next: nextObj
			}
		});

		const link = getByTestId('link-to-previous');
		expect(link).toHaveAccessibleName();
	});

	it('should have the a link to the previous item with an accessible description (title)', async () => {
		const { getByTestId } = render(PagesNavigator, {
			props: {
				prev: prevObj,
				next: nextObj
			}
		});

		const link = getByTestId('link-to-previous');
		expect(link).toHaveAccessibleDescription();
	});

	it('should have "Welcome" as text', async () => {
		const { getByTestId } = render(PagesNavigator, {
			props: {
				prev: prevObj,
				next: nextObj
			}
		});
		const messageText = getByTestId('previous-message-text');
		expect(messageText.innerHTML).toBe('Welcome');
	});

	it('should have the link to the previous item with aria-label "Welcome"', async () => {
		render(PagesNavigator, {
			props: {
				prev: prevObj,
				next: nextObj
			}
		});
		const linkNode = screen.getByLabelText('link to Welcome');
		expect(linkNode).not.toBeNull();
	});
});

describe('PagesNavigator - Next', () => {
	it('should have the link to the next item', async () => {
		const { getByTestId } = render(PagesNavigator, {
			props: {
				prev: prevObj,
				next: nextObj
			}
		});
		expect(getByTestId('link-to-next')).toBeDefined();
	});

	it('should have the link to the next item with an accessible name (alt)', async () => {
		const { getByTestId } = render(PagesNavigator, {
			props: {
				prev: prevObj,
				next: nextObj
			}
		});

		const link = getByTestId('link-to-next');
		expect(link).toHaveAccessibleName();
	});

	it('should have the a link to the next item with an accessible description (title)', async () => {
		const { getByTestId } = render(PagesNavigator, {
			props: {
				prev: prevObj,
				next: nextObj
			}
		});

		const link = getByTestId('link-to-next');
		expect(link).toHaveAccessibleDescription();
	});

	it('should have "Getting Started" as text', async () => {
		const { getByTestId } = render(PagesNavigator, {
			props: {
				prev: prevObj,
				next: nextObj
			}
		});
		const messageText = getByTestId('next-message-text');
		expect(messageText.innerHTML).toBe('Getting Started');
	});

	it('should have the link to the next item with aria-label "Getting Started"', async () => {
		render(PagesNavigator, {
			props: {
				prev: prevObj,
				next: nextObj
			}
		});
		const linkNode = screen.getByLabelText('link to Getting Started');
		expect(linkNode).not.toBeNull();
	});

	it('should have the link with href "posts/getting-started"', async () => {
		render(PagesNavigator, {
			props: {
				prev: prevObj,
				next: nextObj
			}
		});
		const linkNode = screen.getByLabelText('link to Getting Started');
		expect(linkNode).toHaveAttribute('href', '/posts/getting-started');
	});
});
