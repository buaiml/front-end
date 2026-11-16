<script lang="ts">
	import { ArrowRight, ArrowUpRight } from 'lucide-svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import { PROJECT_GROUPS } from '$lib/project-groups';
	import { SIGNUP_FORM_URL } from '$lib/constants';
</script>

<div class="flex flex-col">
	<!-- Header -->
	<header class="flex flex-col items-center gap-4 bg-prussian-blue px-6 py-24 text-center">
		<p class="text-sm font-semibold tracking-[0.2em] text-jasmine">BUAI SOCIETY</p>
		<h1 class="text-4xl font-bold text-white sm:text-5xl">Project Groups</h1>
		<p class="max-w-xl text-deep-teal-800">
			This year's projects, run by students for students. Pick a group and dive in.
		</p>
		<a
			href={SIGNUP_FORM_URL}
			target="_blank"
			rel="noopener noreferrer"
			class="mt-2 flex items-center gap-2 rounded-full bg-jasmine px-6 py-3 text-sm font-semibold text-prussian-blue transition-opacity hover:opacity-85"
		>
			Sign Up for a Project
			<ArrowUpRight size={16} />
		</a>
	</header>

	<!-- Project groups -->
	<div class="flex flex-col gap-16 bg-jasmine-900 px-6 py-20">
		{#each PROJECT_GROUPS as group (group.id)}
			<section
				id={group.id}
				class="mx-auto flex w-full max-w-4xl scroll-mt-24 flex-col overflow-hidden rounded-2xl border border-deep-teal-900 bg-card shadow-md sm:flex-row"
			>
				<img
					src={group.image}
					alt={group.title}
					class="h-56 w-full object-cover sm:h-auto sm:w-72 sm:shrink-0"
				/>
				<div class="flex flex-col gap-6 p-8 sm:p-10">
					<span
						class="w-fit rounded-full bg-brick-ember-100 px-4 py-1.5 text-xs font-semibold tracking-wide text-brick-ember uppercase"
					>
						{group.tag}
					</span>
					<h2 class="text-3xl font-bold text-prussian-blue sm:text-4xl">{group.title}</h2>
					<p class="leading-relaxed text-deep-teal-100">{@html group.description}</p>
					<div class="mt-auto flex flex-col gap-1 border-t border-deep-teal-900 pt-5">
						<p class="text-sm text-deep-teal-300">Fresh from the lab: wins, dead ends, and everything in between.</p>
						<a
							href="/blogs?tag={group.blogTag}"
							class="group flex w-fit items-center gap-2 font-semibold text-brick-ember underline-offset-4 hover:underline"
						>
							Read the latest from {group.title}
							<ArrowRight size={16} class="transition-transform group-hover:translate-x-1" />
						</a>
					</div>
				</div>
			</section>
		{/each}

		<a
			href={SIGNUP_FORM_URL}
			target="_blank"
			rel="noopener noreferrer"
			class="mx-auto flex items-center gap-2 rounded-full bg-prussian-blue px-6 py-3 text-sm font-semibold text-jasmine transition-opacity hover:opacity-85"
		>
			Sign Up for a Project
			<ArrowUpRight size={16} />
		</a>
	</div>

	<SiteFooter />
</div>
