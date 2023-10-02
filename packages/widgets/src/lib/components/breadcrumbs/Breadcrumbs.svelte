<script lang="ts">
	import '../../styles/base.css';
	import '../../styles/components/breadcrumbs/variables.css';
	import '../../styles/components/breadcrumbs/styles.css';
	import { retrieveCssClassNames } from '$lib/utils';
	import { isEmpty } from '@sveltinio/ts-utils/is';
	import { capitalize } from '@sveltinio/ts-utils/strings';
	import { mapToCssVars } from '@sveltinio/ts-utils/objects';

	export let url: string;
	export let homeAsIcon = true;

	const _url = new URL(url);
	const baseURL = _url.origin;
	const segments = _url.pathname.split('/').filter((t) => t !== '');

	const current = segments.pop() || '';
	const parents = segments.map((segment, segmentIndex) => {
		const previousParts = segments.slice(0, segmentIndex);
		return {
			label: segment,
			href:
				previousParts?.length > 0 ? `${previousParts?.join('/')}/${segment}` : `${segment}`
		};
	});

	export let styles = {};
	const cssStyles = mapToCssVars(styles);
	if (cssStyles.isErr()) {
		throw new Error(cssStyles.error.message);
	}

	// avoid hacking reserverd css classes
	const reservedNames = ['sn-w-colors', 'sn-w-c-breadcrumbs-vars', 'sn-w-c-breadcrumbs'];
	const cssClasses = retrieveCssClassNames($$props.class, reservedNames);
</script>

{#if !isEmpty(baseURL)}
	<nav
		class="sn-w-colors sn-w-c-breadcrumbs-vars sn-w-c-breadcrumbs {cssClasses}"
		style={cssStyles.value}
		aria-label="Breadcrumb"
		data-testid="breadcrumbs_main"
	>
		<ol>
			<li>
				<a href={baseURL} aria-label="Home, top level page">
					{#if homeAsIcon}
						<slot name="homeIcon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1.25rem"
								height="1.25rem"
								stroke-width="1.5"
								viewBox="0 0 24 24"
								fill="none"
								class="icon"
								aria-hidden="true"
							>
								<path
									d="M3 9.5L12 4L21 9.5"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M19 13V19.4C19 19.7314 18.7314 20 18.4 20H5.6C5.26863 20 5 19.7314 5 19.4V13"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</slot>
						<span class="sr--only">Home</span>
					{:else}
						Home
					{/if}
				</a>
			</li>

			{#each parents as parent}
				{@const parentLabel = capitalize(parent?.label).unwrapOr('')}
				<li>
					<a
						href="{baseURL}/{parent.href}"
						aria-label={parentLabel}
						data-testid="link_to_parent"
					>
						{parentLabel}
					</a>
				</li>
			{/each}

			{#if !isEmpty(current)}
				{@const currentLabel = capitalize(current).unwrapOr('')}
				<li aria-current="page" aria-label={currentLabel} data-testid="current_page">
					{currentLabel}
				</li>
			{/if}
		</ol>
	</nav>
{/if}
