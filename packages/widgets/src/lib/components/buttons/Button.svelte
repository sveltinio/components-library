<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let label: string;
	export let altText = '';
	export let size = 'md';
	export let type = 'default';
	export let shape = 'default';
	export let outlined = false;
	export let rounded = true;
	export let fullWidth = false;

	export let href = '';
	export let prefetch = false;

	const dispatch = createEventDispatcher();
	const clickDispatcher = (e: MouseEvent) => {
		dispatch('click', { eventDetails: e });
	};

	$: outlinedClass = outlined ? `btn-outlined btn-outlined-${type}` : `btn-${type}`;
	$: fullWidthClass = fullWidth ? `btn-full` : '';
	$: _altText = altText != '' ? altText : label;
</script>

{#if href != ''}
	<a
		{href}
		title={_altText}
		sveltekit:prefetch={prefetch ? true : null}
		aria-label={_altText}
		class="btn btn-{shape} btn-{size} {outlinedClass} {fullWidthClass}"
		class:btn-rounded={rounded}>{label}</a
	>
{:else}
	<button
		aria-label=""
		class="btn btn-{shape} btn-{size} {outlinedClass}"
		class:btn-rounded={rounded}
		on:click={clickDispatcher}
	>
		<slot>
			{label}
		</slot>
	</button>
{/if}

<style>
	:root {
		--_base: var(--text, white);
		--_base-dark: var(--text-dark, rgb(30 41 59)); /* slate-800 */

		--_primary: var(--primary, rgb(6 182 212)); /* cyan-500 */
		--_primary-hover: var(--primary-hover, rgb(8 145 178)); /* cyan-600 */
		--_primary-outlined-hover: var(--primary-outlined-hover, rgb(236 254 255)); /* cyan-50 */

		--_secondary: var(--secondary, rgb(71 85 105)); /* slate-600 */
		--_secondary-hover: var(--secondary-hover, rgb(51 65 85)); /* slate-700 */
		--_secondary-outlined-hover: var(
			--secondary-outlined-hover,
			rgb(248 250 252)
		); /* slate-50 */

		--_success: var(--success, rgb(22 163 74)); /* green-600 */
		--_success-hover: var(--success-hover, rgb(21 128 61) ;); /* green-700*/
		--_success-outlined-hover: var(--success-outlined-hover, rgb(240 253 244)); /* green-50*/

		--_error: var(--error, rgb(239 68 68)); /* red-500 */
		--_error-hover: var(--error-hover, rgb(220 38 38)); /* red-600 */
		--_error-outlined-hover: var(--error-outlined-hover, rgb(254 242 242)); /* red-50 */

		--_warning: var(--warning, rgb(249 115 22)); /* orange-500 */
		--_warning-hover: var(--warning-hover, rgb(240, 173, 78)); /* orange-600 */
		--_warning-outlined-hover: var(--warning-outlined-hover, rgb(255 247 237)); /* orange-50 */

		--_info: var(--info, rgb(14 165 233)); /* sky-500 */
		--_info-hover: var(--info-hover, rgb(2 132 199)); /* sky-600 */
		--_info-outlined-hover: var(--info-outlined-hover, rgb(240 249 255)); /* sky-50 */

		--_light: var(--light, color: rgb(249 250 251)); /* gray-50 */
		--_light-hover: var(--light-hover, rgb(243 244 246)); /* gray-100 */
		--_light-outlined-hover: var(--light-outlined-hover, rgb(249 250 251)); /* gray-50 */

		--_dark: var(--dark, rgb(63 63 70)); /* zync-700 */
		--_dark-hover: var(--dark-hover, rgb(39 39 42)); /* zync-800 */
		--_dark-outlined-hover: var(--dark-outlined-hover, rgb(250 250 250)); /* zync-50 */
	}

	a {
		text-decoration: none;
	}

	.btn {
		cursor: pointer;
		font-weight: 500;
	}

	.btn-rounded {
		border-radius: 0.375rem;
	}

	.btn-circle-full {
		border-radius: 50px;
	}

	.btn-xs {
		font-size: 0.75rem;
		line-height: 1rem;
		letter-spacing: 0.025em;
		padding: 0.375rem 0.625rem;
	}

	.btn-sm {
		font-size: 0.875rem;
		line-height: 1rem;
		letter-spacing: 0.05em;
		padding: 0.5rem 0.75rem;
	}

	.btn-base {
		font-size: 0.875rem;
		line-height: 1.25rem;
		padding: 0.5rem 1rem;
	}

	.btn-md {
		font-size: 1rem;
		line-height: 1.5rem;
		padding: 0.5rem 1rem;
	}

	.btl-lg {
		font-size: 1rem;
		line-height: 1.5rem;
		padding: 0.75rem 1.5rem;
	}

	.btn-full {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.btn-primary {
		color: var(--_base);
		background: var(--_primary);
		border: 1px solid var(--_primary);
	}

	.btn-primary:hover {
		background-color: var(--_primary-hover);
	}

	.btn-outlined-primary {
		color: var(--_primary);
		border: 1px solid var(--_primary);
	}

	.btn-outlined-primary:hover {
		background-color: var(--_primary-outlined-hover);
	}

	.btn-success {
		color: var(--_base);
		background: var(--_success);
		border: 1px solid var(--_success);
	}

	.btn-success:hover {
		background-color: var(--_success-hover);
	}

	.btn-outlined-success {
		color: var(--_success);
		border: 1px solid var(--_success);
	}

	.btn-outlined-success:hover {
		background-color: var(--_success-outlined-hover);
	}

	.btn-secondary {
		color: var(--_base);
		border: var(--_secondary);
		background-color: var(--_secondary);
	}

	.btn-secondary:hover {
		background-color: var(--_secondary-hover);
	}

	.btn-outlined-secondary {
		color: var(--_secondary);
		border: 1px var(--_secondary) solid;
	}

	.btn-outlined-secondary:hover {
		background-color: var(--_secondary-outlined-hover);
	}

	.btn-error {
		color: var(--_base);
		background: var(--_error);
		border: var(--_error);
	}

	.btn-error:hover {
		background-color: var(--_error-hover);
	}

	.btn-outlined-error {
		color: var(--_error);
		border: 1px var(--_error) solid;
	}

	.btn-outlined-error:hover {
		background-color: var(--_error-outlined-hover);
	}

	.btn-warning {
		color: var(--_base);
		background: var(--_warning);
		border: var(--_warning);
	}

	.btn-warning:hover {
		background-color: var(--_warning-hover);
	}

	.btn-outlined-warning {
		color: var(--_warning);
		border: 1px var(--_warning) solid;
	}

	.btn-outlined-warning:hover {
		background-color: var(--_warning-outlined-hover);
	}

	.btn-info {
		color: var(--_base);
		background: var(--_info);
		border: var(--_info);
	}

	.btn-info:hover {
		background-color: var(--_info-hover);
	}

	.btn-outlined-info {
		color: var(--_info);
		border: 1px var(--_info) solid;
	}

	.btn-outlined-info:hover {
		background-color: var(--_info-outlined-hover);
	}

	.btn-light {
		color: var(--_dark);
		background: var(--_light);
		border: var(--_light);
	}

	.btn-light:hover {
		background-color: var(--_light-hover);
	}

	.btn-outlined-light {
		color: var(--_light);
		border: 1px solid var(--_light);
	}

	.btn-outlined-light:hover {
		background-color: var(--_light-outlined-hover);
	}

	.btn-dark {
		color: var(--_base);
		background: var(--_dark);
		border: var(--_dark);
	}

	.btn-dark:hover {
		background-color: var(--_dark-hover);
	}

	.btn-outlined-dark {
		color: var(--_dark);
		border: 1px var(--_dark) solid;
	}

	.btn-outlined-dark:hover {
		background-color: var(--_dark-outlined-hover);
	}

	.btn-link {
		background: transparent;
		border: transparent;
		color: var(--_info);
	}

	.btn-link:hover {
		text-decoration: underline;
	}
</style>
