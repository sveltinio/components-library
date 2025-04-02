import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import ButtonGroup from '../src/lib/components/button-group/index.js';

describe('ButtonGroup ', () => {
	it('should be in the document', async () => {
		const { container } = render(ButtonGroup, {
			props: {}
		});
		expect(container).toBeInTheDocument();
	});
});
