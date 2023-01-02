<script lang="ts">
	import { Tabs, Tab } from '$lib/index.js';
	import DummyIcon from '../_dummyIcon.svelte';

	const customStyles = {
		'tab-bg-color-hover': '#C7D8E6',
		'tab-active-border-b-color': '#0084f6'
	};
</script>

<section class="main">
	<h1><tt>@sveltinio/essentials</tt></h1>
	<h2><tt>Tabs</tt></h2>
</section>

<section>
	<div class="demo-container">
		<h3>Default</h3>
		<Tabs>
			<Tab id="1" label="Tab 1"
				><h3>1 - Heading</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</p></Tab
			>
			<Tab id="2" label="Tab 2"
				><h3>2 - Heading</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</p></Tab
			>
			<Tab id="3" label="Tab 3"
				><h3>3 - Heading</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</p></Tab
			>
		</Tabs>
	</div>
</section>

<section>
	<div class="demo-container">
		<h3>Bordered Variant</h3>
		<Tabs activeTab="3" bordered>
			<Tab id="1" label="Tab 1"
				><h3>1 - Heading</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</p></Tab
			>
			<Tab id="2" label="Tab 2"
				><h3>2 - Heading</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</p></Tab
			>
			<Tab id="3" label="Tab 3"
				><h3>3 - Heading</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</p></Tab
			>
		</Tabs>
	</div>
</section>

<section>
	<div class="demo-container">
		<h3>Custom Styles with prop</h3>
		<Tabs activeTab="1" styles={customStyles}>
			<Tab id="1" label="Tab 1"
				><h3 style="font-weight: bold;">1 - Heading</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</p></Tab
			>
			<Tab id="2" label="Tab 2"
				><h3 style="font-weight: bold;">2 - Heading</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</p></Tab
			>
			<Tab id="3" label="Tab 3"
				><h3 style="font-weight: bold;">3 - Heading</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</p></Tab
			>
		</Tabs>
	</div>
</section>

<section>
	<div class="demo-container">
		<h3>Dark - Custom Styles with CSS Class</h3>
		<Tabs activeTab="1" class="my-tabs">
			<Tab id="1" label="Tab 1" icon={DummyIcon}
				><h3 style="color: #0084f6; font-weight: bold;">1 - Heading</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</p></Tab
			>
			<Tab id="2" label="Tab 2" icon={DummyIcon}
				><h3 style="color: #0084f6; font-weight: bold;">2 - Heading</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</p></Tab
			>
			<Tab id="3" label="Tab 3" icon={DummyIcon}
				><h3 style="color: #0084f6; font-weight: bold;">3 - Heading</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</p></Tab
			>
		</Tabs>
	</div>
</section>

<section>
	<div class="demo-container">
		<h3>Rounded Tabs - Custom Styles with CSS Class</h3>
		<Tabs activeTab="1" class="rounded-tabs">
			<Tab id="1" label="Tab 1"
				><h3 style="color: #0084f6; font-weight: bold;">1 - Heading</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</p></Tab
			>
			<Tab id="2" label="Tab 2"
				><h3 style="color: #0084f6; font-weight: bold;">2 - Heading</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</p></Tab
			>
			<Tab id="3" label="Tab 3"
				><h3 style="color: #0084f6; font-weight: bold;">3 - Heading</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</p></Tab
			>
		</Tabs>
	</div>
</section>

<section>
	<div class="demo-container">
		<h3>Pills TabsGroup - Custom Styles with CSS Class</h3>
		<Tabs activeTab="2" class="pills-tabgroup" justify="center">
			<Tab id="1" label="Tab 1"
				><h3 style="color: #57534e; font-weight: bold;">1 - Heading</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</p></Tab
			>
			<Tab id="2" label="Tab 2"
				><h3 style="color: #57534e; font-weight: bold;">2 - Heading</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</p></Tab
			>
			<Tab id="3" label="Tab 3"
				><h3 style="color: #57534e; font-weight: bold;">3 - Heading</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</p></Tab
			>
		</Tabs>
	</div>
</section>
