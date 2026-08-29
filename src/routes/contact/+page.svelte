<script lang="ts">
	import { SOCIAL_LINKS, CONTACT } from '$lib/constants';
</script>

<div class="mx-auto flex min-h-[70vh] w-full max-w-md flex-col items-center justify-center px-4 pt-28 pb-16 sm:px-6">
	<div class="w-full rounded-lg border border-border bg-card p-6 text-center shadow-sm">
		<h1 class="mb-6 text-3xl font-semibold text-foreground">Contact Us</h1>

		<p class="mb-6 text-muted-foreground">Have questions or want to get involved? Reach out to us at:</p>
		<p class="mb-6">
			<a href={`mailto:${CONTACT.email}`} class="text-xl text-[#b22222] underline-offset-4 hover:underline">
				{CONTACT.email}
			</a>
		</p>

		<div class="mt-6">
			<p class="mb-2 text-muted-foreground">Join our community:</p>
			<div class="flex justify-center gap-4">
				<a
					href={SOCIAL_LINKS.discord}
					target="_blank"
					rel="noopener noreferrer"
					class="text-[#b22222] underline-offset-4 hover:underline"
				>
					Discord
				</a>
				<a
					href={SOCIAL_LINKS.instagram}
					target="_blank"
					rel="noopener noreferrer"
					class="text-[#b22222] underline-offset-4 hover:underline"
				>
					Instagram
				</a>
			</div>
		</div>
	</div>
</div>
