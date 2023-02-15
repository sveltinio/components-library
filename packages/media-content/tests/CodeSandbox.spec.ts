import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import { CodeSandbox } from '../src/lib/index.js';
import { codeSandboxSampleID } from '../src/data/sample.js';

describe('CodeSandbox', () => {
	it('should be in the document', async () => {
		const { container } = render(CodeSandbox, {
			props: {
				id: { codeSandboxSampleID }
			}
		});
		expect(container).toBeInTheDocument();
	});
});

describe('CodeSandbox - wrapper', () => {
	it('should contain iframe', async () => {
		const { getByTestId } = render(CodeSandbox, {
			props: {
				id: { codeSandboxSampleID }
			}
		});
		expect(getByTestId('codesandbox_wrapper')).toContainElement(getByTestId('codesandbox_iframe'));
	});
});

describe('CodeSandbox - iframe', () => {
	it('should have a defined const url', async () => {
		const { getByTestId } = render(CodeSandbox, {
			props: {
				id: { codeSandboxSampleID }
			}
		});
		const iframe = getByTestId('codesandbox_iframe');
		expect(iframe['src']).toBeDefined();
	});

	it('should have a valid url to a CodeSandbox', async () => {
		const { getByTestId } = render(CodeSandbox, {
			props: {
				id: { codeSandboxSampleID }
			}
		});
		const iframe = getByTestId('codesandbox_iframe');
		expect(iframe['src']).toContain('https://codesandbox.io/embed/');
	});

	it('should have an accessible description (title)', async () => {
		const { getByTestId } = render(CodeSandbox, {
			props: {
				id: { codeSandboxSampleID }
			}
		});
		expect(getByTestId('codesandbox_iframe')).toHaveAccessibleDescription();
	});
});
