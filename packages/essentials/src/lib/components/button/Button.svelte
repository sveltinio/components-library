<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { stylesObjToCSSVars } from '$lib/utils';

	export let label = 'Button Text';
	export let altText = '';
	export let type = 'default';
	export let size = 'base';
	export let border = 'solid';
	export let outlined = false;
	export let rounded = false;
	export let circular = false;
	export let fullSize = false;
	export let withFocusRing = false;

	export let href = '';
	export let prefetch = false;
	export let external = false;
	export let styles = {};

	const cssStyles = stylesObjToCSSVars(styles);
	const dispatch = createEventDispatcher();
	const clickDispatcher = (e: MouseEvent) => {
		dispatch('click', { eventDetails: e });
	};

	$: outlinedClass = outlined
		? `btn-outlined btn-outlined-${type} btn-outlined-${type}-text btn-outlined-${type}-bg`
		: `btn-${type} btn-${type}-text btn-${type}-bg`;
	$: fullSizeClass = fullSize ? `btn-full` : '';
	$: focusClass = withFocusRing ? `btn-focus btn-${type}-focus` : '';
	$: _altText = altText != '' ? altText : label;
</script>

{#if href != ''}
	<a
		{href}
		title={_altText}
		sveltekit:prefetch={prefetch ? true : null}
		target={external ? '_blank' : '_self'}
		aria-label={_altText}
		data-testid="btn"
		class="btn btn-{size} btn-border-{border} {outlinedClass} {focusClass} {fullSizeClass}"
		class:btn-rounded={rounded}
		class:btn-circular={circular}
		style={cssStyles}
		{...$$restProps}><slot>{label}</slot></a
	>
{:else}
	<button
		aria-label={_altText}
		data-testid="btn"
		class="btn btn-{size} btn-border-{border} {outlinedClass} {focusClass} {fullSizeClass}"
		class:btn-rounded={rounded}
		class:btn-circular={circular}
		style={cssStyles}
		{...$$restProps}
		on:click={clickDispatcher}
	>
		{#if $$slots.leftIcon}
			<span style="margin-right: 0.3rem;">
				<slot name="leftIcon" />
			</span>
		{/if}
		<slot>
			{label}
		</slot>
		{#if $$slots.rightIcon}
			<span style="margin-left: 0.3rem;">
				<slot name="rightIcon" />
			</span>
		{/if}
	</button>
{/if}

<style>
	a {
		text-decoration: none;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		padding: 0.5rem 1rem;
		cursor: pointer;
		font-weight: 500;
		border-width: 1px;
	}

	.btn-focus:focus {
		--_ring-width: var(--ring-width, 2px);
		--_ring-style: var(--ring-style, solid);
		--_ring-offset: var(--ring-offset, 2px);

		outline-width: var(--_ring-width);
		outline-style: var(--_ring-style);
		outline-offset: var(--_ring-offset);
	}

	.btn-outlined {
		background-color: white;
	}

	/** Shapes */
	.btn-rounded {
		border-radius: 0.375rem;
	}

	.btn-circular {
		padding: 4px;
		border-radius: 9999px;
	}

	/** Borders */
	.btn-border-solid {
		border-style: solid;
	}

	.btn-border-dashed {
		border-style: dashed;
	}

	.btn-border-dotted {
		border-style: dotted;
	}

	.btn-border-double {
		border-style: double;
	}

	.btn-border-hidden {
		border-style: hidden;
	}

	.btn-border-none {
		border-style: none;
	}

	/** Sizes */
	.btn-xs {
		font-size: 0.75rem;
		line-height: 1rem;
		letter-spacing: 0.025em;
	}

	.btn-sm {
		font-size: 0.875rem;
		line-height: 1rem;
		letter-spacing: 0.05em;
	}

	.btn-base {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}

	.btn-md {
		font-size: 1rem;
		line-height: 1.5rem;
	}

	.btn-lg {
		font-size: 1rem;
		line-height: 1.5rem;
	}

	.btn-full {
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}

	/** Types (variants) */

	/* Default */
	.btn-default,
	.btn-outlined-default {
		--_border-color: var(--border-color, rgb(228, 228, 231)); /* zync-200 */
		border-color: var(--_border-color);
		outline: none;
	}

	.btn-default:hover {
		--_bg-color-hover: var(--bg-color-hover, rgb(244, 244, 245)); /* zync-100 */
		background-color: var(--_bg-color-hover);
	}

	.btn-outlined-default:hover {
		--_outlined-bg-hover: var(--outlined-bg-hover, rgb(244, 244, 245)); /* zync-100 */
		background-color: var(--_outlined-bg-hover);
	}

	.btn-default-text,
	.btn-outlined-default-text {
		--_color: var(--color, rgb(82, 82, 91)); /* zync-600 */
		color: var(--_color);
	}

	.btn-default-bg {
		--_bg-color: var(--bg-color, rgb(250, 250, 250)); /* zync-50 */
		background-color: var(--_bg-color);
	}

	.btn-default-focus {
		--_ring-color: var(--ring-color, rgb(212, 212, 216)); /* zync-300 */
		outline-color: var(--_ring-color);
	}

	/** Primary */
	.btn-primary,
	.btn-outlined-primary {
		--_border-color: var(--border-color, rgb(34, 211, 238)); /* cyan-400 */
		border-color: var(--_border-color);
	}

	.btn-primary:hover {
		--_bg-color-hover: var(--bg-color-hover, rgb(8, 145, 178)); /* cyan-600 */
		background-color: var(--_bg-color-hover);
	}

	.btn-outlined-primary:hover {
		--_outlined-bg-hover: var(--outlined-bg-hover, rgb(207, 250, 254)); /* cyan-50 */
		background-color: var(--_outlined-bg-hover);
	}

	.btn-primary-text {
		--_color: var(--color, white);
		color: var(--_color);
	}

	.btn-primary-bg {
		--_bg-color: var(--bg-color, rgb(6, 182, 212)); /* cyan-500 */
		background-color: var(--_bg-color);
	}

	.btn-primary-focus {
		--_ring-color: var(--ring-color, rgb(103, 232, 249)); /* cyan-500 */
		outline-color: var(--_ring-color);
	}

	.btn-outlined-primary-text {
		--_color: var(--color, rgb(8, 145, 178)); /* cyan-600 */
		color: var(--_color);
	}

	/** Secondary */
	.btn-secondary,
	.btn-outlined-secondary {
		--_border-color: var(--border-color, rgb(129, 140, 248)); /* indigo-400 */
		border-color: var(--_border-color);
	}

	.btn-secondary:hover {
		--_bg-color-hover: var(--bg-color-hover, rgb(79, 70, 229)); /* indigo-600 */
		background-color: var(--_bg-color-hover);
	}

	.btn-outlined-secondary:hover {
		--_outlined-bg-hover: var(--outlined-bg-hover, rgb(238, 242, 255)); /* indigo-50 */
		background-color: var(--_outlined-bg-hover);
	}

	.btn-secondary-text {
		--_color: var(--color, white);
		color: var(--_color);
	}

	.btn-secondary-bg {
		--_bg-color: var(--bg-color, rgb(99, 102, 241)); /* indigo-500 */
		background-color: var(--_bg-color);
	}

	.btn-secondary-focus {
		--_ring-color: var(--ring-color, rgb(99, 102, 241)); /* indigo-600 */
		outline-color: var(--_ring-color);
	}

	.btn-outlined-secondary-text {
		--_color: var(--color, rgb(79, 70, 229)); /* indigo-600 */
		color: var(--_color);
	}

	/** Success */
	.btn-success,
	.btn-outlined-success {
		--_border-color: var(--border-color, rgb(74, 222, 128)); /* green-400 */
		border-color: var(--_border-color);
	}

	.btn-success:hover {
		--_bg-color-hover: var(--bg-color-hover, rgb(22, 163, 74)); /* green-600*/
		background-color: var(--_bg-color-hover);
	}

	.btn-outlined-success:hover {
		--_outlined-bg-hover: var(--outlined-bg-hover, rgb(240, 253, 244)); /* green-50*/
		background-color: var(--_outlined-bg-hover);
	}

	.btn-success-text {
		--_color: var(--color, white);
		color: var(--_color);
	}

	.btn-success-bg {
		--_bg-color: var(--bg-color, rgb(34, 197, 94)); /* green-500 */
		background-color: var(--_bg-color);
	}

	.btn-success-focus {
		--_ring-color: var(--ring-color, rgb(34, 197, 94)); /* green-500 */
		outline-color: var(--_ring-color);
	}

	.btn-outlined-success-text {
		--_color: var(--color, rgb(22, 163, 74)); /* green-600 */
		color: var(--_color);
	}

	/** Error */
	.btn-error,
	.btn-outlined-error {
		--_border-color: var(--border-color, rgb(248, 113, 113)); /* red-400 */
		border-color: var(--_border-color);
	}

	.btn-error:hover {
		--_bg-color-hover: var(--bg-color-hover, rgb(220, 38, 38)); /* red-600 */
		background-color: var(--_bg-color-hover);
	}

	.btn-outlined-error:hover {
		--_outlined-bg-hover: var(--outlined-bg-hover, rgb(254, 242, 242)); /* red-50 */
		background-color: var(--_outlined-bg-hover);
	}

	.btn-error-text {
		--_color: var(--color, white);
		color: var(--_color);
	}

	.btn-error-bg {
		--_bg-color: var(--bg-color, rgb(239, 68, 68)); /* red-500 */
		background-color: var(--_bg-color);
	}

	.btn-error-focus {
		--_ring-color: var(--ring-color, rgb(220, 38, 38)); /* red-600 */
		outline-color: var(--_ring-color);
	}

	.btn-outlined-error-text {
		--_color: var(--color, rgb(220, 38, 38)); /* red-600 */
		color: var(--_color);
	}

	/** Warning */
	.btn-warning,
	.btn-outlined-warning {
		--_border-color: var(--border-color, rgb(251, 146, 60)); /* orange-400 */
		border-color: var(--_border-color);
	}

	.btn-warning:hover {
		--_bg-color-hover: var(--bg-color-hover, rgb(234, 88, 12)); /* orange-600 */
		background-color: var(--_bg-color-hover);
	}

	.btn-outlined-warning:hover {
		--_outlined-bg-hover: var(--outlined-bg-hover, rgb(255, 247, 237)); /* orange-50 */
		background-color: var(--_outlined-bg-hover);
	}

	.btn-warning-text {
		--_color: var(--color, white);
		color: var(--_color);
	}

	.btn-warning-bg {
		--_bg-color: var(--bg-color, rgb(249, 115, 22)); /* orange-500 */
		background-color: var(--_bg-color);
	}

	.btn-warning-focus {
		--_ring-color: var(--ring-color, rgb(234, 88, 12)); /* orange-600 */
		outline-color: var(--_ring-color);
	}

	.btn-outlined-warning-text {
		--_color: var(--color, rgb(234, 88, 12)); /* orange-600 */
		color: var(--_color);
	}

	/** Info */
	.btn-info,
	.btn-outlined-info {
		--_border-color: var(--border-color, rgb(56, 189, 248)); /* sky-400 */
		border-color: var(--_border-color);
	}

	.btn-info:hover {
		--_bg-color-hover: var(--bg-color-hover, rgb(2, 132, 199)); /* sky-600 */
		background-color: var(--_bg-color-hover);
	}

	.btn-outlined-info:hover {
		--_outlined-bg-hover: var(--outlined-bg-hover, rgb(240, 249, 255)); /* sky-50 */
		background-color: var(--_outlined-bg-hover);
	}

	.btn-info-text {
		--_color: var(--color, white);
		color: var(--_color);
	}

	.btn-info-bg {
		--_bg-color: var(--bg-color, rgb(14, 165, 233)); /* sky-500 */
		background-color: var(--_bg-color);
	}

	.btn-info-focus {
		--_ring-color: var(--ring-color, rgb(2, 132, 199)); /* sky-600 */
		outline-color: var(--_ring-color);
	}

	.btn-outlined-info-text {
		--_color: var(--color, rgb(2, 132, 199)); /* sky-600 */
		color: var(--_color);
	}

	/** Light */
	.btn-light,
	.btn-outlined-light {
		border: none;
	}

	.btn-light:hover {
		--_bg-color-hover: var(--bg-color-hover, rgb(243, 244, 246)); /* gray-100 */
		background-color: var(--_bg-color-hover);
	}

	.btn-outlined-light:hover {
		--_outlined-bg-hover: var(--outlined-bg-hover, rgb(249, 250, 251)); /* gray-50 */
		background-color: var(--_outlined-bg-hover);
	}

	.btn-light-text {
		--_color: var(--color, rgb(55, 65, 81)); /* gray-700 */
		color: var(--_color);
	}

	.btn-light-bg {
		--_bg-color: var(--bg-color, white); /* gray-50 */
		background-color: var(--_bg-color);
	}

	.btn-light-focus {
		--_ring-color: var(--ring-color, rgb(209, 213, 219)); /* gray-300 */
		outline-color: var(--_ring-color);
	}

	.btn-outlined-light-text {
		--_color: var(--color, rgb(75, 85, 99)); /* gray-600 */
		color: var(--_color);
	}

	/** Dark */
	.btn-dark,
	.btn-outlined-dark {
		--_border-color: var(--border-color, rgb(161, 161, 170)); /* zync-400 */
		border-color: var(--_border-color);
	}

	.btn-dark:hover {
		--_bg-color-hover: var(--bg-color-hover, rgb(39, 39, 42)); /* zync-800 */
		background-color: var(--_bg-color-hover);
	}

	.btn-outlined-dark:hover {
		--_outlined-bg-hover: var(--outlined-bg-hover, rgb(250, 250, 250)); /* zync-50 */
		background-color: var(--_outlined-bg-hover);
	}

	.btn-dark-text {
		--_color: var(--color, white);
		color: var(--_color);
	}

	.btn-dark-bg {
		--_bg-color: var(--bg-color, rgb(63, 63, 70)); /* zync-700 */
		background-color: var(--_bg-color);
	}

	.btn-dark-focus {
		--_ring-color: var(--ring-color, rgb(63, 63, 70)); /* zync-700 */
		outline-color: var(--_ring-color);
	}

	.btn-outlined-dark-text {
		--_color: var(--color, rgb(39, 39, 42)); /* zync-800 */
		color: var(--_color);
	}
</style>
