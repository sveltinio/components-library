<script lang="ts">
	import { MailIcon, PlusIcon } from '@indaco/svelte-iconoir';
	import { Button } from '$lib';
</script>

<section class="main">
	<h1><tt>@sveltinio/essentials</tt></h1>

	<h2><tt>Button</tt></h2>

	<div id="buttons-basic" class="container">
		<div class="buttons-container">
			<h3 id="buttons-default">Basics</h3>
			<div class="buttons-row">
				<Button />
				<Button type="primary" />
				<Button type="secondary" />
				<Button type="error" />
				<Button type="warning" />
			</div>
			<div class="buttons-row">
				<Button type="success" />
				<Button type="info" />
				<Button type="light" />
				<Button type="dark" />
			</div>
		</div>
	</div>

	<div id="buttons-ring-focus" class="container">
		<div class="buttons-container">
			<h3 id="buttons-default">With Focus Ring</h3>
			<div class="buttons-row">
				<Button withFocusRing />
				<Button type="primary" withFocusRing />
				<Button type="secondary" withFocusRing />
				<Button type="error" withFocusRing />
				<Button type="warning" withFocusRing />
			</div>
			<div class="buttons-row">
				<Button type="success" withFocusRing />
				<Button type="info" withFocusRing />
				<Button type="light" withFocusRing />
				<Button type="dark" withFocusRing />
			</div>
		</div>
	</div>

	<div id="buttons-ring" class="container">
		<div class="buttons-container">
			<h3 id="buttons-default">
				Sizes (can be <i>xs</i>, <i>sm</i>, <i>base</i>, <i>md</i> or <i>lg</i>. Default:
				<i>base</i>)
			</h3>
			<div class="buttons-row">
				<Button size="lg" />
				<Button type="primary" size="lg" />
				<Button type="secondary" size="lg" />
				<Button type="error" size="lg" />
				<Button type="warning" size="lg" />
			</div>
			<div class="buttons-row">
				<Button type="success" size="lg" />
				<Button type="info" size="lg" />
				<Button type="light" size="lg" />
				<Button type="dark" size="lg" />
			</div>
		</div>
	</div>

	<div id="buttons-rounded" class="container">
		<div class="buttons-container">
			<h3 id="buttons-default">Rounded</h3>
			<div class="buttons-row">
				<Button rounded />
				<Button type="primary" rounded />
				<Button type="secondary" rounded />
				<Button type="error" rounded />
				<Button type="warning" rounded />
			</div>
			<div class="buttons-row">
				<Button type="success" rounded />
				<Button type="info" rounded />
				<Button type="light" rounded />
				<Button type="dark" rounded />
			</div>
		</div>
	</div>

	<div id="buttons-outlined" class="container">
		<div class="buttons-container">
			<h3 id="buttons-default">Outlined</h3>
			<div class="buttons-row">
				<Button outlined rounded />
				<Button type="primary" outlined rounded />
				<Button type="secondary" outlined rounded />
				<Button type="error" outlined rounded />
				<Button type="warning" outlined rounded />
			</div>
			<div class="buttons-row">
				<Button type="success" outlined rounded />
				<Button type="info" outlined rounded />
				<Button type="light" outlined rounded />
				<Button type="dark" outlined rounded />
			</div>
		</div>
	</div>

	<div id="buttons-with-icons" class="container">
		<div class="buttons-container">
			<h4 id="buttons-default">With Icon</h4>

			<div class="buttons-row">
				<Button type="success">
					<MailIcon slot="leftIcon" /> Button Text
				</Button>
				<Button type="info">
					<MailIcon slot="leftIcon" /> Button Text
				</Button>
				<Button type="light">
					Button Text <MailIcon slot="rightIcon" />
				</Button>

				<Button type="dark">
					Button Text <MailIcon slot="rightIcon" />
				</Button>
			</div>
		</div>
	</div>

	<div id="buttons-circular" class="container">
		<div class="buttons-container">
			<h3 id="buttons-default">Circular</h3>
			<div class="buttons-row">
				<Button circular>
					<PlusIcon />
				</Button>
				<Button type="primary" size="lg" circular><PlusIcon /></Button>
				<Button type="secondary" size="xs" circular><PlusIcon /></Button>
				<Button type="error" circular><PlusIcon /></Button>
				<Button type="warning" circular><PlusIcon /></Button>
			</div>
			<div class="buttons-row">
				<Button type="success" circular><PlusIcon /></Button>
				<Button type="info" circular><PlusIcon /></Button>
				<Button type="light" circular><PlusIcon /></Button>
				<Button type="dark" circular><PlusIcon /></Button>
			</div>
		</div>
	</div>

	<div id="buttons-theming" class="container">
		<div class="buttons-container">
			<h3 id="buttons-custom-colors">Custom Colors</h3>
			<div class="buttons-row">
				<Button
					label="Custom Success"
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

				<Button
					label="Custom Success"
					type="success"
					outlined
					rounded
					styles={{
						color: 'rgb(77 124 15)',
						'border-color': 'rgb(217 249 157)',
						'bg-color-hover': 'rgb(101 163 13)',
						'outlined-bg-hover': 'rgb(236 252 203)'
					}}
				/>
			</div>
		</div>
	</div>
</section>
