<script lang="ts">
	import { MailIcon } from '@indaco/svelte-iconoir/mail';
	import { Button } from '$lib/index.js';

	const handleButtonClick = (event: any) => {
		alert('button clicked on:' + event.detail);
	};
</script>

<div class="header" role="main">
	<h1>@sveltinio/essentials</h1>
	<h2>Button</h2>
</div>

<section role="contentinfo">
	<div class="actions">
		<a class="btn-back" href="/">← Back to the Demos page</a>
	</div>

	<div id="buttons-variants-wrapper" class="demo-wrapper">
		<h3 id="buttons-variants">Variants</h3>
		<div class="preview">
			<Button href="https://google.com" external>Default</Button>
			<Button variant="primary" label="Primary" on:click={handleButtonClick} />
			<Button variant="secondary" label="Secondary" />
			<Button variant="success">Success</Button>
			<Button variant="error">Error</Button>
			<Button variant="warning">Warning</Button>
			<Button variant="info" label="Info" />
			<Button variant="ghost">Ghost</Button>
			<Button variant="neutral" label="Neutral" />
		</div>
	</div>

	<div id="buttons-outlined-wrapper" class="demo-wrapper">
		<h3 id="buttons-outlined">Outlined</h3>
		<div class="preview">
			<Button outlined>Default</Button>
			<Button variant="primary" outlined>Primary</Button>
			<Button variant="secondary" outlined>Secondary</Button>
			<Button variant="success" outlined>Success</Button>
			<Button variant="error" outlined>Error</Button>
			<Button variant="warning" outlined>Warning</Button>
			<Button variant="info" outlined>Info</Button>
			<Button variant="ghost" outlined>Ghost</Button>
			<Button variant="neutral" outlined>Neutral</Button>
		</div>
	</div>

	<div id="buttons-size-wrapper" class="demo-wrapper">
		<h3 id="buttons-size">
			Sizes [<i>xs</i>, <i>sm</i>, <i>base</i>, <i>lg</i>, <i>xl</i>]. Default:
			<i>base</i>
		</h3>
		<div class="preview">
			<Button size="xs" label="xs" />
			<Button size="sm" label="sm" />
			<Button size="base" label="base" />
			<Button size="lg" label="lg" />
			<Button size="xl" label="xl" />
		</div>
	</div>

	<div id="buttons-shapes-wrapper" class="demo-wrapper">
		<h3 id="buttons-shapes">Shapes</h3>
		<div class="preview">
			<Button>Default</Button>
			<Button shape="flat">Flat</Button>
			<Button shape="pill">Pill</Button>
			<Button shape="circle">Circle</Button>
		</div>
	</div>

	<div id="buttons-block-wrapper" class="demo-wrapper">
		<h3 id="buttons-block">Block</h3>
		<div class="preview">
			<Button label="Full Width" block />
		</div>
	</div>

	<div id="buttons-ring-focus-wrapper" class="demo-wrapper">
		<h3 id="buttons-ring-focus">No Focus Ring</h3>
		<div class="preview">
			<Button noFocusRing>Default</Button>
		</div>
	</div>

	<div id="buttons-disabled-wrapper" class="demo-wrapper">
		<h3 id="buttons-disabled">Disabled</h3>
		<div class="preview">
			<Button disabled>Disabled</Button>
		</div>
	</div>

	<div id="buttons-with-icons-wrapper" class="demo-wrapper">
		<h3 id="buttons-with-icons">Icon (left & right)</h3>
		<div class="preview">
			<Button>
				<MailIcon slot="leftIcon" aria-hidden="true" focusable="false" /> Button Label
			</Button>

			<Button>
				Button Label <MailIcon slot="rightIcon" aria-hidden="true" focusable="false" />
			</Button>

			<Button>
				<MailIcon slot="leftIcon" aria-hidden="true" focusable="false" />
				Button Label
				<MailIcon slot="rightIcon" aria-hidden="true" focusable="false" />
			</Button>
		</div>
	</div>

	<div id="buttons-theming-with-prop-wrapper" class="demo-wrapper">
		<h3 id="buttons-theming-with-prop">Custom Styles with prop</h3>
		<div class="preview">
			<Button
				label="Custom Styles"
				variant="success"
				shape="rounded"
				styles={{
					color: 'rgb(54 83 20)',
					'border-color': 'rgb(236 252 203)',
					'bg-color': 'rgb(0 103 39)',
					'bg-color-hover': 'rgb(163 230 53)',
					'outline-color': 'rgb(190 242 100)',
					'outline-width': '3px',
					'outline-style': 'dashed'
				}}
			/>
		</div>
	</div>

	<div id="buttons-theming-with-css-class-wrapper" class="demo-wrapper">
		<h3 id="buttons-theming-with-css-class">Custom Styles with CSS Class</h3>
		<div class="preview">
			<Button
				label="My Primary Button"
				variant="primary"
				shape="rounded"
				class="my-primary-btn"
			/>
		</div>
	</div>

	<div id="buttons-theming-with-reserved-css-class-wrapper" class="demo-wrapper">
		<h3 id="buttons-theming-with-reserved-css-class">
			Custom Styles not applied due to reserved CSS Class name
		</h3>
		<div class="preview">
			<Button
				label="My Primary Button"
				variant="primary"
				rounded
				class="my-primary-btn sn-e-c-button"
			/>
		</div>
	</div>
</section>
