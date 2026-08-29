<script lang="ts">
	import GalleryCarousel from '$lib/components/GalleryCarousel.svelte';

	const sections = [
		{
			title: 'General Meeting',
			images: [
				{ src: '/images/9_13.jpg', alt: 'General Meeting 1 - Collin' },
				{ src: '/images/9_13-2.jpg', alt: 'General Meeting 1 - Collin' },
				{ src: '/images/9_13-3.jpg', alt: 'General Meeting 1 - Collin' },
				{ src: '/images/9_20.jpeg', alt: 'General Meeting 2 - Collin' },
				{ src: '/images/9_20-2.jpeg', alt: 'General Meeting 2 - Collin' },
				{ src: '/images/9_20-3.jpeg', alt: 'General Meeting 2 - Collin' },
				{ src: '/images/9_20-4.jpeg', alt: 'General Meeting 2 - Collin' },
				{ src: '/images/9_20-5.jpeg', alt: 'General Meeting 2 - Collin' },
				{ src: '/images/9_27.jpeg', alt: 'General Meeting 3 - Collin' },
				{ src: '/images/9_27-2.jpeg', alt: 'General Meeting 3 - Collin' },
				{ src: '/images/10_4.jpeg', alt: 'General Meeting 4 - Alan' },
				{ src: '/images/10_4-2.jpeg', alt: 'General Meeting 4 - Alan' },
				{ src: '/images/10_4-3.jpeg', alt: 'General Meeting 4 - Alan' },
				{ src: '/images/10_11-2.jpeg', alt: 'General Meeting 5 - Collin' },
				{ src: '/images/10_18.jpeg', alt: 'General Meeting 6 - Collin' },
				{ src: '/images/10_18-2.jpeg', alt: 'General Meeting 6 - Collin' },
				{ src: '/images/10_18-3.jpeg', alt: 'General Meeting 6 - Collin' },
				{ src: '/images/10_18-5.jpeg', alt: 'General Meeting 6 - Collin' },
				{ src: '/images/10_18-6.jpeg', alt: 'General Meeting 6 - Collin' },
				{ src: '/images/11_1.jpeg', alt: 'General Meeting 7 - Alan' },
				{ src: '/images/11_1-3.jpeg', alt: 'General Meeting 7 - Alan' },
				{ src: '/images/11_8.jpeg', alt: 'General Meeting 8 - Alan' }
			]
		},
		{
			title: 'Paper Reading',
			images: [
				{ src: '/images/9_19.jpeg', alt: 'Guest Speaker 1 - Shaunak' },
				{ src: '/images/9_19-2.jpeg', alt: 'Guest Speaker 1 - Shaunak' },
				{ src: '/images/10_19.jpeg', alt: 'Paper reading 1 - Collin' },
				{ src: '/images/10_19-2.jpeg', alt: 'Paper reading 1 - Collin' },
				{ src: '/images/10_19-3.jpeg', alt: 'Paper reading 1 - Collin' },
				{ src: '/images/10_19-4.jpeg', alt: 'Paper reading 1 - Collin' }
			]
		},
		{
			title: 'Pacathon',
			images: [
				{ src: '/images/10_25.jpeg', alt: 'Office hours' },
				{ src: '/images/10_25-2.jpeg', alt: 'Office hours' },
				{ src: '/images/10_25-3.jpeg', alt: 'Office hours' },
				{ src: '/images/10_25-5.jpeg', alt: 'Office hours' },
				{ src: '/images/10_25-6.jpeg', alt: 'Office hours' },
				{ src: '/images/10_25-7.jpeg', alt: 'Office hours' },
				{ src: '/images/10_25-9.jpeg', alt: 'Office hours' },
				{ src: '/images/10_26-2 2.jpeg', alt: 'Pacathon' },
				{ src: '/images/10_26-3 2.jpeg', alt: 'Pacathon' },
				{ src: '/images/10_26-2.jpeg', alt: 'Pacathon' },
				{ src: '/images/10_26-3.jpeg', alt: 'Pacathon' },
				{ src: '/images/10_26.jpg', alt: 'Pacathon' },
				{ src: '/images/10_26-4.jpeg', alt: 'Pacathon' },
				{ src: '/images/10_26-5.jpeg', alt: 'Pacathon' },
				{ src: '/images/10_26-6.jpeg', alt: 'Pacathon' },
				{ src: '/images/10_26-7.jpeg', alt: 'Pacathon' },
				{ src: '/images/10_26-8.jpeg', alt: 'Pacathon' },
				{ src: '/images/10_26-9.jpeg', alt: 'Pacathon' },
				{ src: '/images/10_26-10.jpeg', alt: 'Pacathon' },
				{ src: '/images/10_26-11.jpeg', alt: 'Pacathon' },
				{ src: '/images/10_26-12.jpeg', alt: 'Pacathon' },
				{ src: '/images/10_26-13.jpeg', alt: 'Pacathon' },
				{ src: '/images/10_26-14.jpeg', alt: 'Pacathon' },
				{ src: '/images/10_26-15.jpeg', alt: 'Pacathon' },
				{ src: '/images/11_2-4.jpeg', alt: 'Winners' },
				{ src: '/images/11_2-2.jpeg', alt: 'Winners' }
			]
		},
		{
			title: 'Favorites',
			images: [
				{ src: '/images/9_28-2.jpeg', alt: 'Terminator' },
				{ src: '/images/9_28-3.jpeg', alt: 'Terminator' },
				{ src: '/images/9_28.jpeg', alt: 'Terminator' },
				{ src: '/images/9_27-3.jpeg', alt: 'Collin teaching' },
				{ src: '/images/9_25.jpeg', alt: 'Collin at marci' },
				{ src: '/images/10_5.jpeg', alt: 'Alan at STEM Splash' },
				{ src: '/images/10_7.jpeg', alt: 'Collin and Alan' },
				{ src: '/images/10_7-2.jpeg', alt: 'Collin and Dylan' },
				{ src: '/images/10_11.jpeg', alt: 'Reel' },
				{ src: '/images/10_18-4.jpeg', alt: 'Snake' },
				{ src: '/images/10_25-4.jpeg', alt: 'Meeting pic' },
				{ src: '/images/10_25-8.jpeg', alt: 'Collin' },
				{ src: '/images/10_25-10.jpeg', alt: 'Dylan' },
				{ src: '/images/11_2-3.jpeg', alt: 'Winners' }
			]
		}
	];
</script>

<div class="mx-auto flex w-full max-w-4xl flex-col gap-10 px-4 pt-28 pb-16 sm:px-6">
	<h1 class="text-center text-3xl font-semibold text-foreground">Gallery</h1>
	{#each sections as section (section.title)}
		<GalleryCarousel title={section.title} images={section.images} />
	{/each}
</div>
