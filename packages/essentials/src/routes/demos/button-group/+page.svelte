<script lang="ts">
	import { ButtonGroup, ButtonGroupItem } from '$lib/index.js';
	import DummyIcon from '../_dummyIcon.svelte';
	function handleMessage(event: CustomEvent) {
		console.log(event.detail.eventDetails);
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

<div class="header" role="main">
	<h1>@sveltinio/essentials</h1>
	<h2>ButtonGroup</h2>
</div>

<section role="contentinfo">
	<div class="actions">
		<a class="btn-back" href="/">← Back to the Demos page</a>
	</div>

	<div id="buttongroup-default-wrapper" class="demo-wrapper">
		<h3 id="buttongroup-default">Default</h3>
		<div class="preview">
			<ButtonGroup>
				<ButtonGroupItem id="1" label="Button 1" on:click={handleMessage} />
				<ButtonGroupItem id="2" label="Button 2" on:click={handleMessage} />
				<ButtonGroupItem id="3" label="Button 3" on:click={handleMessage} />
			</ButtonGroup>
		</div>
	</div>

	<div id="buttongroup-left-icon-wrapper" class="demo-wrapper">
		<h3 id="buttongroup-left-icon">Left Icon</h3>
		<div class="preview">
			<ButtonGroup>
				<ButtonGroupItem
					id="1"
					label="Button 1"
					icon={DummyIcon}
					on:click={handleMessage}
				/>
				<ButtonGroupItem
					id="2"
					label="Button 2"
					icon={DummyIcon}
					on:click={handleMessage}
				/>
				<ButtonGroupItem
					id="3"
					label="Button 3"
					icon={DummyIcon}
					on:click={handleMessage}
				/>
			</ButtonGroup>
		</div>
	</div>

	<div id="buttongroup-right-icon-wrapper" class="demo-wrapper">
		<h3 id="buttongroup-right-icon">Right Icon</h3>
		<div class="preview">
			<ButtonGroup>
				<ButtonGroupItem
					id="1"
					label="Button 1"
					icon={DummyIcon}
					position="right"
					on:click={handleMessage}
				/>
				<ButtonGroupItem
					id="2"
					label="Button 2"
					icon={DummyIcon}
					position="right"
					on:click={handleMessage}
				/>
				<ButtonGroupItem
					id="3"
					label="Button 3"
					icon={DummyIcon}
					position="right"
					on:click={handleMessage}
				/>
			</ButtonGroup>
		</div>
	</div>

	<div id="buttongroup-sizes-wrapper" class="demo-wrapper">
		<h3 id="buttongroup-sizes">
			Sizes [<i>xs</i>, <i>sm</i>, <i>base</i>, <i>lg</i>, <i>xl</i>]. Default:
			<i>base</i>
		</h3>
		<div class="preview">
			<ButtonGroup size="xs">
				<ButtonGroupItem id="1" label="Button 1" on:click={handleMessage} />
				<ButtonGroupItem id="2" label="Button 2" on:click={handleMessage} />
				<ButtonGroupItem id="3" label="Button 3" on:click={handleMessage} />
			</ButtonGroup>
		</div>

		<div class="preview">
			<ButtonGroup size="sm">
				<ButtonGroupItem id="1" label="Button 1" on:click={handleMessage} />
				<ButtonGroupItem id="2" label="Button 2" on:click={handleMessage} />
				<ButtonGroupItem id="3" label="Button 3" on:click={handleMessage} />
			</ButtonGroup>
		</div>

		<div class="preview">
			<ButtonGroup>
				<ButtonGroupItem id="1" label="Button 1" on:click={handleMessage} />
				<ButtonGroupItem id="2" label="Button 2" on:click={handleMessage} />
				<ButtonGroupItem id="3" label="Button 3" on:click={handleMessage} />
			</ButtonGroup>
		</div>

		<div class="preview">
			<ButtonGroup size="lg">
				<ButtonGroupItem id="1" label="Button 1" on:click={handleMessage} />
				<ButtonGroupItem id="2" label="Button 2" on:click={handleMessage} />
				<ButtonGroupItem id="3" label="Button 3" on:click={handleMessage} />
			</ButtonGroup>
		</div>

		<div class="preview">
			<ButtonGroup size="xl">
				<ButtonGroupItem id="1" label="Button 1" on:click={handleMessage} />
				<ButtonGroupItem id="2" label="Button 2" on:click={handleMessage} />
				<ButtonGroupItem id="3" label="Button 3" on:click={handleMessage} />
			</ButtonGroup>
		</div>
	</div>

	<div id="buttongroup-theming-with-prop-wrapper" class="demo-wrapper">
		<h3 id="buttongroup-theming-with-prop">Custom Styles with styles prop</h3>
		<div class="preview">
			<ButtonGroup styles={customStyles}>
				<ButtonGroupItem id="1" label="Button 1" on:click={handleMessage} />
				<ButtonGroupItem id="2" label="Button 2" on:click={handleMessage} />
				<ButtonGroupItem id="3" label="Button 3" on:click={handleMessage} />
			</ButtonGroup>
		</div>
	</div>

	<div id="buttongroup-theming-with-css-class-wrapper" class="demo-wrapper">
		<h3 id="buttongroup-theming-with-css-class">Custom Styles with CSS Class</h3>
		<ButtonGroup class="my-btngroup">
			<ButtonGroupItem id="1" label="Button 1" on:click={handleMessage} />
			<ButtonGroupItem id="2" label="Button 2" on:click={handleMessage} />
			<ButtonGroupItem id="3" label="Button 3" on:click={handleMessage} />
		</ButtonGroup>
	</div>
</section>
