import '@testing-library/jest-dom';
import { describe, it, expect, beforeAll, vi } from 'vitest';
import { render } from '@testing-library/svelte';
import { Button } from '../src/lib/components/button/index.js';

describe('Button', () => {
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
		const { container } = render(Button, {
			props: {
				label: 'Click Me'
			}
		});
		expect(container).toBeInTheDocument();
	});

	it('should be primary', async () => {
		const { getByTestId } = render(Button, {
			props: {
				label: 'Click Me',
				variant: 'primary'
			}
		});

		//expect(getByTestId('btn').classList.contains('sn-e-c-button')).toBeTruthy();
		expect(getByTestId('btn').getAttribute('data-variant')).toBe('primary');
	});

	it('should be success and rounded', async () => {
		const { getByTestId } = render(Button, {
			props: {
				label: 'Click Me',
				variant: 'success',
				shape: 'rounded'
			}
		});

		expect(getByTestId('btn').getAttribute('data-variant')).toBe('success');
		expect(getByTestId('btn').getAttribute('data-shape')).toBe('rounded');
	});

	it('should be error and outlined', async () => {
		const { getByTestId } = render(Button, {
			props: {
				label: 'Click Me',
				variant: 'error',
				outline: true
			}
		});

		expect(getByTestId('btn').getAttribute('data-variant')).toBe('error-outline');
	});

	it('should have size xs', async () => {
		const { getByTestId } = render(Button, {
			props: {
				label: 'Click Me',
				variant: 'error',
				size: 'xs'
			}
		});

		expect(getByTestId('btn').getAttribute('data-size')).toBe('xs');
	});

	it('should be primary, circular and lg size', async () => {
		const { getByTestId } = render(Button, {
			props: {
				label: 'Click Me',
				variant: 'primary',
				size: 'lg',
				shape: 'circle'
			}
		});

		expect(getByTestId('btn').getAttribute('data-variant')).toBe('primary');
		expect(getByTestId('btn').getAttribute('data-shape')).toBe('circle');
		expect(getByTestId('btn').getAttribute('data-size')).toBe('lg');
	});

	it('should be primary and dashed border', async () => {
		const { getByTestId } = render(Button, {
			props: {
				label: 'Click Me',
				variant: 'primary',
				border: 'dashed'
			}
		});

		expect(getByTestId('btn').getAttribute('data-border')).toBe('dashed');
	});

	it('should be primary with focus ring', async () => {
		const { getByTestId } = render(Button, {
			props: {
				label: 'Click Me',
				variant: 'primary',
				noFocusRing: true
			}
		});

		expect(getByTestId('btn').getAttribute('data-no-focus-ring')).toBe('true');
	});

	it('should be a button with link', async () => {
		const { getByTestId } = render(Button, {
			props: {
				label: 'Click Me',
				variant: 'primary',
				href: 'https://sveltin.io'
			}
		});

		expect(getByTestId('btn')).toHaveAttribute('href', 'https://sveltin.io');
	});

	it('should be a button with prefetch link', async () => {
		const { getByTestId } = render(Button, {
			props: {
				label: 'Click Me',
				href: '/posts/welcome',
				prefetch: 'hover'
			}
		});

		expect(getByTestId('btn')).toHaveAttribute('href', '/posts/welcome');
		expect(getByTestId('btn')).toHaveAttribute('data-sveltekit-preload-data', 'hover');
	});

	it('should be a button link to target _blank', async () => {
		const { getByTestId } = render(Button, {
			props: {
				label: 'Click Me',
				href: 'https://sveltin.io',
				external: true
			}
		});

		expect(getByTestId('btn')).toHaveAttribute('href', 'https://sveltin.io');
		expect(getByTestId('btn')).toHaveAttribute('target', '_blank');
	});
});
