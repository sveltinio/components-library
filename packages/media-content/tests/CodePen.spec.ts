import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import { CodePen } from '../src/lib/index.js';
import { codepenSettings, codepenSampleOne } from '../src/data/sample.js';
import { getScriptsByTestId } from './test-utils.js';

describe('CodePen script loader', () => {
	it('should have a script tag with id and src set', async () => {
		const { container } = render(CodePen, {
			props: {
				user: codepenSampleOne.user,
				id: codepenSampleOne.id
			}
		});
		expect(container).toBeInTheDocument();

		const scriptTag = getScriptsByTestId('codepen_lib_script');

		expect(scriptTag?.getAttribute('id')).toBe('codepen-lib-script');
		expect(scriptTag?.getAttribute('src')).toBe(
			'https://cpwebassets.codepen.io/assets/embed/ei.js'
		);
		expect(scriptTag?.async).toBe(true);
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
		const wrapper = getByTestId('codepen_wrapper');
		expect(wrapper).not.toBeEmptyDOMElement();

		const pWrapper = getByTestId('codepen_p_wrapper');
		expect(pWrapper).toHaveClass('codepen');
		expect(pWrapper).toHaveAttribute('data-default-tab', 'html,result');
		expect(pWrapper).toHaveAttribute('data-user', codepenSampleOne.user);
		expect(pWrapper).toHaveAttribute('data-height', '400');
		expect(pWrapper).not.toBeEmptyDOMElement();
		expect(pWrapper).toHaveStyle('height: 400px');
	});
});

describe('CodePen options', () => {
	it('should have defined props', async () => {
		const { getByTestId } = render(CodePen, {
			props: {
				user: codepenSampleOne.user,
				id: codepenSampleOne.id,
				settings: codepenSettings
			}
		});
		const wrapper = getByTestId('codepen_p_wrapper');
		expect(wrapper).toHaveAttribute('data-default-tab', 'result');
		expect(wrapper).toHaveAttribute('data-border-color', '#325E83');
		expect(wrapper).toHaveAttribute('data-tab-bar-color', '#074f66');
		expect(wrapper).toHaveAttribute('data-active-tab-color', '#007482');
	});
});
