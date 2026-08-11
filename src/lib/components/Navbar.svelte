<script lang="ts">
	import { page } from '$app/state';
	import { Menu, X } from 'lucide-svelte';
	import SocialLinks from './SocialLinks.svelte';

	let isMenuOpen = $state(false);

	const links = [
		{ key: 'Home', href: '/' },
		{ key: 'Events', href: '/events' },
		{ key: 'Team', href: '/team' },
		{ key: 'Project Groups', href: '/project-groups' },
		{ key: 'Resources', href: '/resources' },
		{ key: 'Gallery', href: '/gallery' },
		{ key: 'Contact Us', href: '/contact' }
	];

	const isActive = (href: string) => page.url.pathname === href;
</script>

<header class="fixed top-0 right-0 left-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
	<nav class="mx-auto max-w-6xl px-4 py-4 sm:px-6">
		<div class="flex items-center justify-between">
			<a href="/" class="flex items-center gap-2">
				<img src="/images/logo.png" alt="BUAI Society logo" class="h-8 w-8" />
				<span class="text-lg font-bold text-foreground">BUAI Society</span>
			</a>

			<div class="hidden items-center gap-8 lg:flex">
				{#each links as item (item.key)}
					<a
						href={item.href}
						class={`relative text-base transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100 ${
							isActive(item.href) ? 'text-primary after:scale-x-100' : 'text-foreground hover:text-primary'
						}`}
					>
						{item.key}
					</a>
				{/each}
			</div>

			<div class="hidden lg:flex">
				<SocialLinks iconClass="size-6" />
			</div>

			<button
				class="text-foreground lg:hidden"
				onclick={() => (isMenuOpen = !isMenuOpen)}
				aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
				aria-expanded={isMenuOpen}
			>
				{#if isMenuOpen}
					<X size={24} />
				{:else}
					<Menu size={24} />
				{/if}
			</button>
		</div>

		{#if isMenuOpen}
			<div class="mt-4 flex flex-col gap-4 lg:hidden">
				{#each links as item (item.key)}
					<a
						href={item.href}
						class={`text-base ${isActive(item.href) ? 'text-primary' : 'text-foreground hover:text-primary'}`}
						onclick={() => (isMenuOpen = false)}
					>
						{item.key}
					</a>
				{/each}
				<SocialLinks iconClass="size-6" />
			</div>
		{/if}
	</nav>
</header>
