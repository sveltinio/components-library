import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import { Picture } from '..';

/** *******************************************************************************
 *                                      PLAIN
 * ********************************************************************************/
describe('Picture', () => {
	it('should be in the document', async () => {
		const { container } = render(Picture, {
			props: {
				src: 'logo.png',
				altText: 'sveltin-logo',
				webp: true,
				avif: true
			}
		});
		expect(container).toBeInTheDocument();
	});

	it('should have a const named filename', async () => {
		const { component } = render(Picture, {
			props: {
				src: 'logo.png',
				altText: 'sveltin-logo'
			}
		});
		expect(component.filename).toBeDefined();
	});

	it('should have filename logo', async () => {
		const { component } = render(Picture, {
			props: {
				src: 'logo.png',
				altText: 'sveltin-logo'
			}
		});
		expect(component.filename('logo.png')).toBe('logo');
	});

	it('should have src to logo.png', async () => {
		const { getByTestId } = render(Picture, {
			props: {
				src: 'logo.png',
				altText: 'sveltin-logo'
			}
		});
		expect(getByTestId('imgtag')).toHaveAttribute('src', '/logo.png');
	});

	it('should not contain both avif and webp', async () => {
		const { getByTestId } = render(Picture, {
			props: {
				src: 'logo.png',
				altText: 'sveltin-logo'
			}
		});
		expect(getByTestId('picture-id')).not.toContainHTML(
			'<source data-testid="avif" type="image/avif" srcset="/avif/logo.avif"/>'
		);
		expect(getByTestId('picture-id')).not.toContainHTML(
			'<source data-testid="webp" type="image/webp" srcset="/webp/logo.webp"/>'
		);
	});

	it('should have width & height', async () => {
		const { getByTestId } = render(Picture, {
			props: {
				src: 'logo.png',
				altText: 'sveltin-logo'
			}
		});
		const img = getByTestId('imgtag');
		expect(img).toHaveAttribute('width', '100%');
		expect(img).toHaveAttribute('height', '100%');
	});

	it('should be lazy and async', async () => {
		const { getByTestId } = render(Picture, {
			props: {
				src: 'logo.png',
				altText: 'sveltin-logo'
			}
		});
		const img = getByTestId('imgtag');
		expect(img).toHaveAttribute('loading', 'lazy');
		expect(img).toHaveAttribute('decoding', 'async');
	});

	it('should have rounded-lg class', async () => {
		const { getByTestId } = render(Picture, {
			props: {
				src: 'logo.png',
				altText: 'sveltin-logo',
				class: 'object-cover rounded-lg'
			}
		});
		expect(getByTestId('imgtag')).toHaveClass('object-cover', 'rounded-lg');
	});

	it('should have an accessible name (alt)', async () => {
		const { getByTestId } = render(Picture, {
			props: {
				src: 'logo.png',
				altText: 'sveltin-logo'
			}
		});
		expect(getByTestId('imgtag')).toHaveAccessibleName();
		expect(getByTestId('imgtag')).toHaveAccessibleName('sveltin-logo');
	});
});

/** *******************************************************************************
 *                                       AVIF
 * ********************************************************************************/
describe('[AVIF] Picture', () => {
	it('should contain avif', async () => {
		const { getByTestId } = render(Picture, {
			props: {
				src: 'logo.png',
				altText: 'sveltin-logo',
				avif: true
			}
		});
		expect(getByTestId('picture-id')).toContainElement(getByTestId('avif'));
	});

	it('should have type as image/avif', async () => {
		const { getByTestId } = render(Picture, {
			props: {
				src: 'logo.png',
				altText: 'sveltin-logo',
				webp: true,
				avif: true
			}
		});
		expect(getByTestId('avif')).toHaveAttribute('type', 'image/avif');
	});

	it('should not contain webp', async () => {
		const { getByTestId } = render(Picture, {
			props: {
				src: 'logo.png',
				altText: 'sveltin-logo',
				avif: true
			}
		});
		expect(getByTestId('picture-id')).not.toContainHTML(
			'<source data-testid="webp" type="image/webp" srcset="/webp/logo.webp"/>'
		);
	});
});

/** *******************************************************************************
 *                                       WEBP
 * ********************************************************************************/
describe('[WEBP] Picture', () => {
	it('should contain webp', async () => {
		const { getByTestId } = render(Picture, {
			props: {
				src: 'logo.png',
				altText: 'sveltin-logo',
				webp: true
			}
		});
		expect(getByTestId('picture-id')).toContainElement(getByTestId('webp'));
	});

	it('should have type as image/webp', async () => {
		const { getByTestId } = render(Picture, {
			props: {
				src: 'logo.png',
				altText: 'sveltin-logo',
				webp: true
			}
		});
		expect(getByTestId('webp')).toHaveAttribute('type', 'image/webp');
	});

	it('should not contain avif', async () => {
		const { getByTestId } = render(Picture, {
			props: {
				src: 'logo.png',
				altText: 'sveltin-logo',
				webp: true
			}
		});
		expect(getByTestId('picture-id')).not.toContainHTML(
			'<source data-testid="avif" type="image/avif" srcset="/avif/logo.avif"/>'
		);
	});
});
