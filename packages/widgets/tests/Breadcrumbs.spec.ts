import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { Breadcrumbs } from '../src/lib/index.js';

describe('Breadcrumbs', () => {
	it('should be in the document', async () => {
		const { container } = render(Breadcrumbs, {
			props: {
				url: 'http://example.com/posts/welcome'
			}
		});
		expect(container).toBeInTheDocument();
	});

	it('should have a link to posts', async () => {
		const { getByTestId } = render(Breadcrumbs, {
			props: {
				url: 'http://example.com/posts/welcome'
			}
		});
		expect(screen.queryByText('Posts')).toBeInTheDocument();
		const linkToParent = getByTestId('linkToParent');
		expect(linkToParent).toHaveAttribute('href', 'http://example.com/posts');
	});

	it('should have Welcome as text content for currentTitle ', async () => {
		const { getByTestId } = render(Breadcrumbs, {
			props: {
				url: 'http://example.com/posts/welcome'
			}
		});
		const currentPage = getByTestId('currentPage');
		expect(currentPage).toHaveTextContent('Welcome');
	});

	it('should not have a link to posts', async () => {
		render(Breadcrumbs, {
			props: {
				url: 'http://example.com/welcome'
			}
		});
		expect(screen.queryByText('Posts')).not.toBeInTheDocument();
	});
});
