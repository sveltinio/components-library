import '@testing-library/jest-dom';
import { it, describe, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import { Card } from '../src/lib/index.js';
import { CardSlotTest } from './slot/index.js';

describe('Card', () => {
	it('should be in the document', async () => {
		const { container } = render(Card, {
			props: {
				resource: 'posts',
				slug: 'welcome'
			}
		});
		expect(container).toBeInTheDocument();
	});

	it('should have a valid id', async () => {
		const { getByTestId } = render(Card, {
			props: {
				resource: 'posts',
				slug: 'welcome'
			}
		});
		expect(getByTestId('card-container')).toHaveClass('card');
	});

	it('should render slotted title', async () => {
		const { getByTestId } = render(CardSlotTest, {
			props: { Component: Card }
		});

		const slot = getByTestId('card-title');
		expect(slot).not.toBeNull();
		expect(slot.textContent).toBe('Card Title');
	});

	it('should render slotted content', async () => {
		const { getByTestId } = render(CardSlotTest, {
			props: { Component: Card }
		});

		const slot = getByTestId('card-text');
		expect(slot).not.toBeNull();
		expect(slot.textContent).toBe('Card Content');
	});

	it('should render slotted button', async () => {
		const { getByTestId } = render(CardSlotTest, {
			props: { Component: Card }
		});

		const slot = getByTestId('card-button-link');
		expect(slot).not.toBeNull();
		expect(slot.textContent).toBe('Read More »');
	});
});
