<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import { CalendarPlus, Mail } from "lucide-svelte";
	import { SOCIAL_LINKS, CONTACT } from "$lib/constants";
	import { PROJECT_GROUPS } from "$lib/project-groups";
	import type { PageData } from "./$types";

	let { data }: { data: PageData } = $props();

	// width scales with viewport (vw) between a min and max px so photos fill more
	// on desktop and shrink gracefully on mobile instead of disappearing.
	const photos = [
		{
			src: "/images/10_11.jpeg",
			left: "6%",
			top: "4%",
			minW: 140,
			vw: 28,
			maxW: 450,
			ratio: 210 / 160,
			rot: -8,
		},
		{
			src: "/images/10_18.jpeg",
			left: "73%",
			top: "3%",
			minW: 130,
			vw: 25,
			maxW: 400,
			ratio: 190 / 220,
			rot: 6,
		},
		{
			src: "/images/10_25.jpeg",
			left: "4%",
			top: "34%",
			minW: 125,
			vw: 24,
			maxW: 385,
			ratio: 180 / 190,
			rot: 5,
		},
		{
			src: "/images/10_26.jpg",
			left: "75%",
			top: "36%",
			minW: 135,
			vw: 27,
			maxW: 420,
			ratio: 200 / 160,
			rot: -6,
		},
		{
			src: "/images/11_1.jpeg",
			left: "7%",
			top: "68%",
			minW: 145,
			vw: 29,
			maxW: 465,
			ratio: 220 / 170,
			rot: 4,
		},
		{
			src: "/images/11_2.jpeg",
			left: "70%",
			top: "66%",
			minW: 140,
			vw: 28,
			maxW: 450,
			ratio: 210 / 190,
			rot: -4,
		},
		{
			src: "/images/9_20.jpeg",
			left: "36%",
			top: "2%",
			minW: 135,
			vw: 27,
			maxW: 420,
			ratio: 200 / 140,
			rot: 3,
		},
	].map((p) => ({
		...p,
		widthExpr: `clamp(${p.minW}px, ${p.vw}vw, ${p.maxW}px)`,
	}));

	const pinExpr = "clamp(9px, 1vw, 16px)";

	const dateFmt = new Intl.DateTimeFormat("en-US", { day: "numeric" });
	const monthFmt = new Intl.DateTimeFormat("en-US", { month: "short" });
	const timeFmt = new Intl.DateTimeFormat("en-US", {
		weekday: "short",
		hour: "numeric",
		minute: "2-digit",
	});
	const endTimeFmt = new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		minute: "2-digit",
	});
</script>

