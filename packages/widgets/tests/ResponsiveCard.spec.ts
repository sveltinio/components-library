import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import { ResponsiveCard } from '../src/lib/';

describe('ResponsiveCard ', () => {
	it('should be in the document', async () => {
		const { container } = render(ResponsiveCard, {
			props: {}
		});
		expect(container).toBeInTheDocument();
	});
});
