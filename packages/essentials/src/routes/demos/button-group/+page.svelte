<script lang="ts">
	import { ButtonGroup, ButtonGroupItem } from '$lib/index.js';

	const myOwnStyles = {
		'bg-color': '#fca5a5',
		color: 'red'
	};
</script>

<section class="main">
	<h1><tt>@essentials/ButtonGroup</tt></h1>

	<h2><tt>ButtonGroup</tt></h2>

	<div id="buttons-group" class="container">
		<ButtonGroup>
			<ButtonGroupItem id="1">Button 1</ButtonGroupItem>
			<ButtonGroupItem id="2">Button 2</ButtonGroupItem>
			<ButtonGroupItem id="3">Button 3</ButtonGroupItem>
		</ButtonGroup>
	</div>
</section>
