<script lang="ts">
	import { Mail } from 'lucide-svelte';
	import { SOCIAL_LINKS, CONTACT } from '$lib/constants';

	interface Member {
		name: string;
		role?: string;
		photo: string;
		linkedin: string;
	}

	const presidents: Member[] = [
		{ name: 'Denali Schlesinger', role: 'President', photo: '/images/denali-pic.jpeg', linkedin: 'https://linkedin.com/in/denalischlesinger' },
		{ name: 'Achyut Shastri', role: 'Vice President', photo: '/images/achyut-pic.webp', linkedin: 'https://www.linkedin.com/in/achyut-shastri-g/' }
	];

	const officers: Member[] = [
		{ name: 'Aakash Kumar', role: 'Speaker', photo: '/images/aakash-pic.jpg', linkedin: 'https://www.linkedin.com/in/aakashrkumar/' },
		{ name: 'Charlie Tran', role: 'Graphic Design', photo: '/images/charlie.jpg', linkedin: 'https://www.linkedin.com/in/charlie-tran-803a6538b/' },
		{ name: 'Dylan Lee', photo: '/images/dylan-pic.png', linkedin: 'https://linkedin.com/in/dylan-jae-lee' },
		{ name: 'Irene Deng', role: 'Treasurer', photo: '/images/irene-pic.png', linkedin: 'https://linkedin.com/in/irene-d-38551a219' },
		{ name: 'Nathaniel Lee', role: 'Tech', photo: '/images/nathaniel.jpeg', linkedin: 'https://www.linkedin.com/in/nathaniel-jm-lee' },
		{ name: 'William Dakare', role: 'Tech', photo: '/images/william-pic.png', linkedin: 'https://www.linkedin.com/in/william-dakare' }
	];

	const pastOfficers: Member[] = [
		{ name: 'Collin Barber', role: 'President', photo: '/images/collin-pic.png', linkedin: 'https://linkedin.com/in/collin-barber-14489524a' },
		{ name: 'Baiwen Zheng', role: 'Outreach', photo: '/images/baiwen-pic.png', linkedin: 'https://linkedin.com/in/baiwenzheng' },
		{ name: 'Varsha Athreya', role: 'Secretary', photo: '/images/varsha-pic.png', linkedin: 'https://linkedin.com/in/varsha-athreya' },
		{ name: 'Alan Nguyen', role: 'President', photo: '/images/alan-pic.png', linkedin: 'https://linkedin.com/in/nguyendesu' },
		{ name: 'Amanda Eng', photo: '/images/amanda-pic.jpeg', linkedin: 'https://linkedin.com/in/amanda-k-eng' },
		{ name: 'Felix Fan', role: 'Marketing', photo: '/images/felix-pic.png', linkedin: 'https://linkedin.com/in/felix-fan-055115173' },
		{ name: 'Wes Jorgensen', photo: '/images/wes-pic.png', linkedin: 'https://linkedin.com/in/wes-jorgensen-b5530a20b' }
	];
</script>

<div class="flex flex-col">
	<!-- Header -->
	<header class="flex flex-col items-center gap-3 bg-prussian-blue px-6 py-24 text-center">
		<p class="text-sm font-semibold tracking-[0.2em] text-jasmine">BUAI SOCIETY</p>
		<h1 class="text-4xl font-bold text-white sm:text-5xl">Meet the Team</h1>
		<p class="text-deep-teal-800">The students building and running BUAI Society.</p>
	</header>

	<div class="flex flex-col gap-16 bg-jasmine-900 px-6 py-16">
		<!-- Presidents -->
		<section class="flex flex-col items-center gap-8">
			<h2 class="text-2xl font-bold text-prussian-blue sm:text-3xl">Presidents</h2>
			<div class="flex flex-wrap justify-center gap-8">
				{#each presidents as member}
					<div
						class="flex w-56 flex-col items-center gap-2.5 rounded-2xl border border-deep-teal-900 bg-card px-8 py-9 text-center shadow-md"
					>
						<img
							src={member.photo}
							alt={member.name}
							class="size-28 rounded-full border-[3px] border-jasmine object-cover"
						/>
						<h3 class="text-lg font-bold text-prussian-blue">{member.name}</h3>
						{#if member.role}
							<p class="text-[11px] font-semibold tracking-wide text-brick-ember uppercase">{member.role}</p>
						{/if}
						<a
							href={member.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							class="mt-1 flex items-center gap-1.5 rounded-full bg-prussian-blue px-3 py-1.5 text-[11px] font-semibold text-jasmine transition-opacity hover:opacity-80"
						>
							<img src="/images/linkedin-alt.svg" alt="" class="size-3" />
							LinkedIn
						</a>
					</div>
				{/each}
			</div>
		</section>

		<!-- Officers -->
		<section class="flex flex-col items-center gap-8">
			<h2 class="text-2xl font-bold text-prussian-blue sm:text-3xl">Officers</h2>
			<div class="flex flex-wrap justify-center gap-6">
				{#each officers as member}
					<div
						class="flex w-[200px] flex-col items-center gap-2 rounded-xl border border-deep-teal-900 bg-card px-4 py-6 text-center shadow-sm transition-shadow hover:shadow-md"
					>
						<img
							src={member.photo}
							alt={member.name}
							class="size-20 rounded-full border-[3px] border-jasmine object-cover"
						/>
						<h3 class="text-[15px] font-bold text-prussian-blue">{member.name}</h3>
						{#if member.role}
							<p class="text-[10px] font-semibold tracking-wide text-brick-ember uppercase">{member.role}</p>
						{/if}
						<a
							href={member.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							class="mt-1 flex items-center gap-1.5 rounded-full bg-prussian-blue px-3 py-1 text-[10px] font-semibold text-jasmine transition-opacity hover:opacity-80"
						>
							<img src="/images/linkedin-alt.svg" alt="" class="size-2.5" />
							LinkedIn
						</a>
					</div>
				{/each}
			</div>
		</section>

		<!-- Past Officers -->
		<section class="flex flex-col items-center gap-8">
			<h2 class="text-2xl font-bold text-prussian-blue sm:text-3xl">Past Officers</h2>
			<div class="flex flex-wrap justify-center gap-6">
				{#each pastOfficers as member}
					<div
						class="flex w-[200px] flex-col items-center gap-2 rounded-xl border border-deep-teal-900 bg-deep-teal-900 px-4 py-6 text-center shadow-sm transition-shadow hover:shadow-md"
					>
						<img
							src={member.photo}
							alt={member.name}
							class="size-20 rounded-full border-[3px] border-deep-teal-700 object-cover grayscale-[35%]"
						/>
						<h3 class="text-[15px] font-bold text-deep-teal-200">{member.name}</h3>
						{#if member.role}
							<p class="text-[10px] font-semibold tracking-wide text-deep-teal-400 uppercase">{member.role}</p>
						{/if}
						<a
							href={member.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							class="mt-1 flex items-center gap-1.5 rounded-full bg-deep-teal-600 px-3 py-1 text-[10px] font-semibold text-deep-teal-100 transition-opacity hover:opacity-80"
						>
							<img src="/images/linkedin-alt.svg" alt="" class="size-2.5" />
							LinkedIn
						</a>
					</div>
				{/each}
			</div>
		</section>
	</div>

	<!-- Footer -->
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
</div>
