import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import { Link } from '../src/lib/components/link/index.js';

describe('Link', () => {
	it('should be in the document', async () => {
		const { container } = render(Link, {
			props: {
				id: 'sveltin-site-link',
				label: 'sveltin',
				href: 'https://sveltin.io'
			}
		});
		expect(container).toBeInTheDocument();
	});

	it('should have a defined prop id', async () => {
		const { getByTestId } = render(Link, {
			props: {
				id: 'sveltin-site-link',
				label: 'sveltin',
				href: 'https://sveltin.io'
			}
		});

		const link = getByTestId('link');
		expect(link).toHaveAttribute('id');
	});

	it('should have an accessible name (alt)', async () => {
		const { getByTestId } = render(Link, {
			props: {
				id: 'sveltin-site-link',
				label: 'sveltin',
				href: 'https://sveltin.io'
			}
		});

		const link = getByTestId('link');
		expect(link).toHaveAccessibleName();
	});

	it('should have aria-label prop set', async () => {
		const { getByLabelText } = render(Link, {
			props: {
				id: 'sveltin-site-link',
				label: 'sveltin',
				href: 'https://sveltin.io'
			}
		});

		const ariaLabel = getByLabelText('sveltin');
		expect(ariaLabel).toBeTruthy();
	});

	it('should be an external link', async () => {
		const { getByTestId } = render(Link, {
			props: {
				id: 'sveltin-site-link',
				label: 'sveltin',
				href: 'https://sveltin.io',
				external: true
			}
		});

		const link = getByTestId('link');
		expect(link).toHaveAttribute('target', '_blank');
	});

	it('should be an external link with noopener as one of the rel values', async () => {
		const { getByTestId } = render(Link, {
			props: {
				id: 'sveltin-site-link',
				label: 'sveltin',
				href: 'https://sveltin.io',
				external: true
			}
		});

		const link = getByTestId('link');
		expect(link).toHaveAttribute('target', '_blank');
		expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
	});
});
