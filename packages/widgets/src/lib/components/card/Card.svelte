<script lang="ts">
	import './styles.css';
	import { stylesObjToCSSVars } from '../../utils.js';
	export let styles = {};

	const cssStyles = stylesObjToCSSVars(styles);
</script>

<div class="sw__card sw__card__container" style={cssStyles} data-testid="card-container">
	<slot />
</div>
