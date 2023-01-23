import '@testing-library/jest-dom';
import { it, describe, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import { Card } from '../src/lib/index.js';
import { CardActionSlotTest } from './slot/index.js';

describe('Card', () => {
	it('should be in the document', async () => {
		const { container } = render(Card, {
			props: {
				title: 'welcome',
				content: 'Lorem ipsum...',
				href: '/welcome'
			}
		});
		expect(container).toBeInTheDocument();
	});

	it('should contain welcome as text', async () => {
		const { getByText } = render(Card, {
			props: {
				title: 'welcome',
				content: 'Lorem ipsum...',
				href: '/welcome'
			}
		});
		expect(getByText('welcome')).toBeInTheDocument();
	});

	it('should have card-title element containing a create-title-text', async () => {
		const { getByTestId } = render(Card, {
			props: {
				title: 'welcome',
				content: 'Lorem ipsum...',
				href: '/welcome'
			}
		});
		expect(getByTestId('card-title')).toContainElement(getByTestId('card-title-text'));
	});

	it('should have card-title-text defined', async () => {
		const { getByTestId } = render(Card, {
			props: {
				title: 'welcome',
				content: 'Lorem ipsum...',
				href: '/welcome'
			}
		});
		expect(getByTestId('card-title-text')).toBeDefined();
	});

	it('should have title and content set to specific value', async () => {
		const { getByTestId } = render(Card, {
			props: {
				title: 'welcome',
				content: 'Lorem ipsum...',
				href: '/welcome'
			}
		});
		expect(getByTestId('card-title-text').innerHTML).toBe('welcome');
	});

	it('should render slotted button', async () => {
		const { getByTestId } = render(CardActionSlotTest, {
			props: { Component: Card }
		});

		const slot = getByTestId('card-action-link');
		expect(slot).not.toBeNull();
		expect(slot.innerHTML).toContain('Read More');
	});
});
