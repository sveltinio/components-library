import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import { Link } from '../src/lib/';

describe('Link', () => {
	it('should be in the document', async () => {
		const { container } = render(Link, {
			props: {
				id: 'sveltin-site-link',
				label: 'sveltin',
				url: 'https://sveltin.io'
			}
		});
		expect(container).toBeInTheDocument();
	});

	it('should have a defined prop id', async () => {
		const { getByTestId } = render(Link, {
			props: {
				id: 'sveltin-site-link',
				label: 'sveltin',
				url: 'https://sveltin.io'
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
				url: 'https://sveltin.io'
			}
		});

		const link = getByTestId('link');
		expect(link).toHaveAccessibleName();
	});

	it('should have an accessible description (title)', async () => {
		const { getByTestId } = render(Link, {
			props: {
				id: 'sveltin-site-link',
				label: 'sveltin',
				url: 'https://sveltin.io'
			}
		});

		const link = getByTestId('link');
		expect(link).toHaveAccessibleDescription();
	});

	it('should be an internal link', async () => {
		const { getByTestId } = render(Link, {
			props: {
				id: 'sveltin-site-link',
				label: 'sveltin',
				url: 'https://sveltin.io'
			}
		});

		const link = getByTestId('link');
		expect(link).toHaveAttribute('target', '_self');
	});

	it('should be an external link', async () => {
		const { getByTestId } = render(Link, {
			props: {
				id: 'sveltin-site-link',
				label: 'sveltin',
				url: 'https://sveltin.io',
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
				url: 'https://sveltin.io',
				external: true
			}
		});

		const link = getByTestId('link');
		expect(link).toHaveAttribute('target', '_blank');
		expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
	});
});
