<script lang="ts">
	import { MailIcon } from '@indaco/svelte-iconoir/icons/MailIcon';
	import { PlusIcon } from '@indaco/svelte-iconoir/icons/PlusIcon';
	import { Button } from '$lib/index.js';
</script>

<section class="main">
	<h1><tt>@sveltinio/essentials</tt></h1>
	<h2><tt>Button</tt></h2>
</section>

<section>
	<div id="buttons-basic" class="demo-container">
		<h3 id="buttons-default">Variants</h3>
		<div class="row">
			<Button />
			<Button type="primary" />
			<Button type="secondary" />
			<Button type="error" />
			<Button type="warning" />
		</div>
		<div class="row">
			<Button type="success" />
			<Button type="info" />
			<Button type="light" />
			<Button type="dark" />
		</div>
	</div>

	<div id="buttons-ring-focus" class="demo-container">
		<h3 id="buttons-default">Focus Ring</h3>
		<div class="row">
			<Button withFocusRing />
			<Button type="primary" withFocusRing />
			<Button type="secondary" withFocusRing />
			<Button type="error" withFocusRing />
			<Button type="warning" withFocusRing />
		</div>
		<div class="row">
			<Button type="success" withFocusRing />
			<Button type="info" withFocusRing />
			<Button type="light" withFocusRing />
			<Button type="dark" withFocusRing />
		</div>
	</div>

	<div id="buttons-ring" class="demo-container">
		<h3 id="buttons-default">
			Sizes [<i>xs</i>, <i>sm</i>, <i>base</i>, <i>lg</i>, <i>xl</i>]. Default:
			<i>base</i>
		</h3>
		<div class="row">
			<Button size="xs" />
			<Button size="sm" />
			<Button />
			<Button size="md" />
			<Button size="lg" />
		</div>
	</div>

	<div id="buttons-rounded" class="demo-container">
		<h3 id="buttons-default">Rounded</h3>
		<div class="row">
			<Button rounded />
			<Button type="primary" rounded />
			<Button type="secondary" rounded />
			<Button type="error" rounded />
			<Button type="warning" rounded />
		</div>
	</div>

	<div id="buttons-outlined" class="demo-container">
		<h3 id="buttons-default">Outlined</h3>
		<div class="row">
			<Button outlined rounded />
			<Button type="primary" outlined rounded />
			<Button type="secondary" outlined rounded />
			<Button type="error" outlined rounded />
			<Button type="warning" outlined rounded />
		</div>
	</div>

	<div id="buttons-circular" class="demo-container">
		<h3 id="buttons-default">Circular</h3>
		<div class="row">
			<Button circle>
				<PlusIcon />
			</Button>
			<Button type="primary" circle><PlusIcon /></Button>
			<Button type="secondary" circle><PlusIcon /></Button>
			<Button type="error" circle><PlusIcon /></Button>
			<Button type="warning" circle><PlusIcon /></Button>
		</div>
	</div>

	<div id="buttons-with-icons" class="demo-container">
		<h3 id="buttons-default">Icon</h3>
		<div class="row">
			<Button type="primary">
				<MailIcon slot="leftIcon" /> Button Text
			</Button>
			<Button type="secondary">
				<MailIcon slot="leftIcon" /> Button Text
			</Button>
			<Button type="error">
				Button Text <MailIcon slot="rightIcon" />
			</Button>
			<Button type="warning">
				Button Text <MailIcon slot="rightIcon" />
			</Button>
		</div>
	</div>

	<div id="buttons-theming" class="demo-container">
		<h3 id="buttons-custom-colors">Custom Styles with prop</h3>
		<div class="row">
			<Button
				label="Custom Styles"
				type="success"
				rounded
				withFocusRing
				styles={{
					color: 'rgb(54 83 20)',
					'border-color': 'rgb(236 252 203)',
					'bg-color': 'rgb(132 204 22)',
					'bg-color-hover': 'rgb(163 230 53)',
					'ring-color': 'rgb(190 242 100)',
					'ring-width': '3px',
					'ring-style': 'dashed'
				}}
			/>
		</div>
	</div>

	<div id="buttons-theming" class="demo-container">
		<h3 id="buttons-custom-colors">Custom Styles with CSS Class</h3>
		<div class="row">
			<Button label="My Primary Button" type="primary" rounded class="my-own-primary-btn" />
		</div>
	</div>
</section>
