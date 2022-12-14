<script lang="ts">
	import './styles.css';
	import { stylesObjToCSSVars } from '../../utils.js';

	export let title: string;
	export let headline: string;
	export let lineClamp = '4';
	export let href = '';

	let themeClassName = '';
	export { themeClassName as theme };

	export let styles = {};
	const cssStyles = stylesObjToCSSVars(styles);
</script>

<div
	class="sw__responsivecard sw__responsivecard__main {themeClassName}"
	style={cssStyles}
	data-testid="responsivecard-main"
>
	<div class="card">
		{#if $$slots.cardImage}
			<slot name="cardImage" />
		{/if}

		<div class="card__body">
			{#if $$slots.cardBadge}
				<slot name="cardBadge" />
			{/if}

			{#if $$slots.cardAction}
				<h2>
					{title}
				</h2>
			{:else}
				<a {href}
					><h2>
						{title}
					</h2></a
				>
			{/if}
			<p style:-webkit-line-clamp={lineClamp}>
				{headline}
			</p>

			<div class="card__footer">
				<slot name="cardInfo" />

				<slot name="cardAction" />
			</div>
		</div>
	</div>
</div>
