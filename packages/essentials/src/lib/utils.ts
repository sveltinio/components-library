import { contains } from '@sveltinio/ts-utils/collections';
import { isNullish } from '@sveltinio/ts-utils/is';

export function retrieveCssClassNames(value: any, reservedNames: string[]): string {
	if (isNullish(value)) return '';
	const classesArray = String(value).split(' ');

	let result = '';
	classesArray.some((v) => contains(reservedNames, v)) ? (result = '') : (result = value);

	return result;
}
