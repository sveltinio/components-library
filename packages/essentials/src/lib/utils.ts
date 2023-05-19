import { contains } from '@sveltinio/ts-utils/collections';
import { isNullish } from '@sveltinio/ts-utils/is';

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
 * Adds a CSS class to an HTML element.
 *
 * @param item - This is the HTML element to which the CSS class will be
 * added.
 * @param className - A string parameter that represents the name of the CSS
 * class that needs to be added to the specified HTMLElement.
 */
export function addCssClass(item: HTMLElement, className: string) {
	item.classList.add(className);
}

/**
 * Removes a specified CSS class from a given HTML element.
 *
 * @param item  - This is the HTML element to which the CSS class needs to
 * be removed.
 * @param className - A string that represents the name of the CSS
 * class that needs to be removed from the specified HTMLElement.
 */
export function removeCssClass(item: HTMLElement, className: string) {
	item.classList.remove(className);
}

/**
 * Resets the focus on a list of HTML elements by removing the 'focus' CSS class.
 *
 * @param items - An array of HTMLElements that need to have their focus reset (i.e.
 * have the CSS class 'focus' removed).
 */
export function resetFocusClass(items: HTMLElement[]) {
	items.forEach((item) => removeCssClass(item, 'focus'));
}
