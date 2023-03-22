<script lang="ts">
	import { MailIcon } from '@indaco/svelte-iconoir/mail';
	import { PlusIcon } from '@indaco/svelte-iconoir/plus';
	import { Button } from '$lib/index.js';

	const handleButtonClick = (event: any) => {
		alert('button clicked on:' + event.detail.eventDetails);
	};
</script>

<div class="header" role="main">
	<h1>@sveltinio/essentials</h1>
	<h2>Button</h2>
</div>

<section role="contentinfo">
	<div class="actions">
		<a class="btn-back" href="/demos">← Return To The Demos</a>
	</div>

	<div id="buttons-variants-wrapper" class="demo-wrapper">
		<h3 id="buttons-variants">Variants</h3>
		<div class="preview">
			<Button href="https://google.com" external />
			<Button type="primary" on:click={handleButtonClick} />
			<Button type="secondary" href="https://google.com" external />
			<Button type="error" />
			<Button type="warning" />

			<Button type="success" />
			<Button type="info" />
			<Button type="light" />
			<Button type="dark" />
		</div>
	</div>

	<div id="buttons-disabled-wrapper" class="demo-wrapper">
		<h3 id="buttons-disabled">Disabled</h3>
		<div class="preview">
			<Button disabled>Disabled</Button>
			<Button type="primary" disabled />
			<Button type="secondary" disabled />
			<Button type="error" disabled />
			<Button type="warning" disabled />
		</div>
	</div>

	<div id="buttons-ring-focus-wrapper" class="demo-wrapper">
		<h3 id="buttons-ring-focus">Focus Ring</h3>
		<div class="preview">
			<Button withFocusRing />
			<Button type="primary" withFocusRing />
			<Button type="secondary" withFocusRing />
			<Button type="error" withFocusRing />
			<Button type="warning" withFocusRing />
		</div>
	</div>

	<div id="buttons-ring-wrapper" class="demo-wrapper">
		<h3 id="buttons-ring">
			Sizes [<i>xs</i>, <i>sm</i>, <i>base</i>, <i>lg</i>, <i>xl</i>]. Default:
			<i>base</i>
		</h3>
		<div class="preview">
			<Button size="xs" />
			<Button size="sm" />
			<Button />
			<Button size="md" />
			<Button size="lg" />
		</div>
	</div>

	<div id="buttons-rounded-wrapper" class="demo-wrapper">
		<h3 id="buttons-rounded">Rounded</h3>
		<div class="preview">
			<Button rounded />
			<Button type="primary" rounded />
			<Button type="secondary" rounded />
			<Button type="error" rounded />
			<Button type="warning" rounded />
		</div>
	</div>

	<div id="buttons-outlined-wrapper" class="demo-wrapper">
		<h3 id="buttons-outlined">Outlined</h3>
		<div class="preview">
			<Button outlined />
			<Button type="primary" outlined />
			<Button type="secondary" outlined />
			<Button type="error" outlined />
			<Button type="warning" outlined />
		</div>
	</div>

	<div id="buttons-outlined-disabled-wrapper" class="demo-wrapper">
		<h3 id="buttons-outlined-disabled">Outlined Disabled</h3>
		<div class="preview">
			<Button disabled />
			<Button type="primary" outlined disabled />
			<Button type="secondary" outlined disabled />
			<Button type="error" outlined disabled />
			<Button type="warning" outlined disabled />
		</div>
	</div>

	<div id="buttons-circular-wrapper" class="demo-wrapper">
		<h3 id="buttons-circular">Circular</h3>
		<div class="preview">
			<Button circle>
				<PlusIcon />
			</Button>
			<Button type="primary" circle><PlusIcon /></Button>
			<Button type="secondary" circle><PlusIcon /></Button>
			<Button type="error" circle><PlusIcon /></Button>
			<Button type="warning" circle><PlusIcon /></Button>
		</div>
	</div>

	<div id="buttons-with-icons-wrapper" class="demo-wrapper">
		<h3 id="buttons-with-icons">Icon (left & right)</h3>
		<div class="preview">
			<Button type="primary">
				<MailIcon slot="leftIcon" aria-hidden="true" focusable="false" /> Button Text
			</Button>
			<Button type="secondary">
				<MailIcon slot="leftIcon" aria-hidden="true" focusable="false" /> Button Text
			</Button>
			<Button type="error">
				Button Text <MailIcon slot="rightIcon" aria-hidden="true" focusable="false" />
			</Button>
			<Button type="warning">
				Button Text <MailIcon slot="rightIcon" aria-hidden="true" focusable="false" />
			</Button>
		</div>
	</div>

	<div id="buttons-theming-with-prop-wrapper" class="demo-wrapper">
		<h3 id="buttons-theming-with-prop">Custom Styles with prop</h3>
		<div class="preview">
			<Button
				label="Custom Styles"
				type="success"
				rounded
				withFocusRing
				styles={{
					color: 'rgb(54 83 20)',
					'border-color': 'rgb(236 252 203)',
					'bg-color': 'rgb(0 103 39)',
					'bg-color-hover': 'rgb(163 230 53)',
					'ring-color': 'rgb(190 242 100)',
					'ring-width': '3px',
					'ring-style': 'dashed'
				}}
			/>
		</div>
	</div>

	<div id="buttons-theming-with-css-class-wrapper" class="demo-wrapper">
		<h3 id="buttons-theming-with-css-class">Custom Styles with CSS Class</h3>
		<div class="preview">
			<Button label="My Primary Button" type="primary" rounded class="my-primary-btn" />
		</div>
	</div>
</section>
