<script lang="ts">
	import './card-styles.css';
	import { stylesObjToCSSVars } from '../../utils.js';
	export let styles = {};

	const cssStyles = stylesObjToCSSVars(styles);
</script>

<div class="card" style={cssStyles} data-testid="card-container">
	<slot />
</div>
