<script lang="ts">
	let { title, images }: { title: string; images: { src: string; alt: string }[] } = $props();

	let currentIndex = $state(0);

	function prev() {
		currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
	}
	function next() {
		currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
	}
	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'ArrowLeft') prev();
		else if (e.key === 'ArrowRight') next();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="w-full rounded-lg border border-border bg-card p-4 shadow-sm sm:p-6">
	<h2 class="mb-4 text-center text-2xl font-semibold text-foreground sm:mb-6">{title}</h2>
	<div class="relative flex flex-col items-center">
		<div class="relative flex h-64 w-full items-center justify-center overflow-hidden sm:h-80 md:h-[500px]">
			<img
				src={images[currentIndex].src}
				alt={images[currentIndex].alt}
				class="h-full w-full rounded-lg object-contain shadow-lg"
			/>
			<button
				onclick={prev}
				class="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-background/70 p-1 text-foreground transition hover:bg-background/90 sm:left-4 sm:p-2"
				aria-label="Previous image"
			>
				&#8249;
			</button>
			<button
				onclick={next}
				class="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-background/70 p-1 text-foreground transition hover:bg-background/90 sm:right-4 sm:p-2"
				aria-label="Next image"
			>
				&#8250;
			</button>
		</div>

		<div class="mt-4 flex max-w-full flex-wrap justify-center overflow-hidden">
			{#each images as _, index (index)}
				<button
					onclick={() => (currentIndex = index)}
					class={`mx-1 my-1 h-3 w-3 rounded-full focus:outline-none ${
						index === currentIndex ? 'bg-primary' : 'bg-muted'
					}`}
					aria-label={`Go to image ${index + 1}`}
				></button>
			{/each}
		</div>
	</div>
</div>
