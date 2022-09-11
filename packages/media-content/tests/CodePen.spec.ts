import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import { CodePen } from '../src/lib/index.js';
import { codepenSettings, codepenSampleOne } from '../src/data/sample.js';
import { getFullScriptTagById, getScriptSrcById, getScriptTagById } from './test-utils.js';

describe('CodePen Container', () => {
	it('should be in the document', async () => {
		const { container } = render(CodePen, {
			props: {
				user: codepenSampleOne.user,
				id: codepenSampleOne.id
			}
		});
		expect(container).toBeInTheDocument();
	});
});

describe('CodePen script loader', () => {
	it('should have a script tag with id codepen-lib-script', async () => {
		expect(getScriptTagById('codepen-lib-script')).toBe(true);
	});

	it('should have a script src to the codepen lib', async () => {
		expect(getScriptSrcById('codepen-lib-script')).toBe(
			'https://cpwebassets.codepen.io/assets/embed/ei.js'
		);
	});

	it('should have a script with async true', async () => {
		const scriptTag = getFullScriptTagById('codepen-lib-script');
		expect(scriptTag.async).toBe(true);
	});
});

describe('CodePen html wrapper element DOM', () => {
	it('should have a defined props', async () => {
		const { getByTestId } = render(CodePen, {
			props: {
				user: codepenSampleOne.user,
				id: codepenSampleOne.id
			}
		});
		const wrapper = getByTestId('wrapper');
		expect(wrapper).not.toBeEmptyDOMElement();
	});
});

describe('CodePen html wrapper element props', () => {
	it('should have a defined props', async () => {
		const { getByTestId } = render(CodePen, {
			props: {
				user: codepenSampleOne.user,
				id: codepenSampleOne.id
			}
		});
		const wrapper = getByTestId('p-wrapper');
		expect(wrapper).toHaveClass('codepen');
		expect(wrapper).toHaveAttribute('data-default-tab', 'html,result');
		expect(wrapper).toHaveAttribute('data-user', codepenSampleOne.user);
		expect(wrapper).toHaveAttribute('data-height', '400');
		expect(wrapper).not.toBeEmptyDOMElement();
	});
});

describe('CodePen html wrapper element styles', () => {
	it('should have a defined props', async () => {
		const { getByTestId } = render(CodePen, {
			props: {
				user: codepenSampleOne.user,
				id: codepenSampleOne.id
			}
		});
		const wrapper = getByTestId('p-wrapper');
		expect(wrapper).toHaveStyle('height: 400px');
	});
});

describe('CodePen options', () => {
	it('should have a defined props', async () => {
		const { getByTestId } = render(CodePen, {
			props: {
				user: codepenSampleOne.user,
				id: codepenSampleOne.id,
				settings: codepenSettings
			}
		});
		const wrapper = getByTestId('p-wrapper');
		expect(wrapper).toHaveAttribute('data-default-tab', 'result');
		expect(wrapper).toHaveAttribute('data-border-color', '#325E83');
		expect(wrapper).toHaveAttribute('data-tab-bar-color', '#074f66');
		expect(wrapper).toHaveAttribute('data-active-tab-color', '#007482');
	});
});
