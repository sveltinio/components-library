import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import { YouTube } from '..';

describe('YouTube', () => {
	it('should be in the document', async () => {
		const { container } = render(YouTube, {
			props: {
				id: 'uQntFkK8Z54',
				title: 'The Future of Svelte'
			}
		});
		expect(container).toBeInTheDocument();
	});

	it('should contain iframe', async () => {
		const { getByTestId } = render(YouTube, {
			props: {
				id: 'uQntFkK8Z54',
				title: 'The Future of Svelte'
			}
		});
		expect(getByTestId('wrapper')).toContainElement(getByTestId('iframe'));
	});

	it('should have a defined const url', async () => {
		const { component } = render(YouTube, {
			props: {
				id: 'uQntFkK8Z54',
				title: 'The Future of Svelte'
			}
		});
		expect(component.url).toBeDefined();
	});

	it('should have a valid url to YouTube video', async () => {
		const { component } = render(YouTube, {
			props: {
				id: 'uQntFkK8Z54',
				title: 'The Future of Svelte'
			}
		});
		expect(component.url).toBe('https://www.youtube.com/embed/uQntFkK8Z54?autoplay=0&rel=0&hd=1');
	});

	it('should have an accessible description (title)', async () => {
		const { getByTestId } = render(YouTube, {
			props: {
				id: 'uQntFkK8Z54',
				title: 'The Future of Svelte'
			}
		});
		expect(getByTestId('iframe')).toHaveAccessibleDescription();
	});
});
