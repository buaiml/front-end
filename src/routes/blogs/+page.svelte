<script lang="ts">
	import { page } from '$app/state';
	import { BLOG_POSTS, BLOG_TAGS, tagLabel, formatDate } from '$lib/blogs';
	import SiteFooter from '$lib/components/SiteFooter.svelte';

	const activeTag = $derived(page.url.searchParams.get('tag'));

	const posts = $derived(
		BLOG_POSTS.filter((p) => !activeTag || p.tag === activeTag).toSorted((a, b) => b.date.localeCompare(a.date))
	);

	const chipClass = (active: boolean) =>
		`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
			active ? 'bg-prussian-blue text-jasmine' : 'border border-deep-teal-800 bg-card text-prussian-blue hover:bg-jasmine-800'
		}`;
</script>

<svelte:head><title>Blogs | BUAI Society</title></svelte:head>

<div class="flex flex-col">
	<header class="flex flex-col items-center gap-4 bg-prussian-blue px-6 py-24 text-center">
		<p class="text-sm font-semibold tracking-[0.2em] text-jasmine">BUAI SOCIETY</p>
		<h1 class="text-4xl font-bold text-white sm:text-5xl">Blogs</h1>
		<p class="max-w-xl text-deep-teal-800">Notes, progress, and lessons learned straight from our project groups.</p>
	</header>

	<div class="flex flex-col gap-10 bg-jasmine-900 px-6 py-20">
		<nav aria-label="Filter by tag" class="mx-auto flex flex-wrap justify-center gap-3">
			<a href="/blogs" class={chipClass(!activeTag)} aria-current={!activeTag ? 'page' : undefined}>All</a>
			{#each BLOG_TAGS as tag (tag.id)}
				<a
					href="/blogs?tag={tag.id}"
					class={chipClass(activeTag === tag.id)}
					aria-current={activeTag === tag.id ? 'page' : undefined}
				>
					{tag.label}
				</a>
			{/each}
		</nav>

		<div class="mx-auto flex w-full max-w-3xl flex-col gap-6">
			{#each posts as post (post.slug)}
				<a
					href="/blogs/{post.slug}"
					class="flex flex-col gap-3 rounded-2xl border border-deep-teal-900 bg-card p-8 shadow-md transition-shadow hover:shadow-lg"
				>
					<div class="flex flex-wrap items-center gap-3">
						<span
							class="rounded-full bg-brick-ember-100 px-4 py-1.5 text-xs font-semibold tracking-wide text-brick-ember uppercase"
						>
							{tagLabel(post.tag)}
						</span>
						{#if post.draft}
							<span class="rounded-full border border-deep-teal-700 px-3 py-1 text-xs font-semibold text-deep-teal-400 uppercase">
								Draft
							</span>
						{/if}
						<span class="text-sm text-deep-teal-400">{formatDate(post.date)}</span>
					</div>
					<h2 class="text-2xl font-bold text-prussian-blue">{post.title}</h2>
					<p class="leading-relaxed text-deep-teal-100">{post.excerpt}</p>
				</a>
			{:else}
				<p class="text-center text-deep-teal-300">{activeTag ? `No ${tagLabel(activeTag)} posts yet.` : "No posts yet."} Check back soon.</p>
			{/each}
		</div>
	</div>

	<SiteFooter />
</div>