<div class="flex flex-col">
	<!-- Poster board hero -->
	<section
		class="relative min-h-[640px] overflow-hidden bg-blood-red px-6 pt-24 pb-16 sm:min-h-[780px] sm:pt-28 md:min-h-[880px] lg:min-h-[960px]"
	>
		<div class="pointer-events-none absolute inset-0">
			{#each photos as p}
				<img
					src={p.src}
					alt=""
					class="absolute rounded-sm border-2 object-cover shadow-xl sm:border-[3px] md:border-4"
					style="left: {p.left}; top: {p.top}; width: {p.widthExpr}; aspect-ratio: {p.ratio}; border-color: var(--color-jasmine-900); transform: rotate({p.rot}deg);"
				/>
				<div
					class="absolute rounded-full bg-jasmine shadow-md"
					style="left: calc({p.left} + ({p.widthExpr}) / 2 - ({pinExpr}) / 2); top: calc({p.top} - ({pinExpr}) / 2); width: {pinExpr}; height: {pinExpr};"
				></div>
			{/each}
		</div>

		<div
			class="relative mx-auto flex min-h-[640px] max-w-6xl items-center justify-center sm:min-h-[780px] md:min-h-[880px] lg:min-h-[960px]"
		>
			<div
				class="relative z-10 max-w-[85vw] -rotate-1 rounded bg-jasmine-900 px-6 py-7 text-center shadow-2xl sm:max-w-lg sm:px-10 sm:py-11"
			>
				<p
					class="mb-3 text-xs font-semibold tracking-[0.2em] text-blood-red sm:text-sm"
				>
					BUAI SOCIETY
				</p>
				<h1
					class="mb-4 text-2xl font-bold text-prussian-blue sm:text-3xl lg:text-4xl"
				>
					Who we are
				</h1>
				<p
					class="text-sm leading-relaxed text-deep-teal-100 sm:text-[15px]"
				>
					We are Boston University's largest student run AI community.
					We are dedicated to giving our members the technical skills
					to develop and use deep learning models in fields such as
					computer vision, robotics, natural language, and biology.

				</p>
			</div>
		</div>
	</section>

	<!-- Project groups -->
	<section class="bg-brick-ember-200 px-6 py-20">
		<div class="mx-auto flex max-w-4xl flex-col items-center gap-10">
			<h2 class="text-3xl font-bold text-jasmine">Project Groups</h2>
			<div class="flex flex-wrap justify-center gap-10">
				{#each PROJECT_GROUPS as group (group.id)}
					<a
						href={`/project-groups#${group.id}`}
						class="flex size-44 flex-col items-center justify-center gap-1 rounded-full bg-jasmine-900 px-4 text-center shadow-lg transition-transform hover:scale-105"
					>
						<span class="text-base font-bold text-prussian-blue">{group.title}</span>
						<span class="text-[11px] font-semibold tracking-wide text-brick-ember uppercase">{group.tag}</span>
					</a>
				{/each}
			</div>
			<a
				href="/project-groups"
				class="text-sm font-medium text-jasmine underline-offset-4 hover:underline"
			>
				See all project groups →
			</a>
		</div>
	</section>

	<!-- Events -->
	<section class="bg-brick-ember-100 px-6 py-20">
		<div class="mx-auto flex max-w-4xl flex-col gap-10">
			<div class="flex flex-wrap items-center justify-between gap-4">
				<h2 class="text-3xl font-bold text-jasmine">Upcoming Events</h2>
				<Button href={data.subscribeUrl} class="gap-2">
					<CalendarPlus size={16} />
					Subscribe to Calendar
				</Button>
			</div>

			{#if data.upcoming.length > 0}
				<div class="flex flex-col gap-4">
					{#each data.upcoming as event (event.id)}
						<div
							class="flex flex-col gap-4 rounded-xl border border-brick-ember-300 bg-blood-red-200 p-6 sm:flex-row sm:items-center"
						>
							<div class="text-center sm:mr-2">
								<div class="text-3xl font-bold text-white">
									{dateFmt.format(event.start)}
								</div>
								<div
									class="text-xs uppercase tracking-wide text-brick-ember-800"
								>
									{monthFmt.format(event.start)}
								</div>
							</div>
							<div>
								<h3 class="text-xl font-semibold text-white">
									{event.name}
								</h3>
								<p class="text-sm text-deep-teal-800">
									{timeFmt.format(event.start)} – {endTimeFmt.format(
										event.end,
									)}
									{#if event.location}
										· {event.location}
									{/if}
								</p>
							</div>
						</div>
					{/each}
				</div>
			{:else}
				<p class="text-brick-ember-800">
					No upcoming events yet — check back soon.
				</p>
			{/if}

			<a
				href="/events"
				class="self-center text-sm font-medium text-jasmine underline-offset-4 hover:underline"
			>
				View all events →
			</a>
		</div>
	</section>

	<!-- Footer -->
	<footer
		class="flex flex-col items-center gap-5 bg-blood-red-100 px-6 py-14 text-center"
	>
		<span class="text-lg font-semibold text-jasmine">BUAI Society</span>
		<div class="flex items-center gap-7">
			<a
				href={SOCIAL_LINKS.instagram}
				aria-label="Instagram"
				class="opacity-70 transition-opacity hover:opacity-100"
			>
				<img src="/images/instagram-alt.svg" alt="" class="size-5" />
			</a>
			<a
				href={SOCIAL_LINKS.linkedin}
				aria-label="LinkedIn"
				class="opacity-70 transition-opacity hover:opacity-100"
			>
				<img src="/images/linkedin-alt.svg" alt="" class="size-5" />
			</a>
			<a
				href={SOCIAL_LINKS.discord}
				aria-label="Discord"
				class="opacity-70 transition-opacity hover:opacity-100"
			>
				<img src="/images/discord-alt.svg" alt="" class="size-5" />
			</a>
			<a
				href={`mailto:${CONTACT.email}`}
				aria-label="Email"
				class="opacity-70 transition-opacity hover:opacity-100"
			>
				<Mail class="size-5 text-deep-teal-800" />
			</a>
		</div>
		<p class="text-xs text-deep-teal-600">
			© {new Date().getFullYear()} BUAI Society. All rights reserved.
		</p>
	</footer>
</div>
