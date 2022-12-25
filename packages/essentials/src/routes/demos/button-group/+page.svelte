<script lang="ts">
	import { ButtonGroup, ButtonGroupItem } from '$lib/index.js';
	function handleMessage(event: CustomEvent) {
		console.log(event.detail);
	}

	const customStyles = {
		color: '#134e4a',
		pl: '1.25rem',
		pr: '1.25rem',
		'bg-color': '#f0fdfa',
		'bg-color-hover': '#99f6e4',
		'border-color': '#5eead4',
		'active-color': '#134e4a',
		'active-bg-color': '#2dd4bf',
		'active-border-color': '#5eead4'
	};
</script>

<section class="main">
	<h1><tt>@essentials/ButtonGroup</tt></h1>
	<h2><tt>ButtonGroup</tt></h2>
</section>

<section>
	<div class="demo-container">
		<h3>Default</h3>
		<ButtonGroup>
			<ButtonGroupItem id="1" on:click={handleMessage}>Button 1</ButtonGroupItem>
			<ButtonGroupItem id="2" on:click={handleMessage}>Button 2</ButtonGroupItem>
			<ButtonGroupItem id="3" on:click={handleMessage}>Button 3</ButtonGroupItem>
		</ButtonGroup>
	</div>

	<div class="demo-container">
		<h3>Custom Styles with styles prop</h3>
		<ButtonGroup styles={customStyles}>
			<ButtonGroupItem id="1" on:click={handleMessage}>Button 1</ButtonGroupItem>
			<ButtonGroupItem id="2" on:click={handleMessage}>Button 2</ButtonGroupItem>
			<ButtonGroupItem id="3" on:click={handleMessage}>Button 3</ButtonGroupItem>
		</ButtonGroup>
	</div>

	<div class="demo-container">
		<h3>Custom Styles with CSS Class</h3>
		<ButtonGroup class="my-btngroup">
			<ButtonGroupItem id="1" on:click={handleMessage}>Button 1</ButtonGroupItem>
			<ButtonGroupItem id="2" on:click={handleMessage}>Button 2</ButtonGroupItem>
			<ButtonGroupItem id="3" on:click={handleMessage}>Button 3</ButtonGroupItem>
		</ButtonGroup>
	</div>
</section>
