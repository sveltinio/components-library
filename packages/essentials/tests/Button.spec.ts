import '@testing-library/jest-dom';
import { describe, it, expect, beforeAll, vi } from 'vitest';
import { render } from '@testing-library/svelte';
import { Button } from '../src/lib';

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
				type: 'primary'
			}
		});

		expect(getByTestId('btn')).toHaveClass('btn-primary');
	});

	it('should be success and rounded', async () => {
		const { getByTestId } = render(Button, {
			props: {
				label: 'Click Me',
				type: 'success',
				rounded: true
			}
		});

		expect(getByTestId('btn')).toHaveClass('btn-success btn-rounded');
	});

	it('should be error and outlined', async () => {
		const { getByTestId } = render(Button, {
			props: {
				label: 'Click Me',
				type: 'error',
				outlined: true
			}
		});

		expect(getByTestId('btn')).toHaveClass('btn-outlined btn-outlined-error');
	});

	it('should have size xs', async () => {
		const { getByTestId } = render(Button, {
			props: {
				label: 'Click Me',
				type: 'error',
				size: 'xs'
			}
		});

		expect(getByTestId('btn')).toHaveClass('btn-xs');
	});

	it('should be primary, circular and lg size', async () => {
		const { getByTestId } = render(Button, {
			props: {
				label: 'Click Me',
				type: 'primary',
				size: 'lg',
				circular: true
			}
		});

		expect(getByTestId('btn')).toHaveClass('btn btn-primary btn-lg btn-circular');
	});

	it('should be primary and dashed border', async () => {
		const { getByTestId } = render(Button, {
			props: {
				label: 'Click Me',
				type: 'primary',
				border: 'dashed'
			}
		});

		expect(getByTestId('btn')).toHaveClass('btn btn-primary btn-border-dashed');
	});

	it('should be primary with focus ring', async () => {
		const { getByTestId } = render(Button, {
			props: {
				label: 'Click Me',
				type: 'primary',
				withFocusRing: true
			}
		});

		expect(getByTestId('btn')).toHaveClass(
			'btn btn-primary btn-border-solid btn-focus btn-primary-focus'
		);
	});

	it('should be a button with link', async () => {
		const { getByTestId } = render(Button, {
			props: {
				label: 'Click Me',
				type: 'primary',
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
				prefetch: true
			}
		});

		expect(getByTestId('btn')).toHaveAttribute('href', '/posts/welcome');
		expect(getByTestId('btn')).toHaveAttribute('data-sveltekit-prefetch');
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
