import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Card from '../components/Card.svelte';
import { contentItem } from './__fixtures__/data.test.js';

describe('Card', () => {
	it('should be in the document', async () => {
		const { container } = render(Card, {
			props: {
				item: contentItem
			}
		});
		expect(container).toBeInTheDocument();
	});

	it('should have a valid href to a resource content page', async () => {
		const { getByTestId } = render(Card, {
			props: {
				item: contentItem
			}
		});
		const link = getByTestId('card-link');
		expect(link).toHaveAttribute('href', '/posts/welcome');
	});

	it('should have the link to the next item with an accessible name (alt)', async () => {
		const { getByTestId } = render(Card, {
			props: {
				item: contentItem
			}
		});

		const link = getByTestId('card-link');
		expect(link).toHaveAccessibleName();
	});

	it('should have the a link to the next item with an accessible description (title)', async () => {
		const { getByTestId } = render(Card, {
			props: {
				item: contentItem
			}
		});

		const link = getByTestId('card-link');
		expect(link).toHaveAccessibleDescription();
	});

	it('should be have title defined', async () => {
		const { getByTestId } = render(Card, {
			props: {
				item: contentItem
			}
		});
		expect(getByTestId('card-title').innerHTML).toBe('Card Title');
	});

	it('should be have headline text defined', async () => {
		const { getByTestId } = render(Card, {
			props: {
				item: contentItem
			}
		});
		expect(getByTestId('card-text').innerHTML).toBe(
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
		);
	});
});
