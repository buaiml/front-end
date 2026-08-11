<script lang="ts">
	import { SOCIAL_LINKS } from '$lib/constants';

	let { iconClass = 'size-5' }: { iconClass?: string } = $props();

	const links = [
		{ key: 'Discord', href: SOCIAL_LINKS.discord, icon: '/images/discord-alt.svg' },
		{ key: 'GitHub', href: SOCIAL_LINKS.github, icon: '/images/github-alt.svg' },
		{ key: 'Instagram', href: SOCIAL_LINKS.instagram, icon: '/images/instagram-alt.svg' },
		{ key: 'YouTube', href: SOCIAL_LINKS.youtube, icon: '/images/youtube-alt.svg' },
		{ key: 'LinkedIn', href: SOCIAL_LINKS.linkedin, icon: '/images/linkedin-alt.svg' }
	];
</script>

<div class="flex items-center gap-4">
	{#each links as link (link.key)}
		<a
			href={link.href}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={link.key}
			class="opacity-70 transition-all duration-300 hover:scale-110 hover:opacity-100"
		>
			<img src={link.icon} alt="" class={iconClass} />
		</a>
	{/each}
</div>
