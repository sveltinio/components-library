import '@testing-library/jest-dom';
import { it, describe, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import { ResponsiveCard } from '../src/lib/index.js';

describe('Card', () => {
	it('should be in the document', async () => {
		const { container } = render(ResponsiveCard, {
			props: {
				title: 'welcome',
				content: 'Lorem ipsum...',
				href: '/welcome'
			}
		});
		expect(container).toBeInTheDocument();
	});

	it('should contain welcome as text', async () => {
		const { getByText } = render(ResponsiveCard, {
			props: {
				title: 'welcome',
				content: 'Lorem ipsum...',
				href: '/welcome'
			}
		});
		expect(getByText('welcome')).toBeInTheDocument();
	});

	it('should have card-title-link element containing a create-title', async () => {
		const { getByTestId } = render(ResponsiveCard, {
			props: {
				title: 'welcome',
				content: 'Lorem ipsum...',
				href: '/welcome'
			}
		});
		expect(getByTestId('card_title_link')).toContainElement(getByTestId('card_title'));
	});

	it('should have card-title defined', async () => {
		const { getByTestId } = render(ResponsiveCard, {
			props: {
				title: 'welcome',
				content: 'Lorem ipsum...',
				href: '/welcome'
			}
		});
		expect(getByTestId('card_title')).toBeDefined();
	});

	it('should have title set to specific value', async () => {
		const { getByTestId } = render(ResponsiveCard, {
			props: {
				title: 'welcome',
				content: 'Lorem ipsum...',
				href: '/welcome'
			}
		});
		expect(getByTestId('card_title').innerHTML).toBe('welcome');
	});
});
