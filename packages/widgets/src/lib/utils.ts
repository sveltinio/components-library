import { isNullish } from '@sveltinio/ts-utils/is';
import type { ResourceContent } from './types';
import { contains } from '@sveltinio/ts-utils/collections';

/**
 * Retrieves the CSS class names from a value, excluding any reserved names.
 * If the value is nullish, an empty string is returned.
 *
 * @param value - The value to retrieve CSS class names from.
 * @param reservedNames - An array of reserved class names to exclude.
 * @returns The retrieved CSS class names or an empty string if reserved names are found.
 */
export function retrieveCssClassNames(value: any, reservedNames: string[]): string {
	if (isNullish(value)) {
		return '';
	}

	const cssClasses = String(value).split(' ');

	if (cssClasses.some((cssClass) => contains(reservedNames, cssClass))) {
		return '';
	}

	return value;
}

/**
 * The function checks if a given string is a single character.
 * @param txt - A string to be checked if it is a single character or not.
 * @returns A boolean value is being returned.
 */
export function isChar(txt: string): boolean {
	const charsRegex = /\S/;
	return txt.length === 1 && charsRegex.test(txt);
}

/**
 * Takes an HTML element and returns a string ID derived from its aria-label attribute.
 *
 * @param node - a DOM element that has an aria-label attribute. The
 * function extracts the ID from this attribute.
 * @returns a string, which is either the modified `id` value derived from the `aria-label`
 * attribute of the given `node` element, or an empty string if the `aria-label` attribute is not
 * present or has no value.
 */
export function getIdFromAriaLabel(node: HTMLElement): string {
	let id = node.getAttribute('aria-label');
	if (id) {
		id = id.trim().toLowerCase().replace(/\s/g, '-').replace('/', '-');
		return id;
	}
	return '';
}

export function getMenuId(node: HTMLElement): string {
	let id = '';
	const role = node.getAttribute('role');

	if (role) {
		id = role + '-' + getIdFromAriaLabel(node);
	}

	return id;
}

/**
 * Adds specified CSS classes from a given HTML element.
 *
 * @param item - the HTML element to remove CSS classes from
 * @param names - An array of strings representing the CSS class names that should be added from
 * the `classList` property of the `item` parameter.
 */
export function addCssClasses(item: HTMLElement | null, names: string[]) {
	if (!isNullish(item)) {
		names.map((n) => item.classList.add(n));
	}
}

/**
 * Removes specified CSS classes from a given HTML element.
 *
 * @param item - the HTML element to remove CSS classes from
 * @param names - An array of strings representing the CSS class names that should be removed from
 * the `classList` property of the `item` parameter.
 */
export function removeCssClasses(item: HTMLElement | null, names: string[]) {
	if (!isNullish(item)) {
		names.map((n) => item.classList.remove(n));
	}
}

/**
 * Resets the focus on a list of HTML elements by removing the 'focus' CSS class.
 *
 * @param items - An array of HTMLElements that need to have their focus reset (i.e.
 * have the CSS class 'focus' removed).
 */
export function resetFocusClass(items: HTMLElement[] | null) {
	if (!isNullish(items)) items.forEach((item) => removeCssClasses(item, ['focus']));
}
/**
 *! The following are used as utilities for the demo pages
 */

export function getURL(base: string, item: ResourceContent): string {
	return `${base}/${item.resource}/${item.metadata.slug}`;
}

export function getMetadataURL(
	base: string,
	resourceName: string,
	mdName: string,
	mdValue: string
): string {
	return `${base}/${resourceName}/${mdName}/${mdValue}`;
}
