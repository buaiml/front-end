<script lang="ts">
	import { Calendar } from 'lucide-svelte';
	import type { CalendarEvent } from '$lib/server/calendar';

	let { event }: { event: CalendarEvent } = $props();

	function formatDateForCalendar(date: Date): string {
		return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
	}

	function calendarUrl(event: CalendarEvent): string {
		const params = new URLSearchParams({
			action: 'TEMPLATE',
			text: event.name,
			dates: `${formatDateForCalendar(event.start)}/${formatDateForCalendar(event.end)}`,
			location: event.location,
			details: event.description
		});
		return `https://calendar.google.com/calendar/render?${params.toString()}`;
	}

	const dateFmt = new Intl.DateTimeFormat('en-US', { day: 'numeric' });
	const monthFmt = new Intl.DateTimeFormat('en-US', { month: 'short' });
	const timeFmt = new Intl.DateTimeFormat('en-US', { weekday: 'short', hour: 'numeric', minute: '2-digit' });
	const endTimeFmt = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit' });
</script>

<div class="w-full rounded-lg border border-border bg-card shadow-sm">
	<div class="flex flex-col gap-4 p-6 sm:flex-row sm:items-start">
		<div class="text-center sm:mr-4">
			<div class="text-4xl font-bold text-foreground">{dateFmt.format(event.start)}</div>
			<div class="text-sm uppercase text-muted-foreground">{monthFmt.format(event.start)}</div>
		</div>
		<div class="flex-grow">
			<h3 class="mb-2 text-2xl font-semibold text-foreground">{event.name}</h3>
			<p class="mb-1 text-muted-foreground">
				{timeFmt.format(event.start)} – {endTimeFmt.format(event.end)}
			</p>
			{#if event.location}
				<p class="mb-1 text-muted-foreground">{event.location}</p>
			{/if}
			{#if event.description}
				<p class="mb-4 text-sm text-muted-foreground">{event.description}</p>
			{/if}
			<a
				href={calendarUrl(event)}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm text-accent-foreground transition-colors hover:bg-accent/80"
			>
				<Calendar size={16} />
				Add to Calendar
			</a>
		</div>
	</div>
</div>
