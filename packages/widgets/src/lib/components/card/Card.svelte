<script lang="ts">
	import { stylesObjToCSSVars } from '../../utils.js';
	export let styles = {};

	const cssStyles = stylesObjToCSSVars(styles);
</script>

<div class="card" style={cssStyles} data-testid="card-container">
	<slot />
</div>

<style>
	.card {
		--_max-width: var(--max-width, 24rem);
		--_border-color: var(--border-color, rgb(226, 232, 240)); /* slate-200 */
		--_border-style: var(--border-style, solid);
		--_border-width: var(--border-width, 1px);
		--_border-radius: var(--border-radius, 0.75rem);
		/* title */
		--_title-color: var(--title-color, rgb(71, 85, 105)); /* slate-600 */
		--_title-font-size: var(--title-font-size, 1.5rem);
		--_title-font-weight: var(--title-font-weight, 700);
		--_title-line-height: var(--title-line-height, 2rem);
		--_title-mt: var(--title-mt, 1.25rem);
		--_title-mr: var(--title-mr, 1.75rem);
		--_title-mb: var(--title-mb, 0);
		--_title-ml: var(--title-ml, 1.75rem);
		/* content */
		--_content-width: var(--content-width, 100%);
		--_content-height: var(--content-height, auto);
		--_content-color: var(--content-color, rgb(71, 85, 105)); /* slate-600 */
		--_content-font-size: var(--content-font-size, 1rem);
		--_content-line-height: var(--content-line-height, 1.75rem);
		--_content-bg-color: var(--content-bg-color, rgb(248, 250, 252)); /* slate-50 */
		--_content-pt: var(--content-pt, 1.75rem);
		--_content-pr: var(--content-pr, 1.75rem);
		--_content-pb: var(--content-pb, 0);
		--_content-pl: var(--content-pl, 1.75rem);
		--_content-mt: var(--content-mt, 0);
		--_content-mr: var(--content-mr, 0);
		--_content-mb: var(--content-mb, 0.75rem);
		--_content-ml: var(--content-ml, 0);
		/* btn-wrapper */
		--_btn-wrapper-width: var(--btn-wrapper-width, 100%);
		--_btn-wrapper-height: var(--btn-wrapper-height, auto);
		--_btn-wrapper-pt: var(--btn-wrapper-pt, 0.5rem);
		--_btn-wrapper-pr: var(--btn-wrapper-pr, 1.75rem);
		--_btn-wrapper-pb: var(--btn-wrapper-pb, 1.25rem);
		--_btn-wrapper-pl: var(--btn-wrapper-pl, 1.75rem);
		--_btn-wrapper-mt: var(--btn-wrapper-mt, 0);
		--_btn-wrapper-mr: var(--btn-wrapper-mr, 0);
		--_btn-wrapper-mb: var(--btn-wrapper-mb, 6px);
		--_btn-wrapper-ml: var(--btn-wrapper-ml, 0);
		/* btn */
		--_btn-cursor: var(--btn-cursor, pointer);
		--_btn-color: var(--btn-color, white);
		--_btn-font-size: var(--btn-font-size, 0.875rem);
		--_btn-font-weight: var(--btn-font-weight, 500);
		--_btn-line-height: var(--btn-line-height, 1rem);
		--_btn-letter-spacing: var(--btn-letter-spacing, 0.05em);
		--_btn-text-align: var(--btn-text-align, center);
		--_btn-text-decoration: var(--btn-text-decoration, none);
		--_btn-bg-color: var(--btn-bg-color, rgb(71 85 105)); /* slate-600 */
		--_btn-pt: var(--btn-pt, 0.5rem);
		--_btn-pr: var(--btn-pr, 0.75rem);
		--_btn-pb: var(--btn-pb, 0.5rem);
		--_btn-pl: var(--btn-pl, 0.75rem);
		--_btn-border-color: var(--btn-border-color, rgb(100, 116, 139)); /* slate-500 */
		--_btn-border-style: var(--btn-border-style, solid);
		--_btn-border-width: var(--btn-border-width, 1px);
		--_btn-border-radius: var(--btn-border-radius, 0.375rem);
		/* badge */
		--_badge-color: var(--badger-color, rgb(51, 65, 85)); /* slate-700 */
		--_badge-bg-color: var(--badge-bg-color, rgb(248, 250, 252)); /* slate-50 */
		--_badge-font-size: var(--badge-font-size, 0.875rem); /* 14px */
		--_badge-font-weight: var(--badge-font-weight, 600); /* semibold */
		--_badge-line-height: var(--badge-line-height, 1.25rem); /* 20px */
		--_badge-text-transform: var(--badge-text-transform, uppercase);
		--_badge-border-radius: var(--badge-border-radius, 9999px);
		--_badge-pt: var(--badge-pt, 0.5rem);
		--_badge-pr: var(--badge-pr, 0.1rem);
		--_badge-pb: var(--badge-pb, 0.5rem);
		--_badge-pl: var(--badge-pl, 0.1rem);
		--_badge-mt: var(--badge-mt, 1.25rem);
		--_badge-mr: var(--badge-mr, 0);
		--_badge-mb: var(--badge-mb, 0);
		--_badge-ml: var(--badge-ml, 1.85rem);
		--_badge-absolute-t: var(--badge-absolute-t, 50%);
		--_badge-absolute-r: var(--badge-absolute-r, 10%);
	}
	.card {
		position: relative;
		max-width: var(--_max-width);
		overflow: hidden;
		border-radius: var(--_border-radius);
		border-style: var(--_border-style);
		border-width: var(--_border-width);
		border-color: var(--_border-color);
		box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0px 0 1px rgb(10 10 10 / 2%);
	}
</style>
