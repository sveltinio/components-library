<script lang="ts">
	import { TOC } from '$lib/index.js';
	import { tocEntries } from '../../../data/sample.js';
</script>

<section class="main">
	<h1><tt>@sveltinio/widgets</tt></h1>

	<h2><tt>TOC</tt></h2>
</section>

<section>
	<h3 id="toc2-default">Default</h3>
	<TOC data={tocEntries} />

	<h3 id="toc2-default">Ordered</h3>
	<TOC data={tocEntries} ordered />

	<h3 id="toc2-open">Custom title</h3>
	<TOC data={tocEntries} label="My TOC" />

	<h3 id="toc2-with-children">Label only</h3>
	<TOC data={tocEntries} labelOnly />

	<h3 id="toc2-with-children">Icon only</h3>
	<TOC data={tocEntries} iconOnly />

	<h3 id="toc2-with-children">Open by default</h3>
	<TOC data={tocEntries} isOpen />

	<h3 id="toc2-sveltin">sveltin theme</h3>
	<TOC theme="sveltin" data={tocEntries} prefixChar="#" />
</section>
