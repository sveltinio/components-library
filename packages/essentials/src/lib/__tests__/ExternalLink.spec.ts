import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import { ExternalLink } from '..';

describe('ExternalLink', () => {
	it('should be in the document', async () => {
		const { container } = render(ExternalLink, {
			props: {
				id: 'sveltin-site-link',
				name: 'sveltin',
				url: 'https://sveltin.io'
			}
		});
		expect(container).toBeInTheDocument();
	});

	it('should have a defined prop id', async () => {
		const { getByTestId } = render(ExternalLink, {
			props: {
				id: 'sveltin-site-link',
				name: 'sveltin',
				url: 'https://sveltin.io'
			}
		});

		const link = getByTestId('ext-link');
		expect(link).toHaveAttribute('id');
	});

	it('should have an accessible name (alt)', async () => {
		const { getByTestId } = render(ExternalLink, {
			props: {
				id: 'sveltin-site-link',
				name: 'sveltin',
				url: 'https://sveltin.io'
			}
		});

		const link = getByTestId('ext-link');
		expect(link).toHaveAccessibleName();
	});

	it('should have an accessible description (title)', async () => {
		const { getByTestId } = render(ExternalLink, {
			props: {
				id: 'sveltin-site-link',
				name: 'sveltin',
				url: 'https://sveltin.io'
			}
		});

		const link = getByTestId('ext-link');
		expect(link).toHaveAccessibleDescription();
	});

	it('should have noopener as one of the rel values', async () => {
		const { getByTestId } = render(ExternalLink, {
			props: {
				id: 'sveltin-site-link',
				name: 'sveltin',
				url: 'https://sveltin.io'
			}
		});

		const link = getByTestId('ext-link');
		expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
	});
});
