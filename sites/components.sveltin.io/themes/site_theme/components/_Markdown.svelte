<script lang="ts">
	export let title: string;
</script>

<main class="flex-1">
	<div class="py-6">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
			<h1 class="text-2xl font-semibold text-gray-900">{title}</h1>
		</div>
		<div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
			<!-- Replace with your content -->
			<div class="py-4">
				<div>
					<div class="markdown-body"><slot /></div>
				</div>
			</div>
			<!-- /End replace -->
		</div>
	</div>
</main>
