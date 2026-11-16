<script lang="ts">
	import { ArrowLeft } from 'lucide-svelte';
	import { tagLabel, formatDate } from '$lib/blogs';
	import SiteFooter from '$lib/components/SiteFooter.svelte';

	let { data } = $props();
	const post = $derived(data.post);
</script>

<svelte:head><title>{post.title} | BUAI Society</title></svelte:head>

<div class="flex flex-col">
	<header class="flex flex-col items-center gap-4 bg-prussian-blue px-6 py-24 text-center">
		<a
			href="/blogs?tag={post.tag}"
			class="text-sm font-semibold tracking-[0.2em] text-jasmine uppercase hover:opacity-80"
		>
			{tagLabel(post.tag)}
		</a>
		<h1 class="max-w-3xl text-4xl font-bold text-white sm:text-5xl">{post.title}</h1>
		<p class="text-deep-teal-800">
			{formatDate(post.date)}{#if post.draft}&nbsp;· Draft{/if}
		</p>
	</header>

	<article class="flex flex-col gap-6 bg-jasmine-900 px-6 py-20">
		<div class="mx-auto flex w-full max-w-3xl flex-col gap-5 text-lg leading-relaxed text-deep-teal-100">
			{#each post.body as paragraph, i (i)}
				<p>{paragraph}</p>
			{/each}
		</div>
		<a
			href="/blogs"
			class="mx-auto mt-6 flex items-center gap-2 text-sm font-semibold text-brick-ember hover:opacity-80"
		>
			<ArrowLeft size={16} />
			All posts
		</a>
	</article>

	<SiteFooter />
</div>
