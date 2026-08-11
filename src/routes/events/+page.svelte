<script lang="ts">
	import EventItem from '$lib/components/EventItem.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { CalendarPlus } from 'lucide-svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="mx-auto flex w-full max-w-3xl flex-col gap-12 px-4 pt-28 pb-16 sm:px-6">
	<section class="flex flex-col gap-6">
		<div class="flex flex-wrap items-center justify-between gap-4">
			<h1 class="text-3xl font-semibold text-foreground">Upcoming Events</h1>
			<Button href={data.subscribeUrl} class="gap-2">
				<CalendarPlus size={16} />
				Subscribe to Calendar
			</Button>
		</div>
		{#if data.upcoming.length > 0}
			<div class="flex flex-col gap-4">
				{#each data.upcoming as event (event.id)}
					<EventItem {event} />
				{/each}
			</div>
		{:else}
			<p class="text-muted-foreground">No upcoming events... check back soon!</p>
		{/if}
	</section>

	{#if data.past.length > 0}
		<section class="flex flex-col gap-6">
			<h2 class="text-2xl font-semibold text-foreground">Past Events</h2>
			<div class="flex flex-col gap-4">
				{#each data.past as event (event.id)}
					<EventItem {event} />
				{/each}
			</div>
		</section>
	{/if}
</div>
