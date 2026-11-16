<script lang="ts">
	import { Mail } from 'lucide-svelte';
	import { SOCIAL_LINKS, CONTACT } from '$lib/constants';
</script>

<footer class="flex flex-col items-center gap-5 bg-blood-red-100 px-6 py-14 text-center">
	<span class="text-lg font-semibold text-jasmine">BUAI Society</span>
	<div class="flex items-center gap-7">
		<a href={SOCIAL_LINKS.instagram} aria-label="Instagram" class="opacity-70 transition-opacity hover:opacity-100">
			<img src="/images/instagram-alt.svg" alt="" class="size-5" />
		</a>
		<a href={SOCIAL_LINKS.linkedin} aria-label="LinkedIn" class="opacity-70 transition-opacity hover:opacity-100">
			<img src="/images/linkedin-alt.svg" alt="" class="size-5" />
		</a>
		<a href={SOCIAL_LINKS.discord} aria-label="Discord" class="opacity-70 transition-opacity hover:opacity-100">
			<img src="/images/discord-alt.svg" alt="" class="size-5" />
		</a>
		<a href="mailto:{CONTACT.email}" aria-label="Email" class="opacity-70 transition-opacity hover:opacity-100">
			<Mail class="size-5 text-deep-teal-800" />
		</a>
	</div>
	<p class="text-xs text-deep-teal-600">© {new Date().getFullYear()} BUAI Society. All rights reserved.</p>
</footer>
