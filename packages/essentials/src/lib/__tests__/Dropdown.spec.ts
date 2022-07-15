import { describe, it, expect, beforeAll, vi } from 'vitest';
import { render } from '@testing-library/svelte';
import { Dropdown } from '$lib';
import { menu } from '$lib/__tests__/__fixtures__/data.test.js.js';

describe('Dropdown', () => {
	beforeAll(() => {
		Object.defineProperty(window, 'matchMedia', {
			writable: true,
			value: vi.fn().mockImplementation((query) => ({
				matches: false,
				media: query,
				onchange: null,
				addListener: vi.fn(),
				removeListener: vi.fn(),
				addEventListener: vi.fn(),
				removeEventListener: vi.fn(),
				dispatchEvent: vi.fn()
			}))
		});
	});

	it('should be in the document', async () => {
		const { container } = render(Dropdown, {
			props: {
				title: 'articles',
				data: menu
			}
		});
		expect(container).toBeInTheDocument();
	});
});
