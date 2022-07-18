import 'vitest';
// import { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';

declare global {
	export namespace Vi {
		export interface Assertion {
			toBeInTheDocument(): void;
			toHaveAttribute(attr: string, txt?: string): void;
			toHaveAccessibleName(txt?: string): void;
			toHaveAccessibleDescription(): void;
			stringContaining(txt: string): void;
			toContainHTML(elem: string): void;
			toContainElement(elem: string | HTMLElement): void;
			toHaveClass(...args: string[]): void;
			toHaveTextContent(txt: string): void;
			toBeEmptyDOMElement(): void;
			toHaveStyle(style: string): void;
		}
	}

	// interface Assertion<T = any> extends TestingLibraryMatchers<T, void> {}
}
