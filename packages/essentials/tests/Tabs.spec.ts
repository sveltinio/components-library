import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import { Tabs } from '../src/lib';
import { TabSlotTest } from './slot';

describe('Tabs', () => {
	it('should be in the document', async () => {
		const { container } = render(Tabs, {});
		expect(container).toBeInTheDocument();
	});

	it('should have list of tab titles', async () => {
		const { getByTestId } = render(TabSlotTest, {
			props: { Component: Tabs }
		});

		const titlesList = getByTestId('tabs-titles-list');
		expect(titlesList).not.toBeNull();

		const titleItem = getByTestId('label-1');
		expect(titleItem).not.toBeNull();
	});

	it('should render tab title', async () => {
		const { getByTestId } = render(TabSlotTest, {
			props: { Component: Tabs }
		});

		const slot = getByTestId('label-1');
		expect(slot).not.toBeNull();

		expect(slot.textContent).toBe('Tab 1');
	});

	it('should render tab content', async () => {
		const { getByTestId } = render(TabSlotTest, {
			props: { Component: Tabs }
		});

		const slot = getByTestId('tab-content');
		expect(slot).not.toBeNull();

		expect(slot.textContent?.trim()).toBe('Sample content for Tab 1');
	});
});
