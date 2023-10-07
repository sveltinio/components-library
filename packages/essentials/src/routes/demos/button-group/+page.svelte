<script lang="ts">
	import { ButtonGroup } from '$lib/index.js';
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

	<div id="buttongroup-variants-wrapper" class="demo-wrapper">
		<h3 id="buttongroup-variants">Variants</h3>
		<h4>Default: Rounded</h4>
		<div class="preview">
			<ButtonGroup>
				<ButtonGroup.Button id="1" label="Button 1" on:click={handleMessage} />
				<ButtonGroup.Button id="2" label="Button 2" on:click={handleMessage} />
				<ButtonGroup.Button id="3" label="Button 3" on:click={handleMessage} />
			</ButtonGroup>
		</div>
		<h4>Flat</h4>
		<div class="preview">
			<ButtonGroup shape="flat">
				<ButtonGroup.Button id="1" label="Button 1" on:click={handleMessage} />
				<ButtonGroup.Button id="2" label="Button 2" on:click={handleMessage} />
				<ButtonGroup.Button id="3" label="Button 3" on:click={handleMessage} />
			</ButtonGroup>
		</div>
		<h4>Pill</h4>
		<div class="preview">
			<ButtonGroup shape="pill">
				<ButtonGroup.Button id="1" label="Button 1" on:click={handleMessage} />
				<ButtonGroup.Button id="2" label="Button 2" on:click={handleMessage} />
				<ButtonGroup.Button id="3" label="Button 3" on:click={handleMessage} />
			</ButtonGroup>
		</div>
	</div>

	<div id="buttongroup-sizes-wrapper" class="demo-wrapper">
		<h3 id="buttongroup-sizes">
			Sizes: [xs, sm, base, lg, xl] (Default = <i>base</i>)
		</h3>
		<div class="preview">
			<ButtonGroup size="xs">
				<ButtonGroup.Button id="1" label="Button 1" on:click={handleMessage} />
				<ButtonGroup.Button id="2" label="Button 2" on:click={handleMessage} />
				<ButtonGroup.Button id="3" label="Button 3" on:click={handleMessage} />
			</ButtonGroup>
		</div>

		<div class="preview">
			<ButtonGroup size="sm">
				<ButtonGroup.Button id="1" label="Button 1" on:click={handleMessage} />
				<ButtonGroup.Button id="2" label="Button 2" on:click={handleMessage} />
				<ButtonGroup.Button id="3" label="Button 3" on:click={handleMessage} />
			</ButtonGroup>
		</div>

		<div class="preview">
			<ButtonGroup>
				<ButtonGroup.Button id="1" label="Button 1" on:click={handleMessage} />
				<ButtonGroup.Button id="2" label="Button 2" on:click={handleMessage} />
				<ButtonGroup.Button id="3" label="Button 3" on:click={handleMessage} />
			</ButtonGroup>
		</div>

		<div class="preview">
			<ButtonGroup size="lg">
				<ButtonGroup.Button id="1" label="Button 1" on:click={handleMessage} />
				<ButtonGroup.Button id="2" label="Button 2" on:click={handleMessage} />
				<ButtonGroup.Button id="3" label="Button 3" on:click={handleMessage} />
			</ButtonGroup>
		</div>

		<div class="preview">
			<ButtonGroup size="xl">
				<ButtonGroup.Button id="1" label="Button 1" on:click={handleMessage} />
				<ButtonGroup.Button id="2" label="Button 2" on:click={handleMessage} />
				<ButtonGroup.Button id="3" label="Button 3" on:click={handleMessage} />
			</ButtonGroup>
		</div>
	</div>

	<div id="buttongroup-left-icon-wrapper" class="demo-wrapper">
		<h3 id="buttongroup-left-icon">Left Icon</h3>
		<div class="preview">
			<ButtonGroup>
				<ButtonGroup.Button
					id="1"
					label="Button 1"
					icon={DummyIcon}
					on:click={handleMessage}
				/>
				<ButtonGroup.Button
					id="2"
					label="Button 2"
					icon={DummyIcon}
					on:click={handleMessage}
				/>
				<ButtonGroup.Button
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
				<ButtonGroup.Button
					id="1"
					label="Button 1"
					icon={DummyIcon}
					position="right"
					on:click={handleMessage}
				/>
				<ButtonGroup.Button
					id="2"
					label="Button 2"
					icon={DummyIcon}
					position="right"
					on:click={handleMessage}
				/>
				<ButtonGroup.Button
					id="3"
					label="Button 3"
					icon={DummyIcon}
					position="right"
					on:click={handleMessage}
				/>
			</ButtonGroup>
		</div>
	</div>

	<div id="buttongroup-theming-with-prop-wrapper" class="demo-wrapper">
		<h3 id="buttongroup-theming-with-prop">Custom Styles with styles prop</h3>
		<div class="preview">
			<ButtonGroup styles={customStyles}>
				<ButtonGroup.Button id="1" label="Button 1" on:click={handleMessage} />
				<ButtonGroup.Button id="2" label="Button 2" on:click={handleMessage} />
				<ButtonGroup.Button id="3" label="Button 3" on:click={handleMessage} />
			</ButtonGroup>
		</div>
	</div>

	<div id="buttongroup-theming-with-css-class-wrapper" class="demo-wrapper">
		<h3 id="buttongroup-theming-with-css-class">Custom Styles with CSS Class</h3>
		<ButtonGroup class="my-btngroup">
			<ButtonGroup.Button id="1" label="Button 1" on:click={handleMessage} />
			<ButtonGroup.Button id="2" label="Button 2" on:click={handleMessage} />
			<ButtonGroup.Button id="3" label="Button 3" on:click={handleMessage} />
		</ButtonGroup>
	</div>
</section>
