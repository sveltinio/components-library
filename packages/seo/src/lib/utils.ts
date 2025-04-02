import type { Thing, WithContext } from 'schema-dts';
import type { SEOContact, SEOPerson } from './types.js';

export type Schema = Thing | WithContext<Thing>;

export function serializeJSONLdSchema(thing: Schema, dataTestId: string) {
	return `<script type="application/ld+json" data-testid="${dataTestId}">${JSON.stringify(
		thing,
		null,
		2
	)}</script>`;
}

export const isSEOPerson = (contact: SEOContact): contact is SEOPerson =>
	contact.jobTitle != undefined && contact.jobTitle != '';

export function toISODateString(date: string | Date | undefined | null): string | undefined {
	if (!date) return undefined;
	return date instanceof Date ? date.toISOString() : date;
}
