import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { isEmptyObject, isPropValueSet } from '../utils';

describe('isEmptyObject ', () => {
	it('should be an empty object', async () => {
		const obj: Record<string, string> = {};
		expect(isEmptyObject<Record<string, string>>(obj)).toBe(true);
	});

	it('should be a non empty object', async () => {
		const obj: Record<string, string> = {
			user: 'userone',
			slug: 'slugone'
		};
		expect(isEmptyObject<Record<string, string>>(obj)).toBe(false);
	});
});

describe('isPropValueSet', () => {
	it('should be true', async () => {
		const obj: Record<string, boolean | string | number> = {
			preview: false,
			borderColor: '',
			height: 0
		};

		Object.values(obj).map((val) => {
			switch (typeof val) {
				case 'boolean':
					expect(isPropValueSet(val)).toBe(true);
					break;
				case 'string':
					expect(isPropValueSet(val)).toBe(false);
					break;
				case 'number':
					expect(isPropValueSet(val)).toBe(false);
					break;
				default:
					break;
			}
		});
	});
});
