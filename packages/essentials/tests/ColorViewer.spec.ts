import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import { ColorViewer } from '../src/lib/components/color/index.js';

describe('ColorViewer ', () => {
	it('should be in the document', async () => {
		const { container } = render(ColorViewer, {
			props: {
				value: '#ced4da'
			}
		});
		expect(container).toBeInTheDocument();
	});
});
